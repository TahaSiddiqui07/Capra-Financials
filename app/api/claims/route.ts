import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'
import type { Database } from '@/types/supabase'
import { sendEmail } from '@/lib/sendEmail'

export async function POST(request: Request) {
  try {
    // Log environment variables (without sensitive keys)
    console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL)
    console.log('Supabase keys available:', 
      !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY, 
      !!process.env.SUPABASE_SERVICE_ROLE_KEY
    )
    
    const body = await request.json()
    const { fullName, email, phone, description } = body

    // Validate required fields
    if (!fullName || !email || !phone || !description) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Insert the claim into Supabase
    try {
      const { data, error } = await supabaseAdmin
        .from('claims')
        .insert([
          { 
            full_name: fullName, 
            email, 
            phone, 
            description,
            status: 'new',
            updated_at: new Date().toISOString()
          }
        ])
        .select()

      if (error) {
        console.error('Supabase error:', error)
        return NextResponse.json(
          { error: 'Failed to submit claim' },
          { status: 500 }
        )
      }

      // Send confirmation email to client
      try {
        await sendEmail({
          to: email,
          subject: 'Your Claim Has Been Received - Capra Financials',
          html: `<p>Dear ${fullName},</p>
                 <p>Thank you for submitting your claim with Capra Financials. Our team is now investigating your case and will contact you within 24 hours.</p>
                 <p><b>Claim details:</b></p>
                 <ul>
                   <li><b>Name:</b> ${fullName}</li>
                   <li><b>Email:</b> ${email}</li>
                   <li><b>Phone:</b> ${phone}</li>
                   <li><b>Description:</b> ${description}</li>
                 </ul>
                 <p>If you have any questions or need to provide additional information, please reply to this email.</p>
                 <p>Best regards,<br/>Capra Financials Team</p>`
        })
        
        // Send notification email to team members
        await sendEmail({
          to: ['tahasiddiqui1235@gmail.com', 'Alwaan@hotmail.co.uk'],
          subject: `New Claim Submission: ${fullName}`,
          html: `<p>A new claim has been submitted:</p>
                 <p><b>Claim details:</b></p>
                 <ul>
                   <li><b>Name:</b> ${fullName}</li>
                   <li><b>Email:</b> ${email}</li>
                   <li><b>Phone:</b> ${phone}</li>
                   <li><b>Description:</b> ${description}</li>
                   <li><b>Submission Time:</b> ${new Date().toLocaleString()}</li>
                 </ul>
                 <p>Please review this claim and follow up with the client within 24 hours.</p>`
        })
      } catch (emailError) {
        console.error('Error sending email via Resend:', emailError)
      }

      return NextResponse.json({ success: true, data }, { status: 201 })
    } catch (supabaseError) {
      console.error('Supabase operation error:', supabaseError)
      return NextResponse.json(
        { error: 'Database operation failed' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 