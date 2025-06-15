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

      // Send email to user using Resend API (via utility)
      try {
        await sendEmail({
          to: email,
          subject: 'Your claim is being investigated',
          html: `<p>Dear ${fullName},</p>
                 <p>Thank you for submitting your claim. Our team is now investigating your case and will contact you within 24 hours.</p>
                 <p><b>Claim details:</b></p>
                 <ul>
                   <li><b>Name:</b> ${fullName}</li>
                   <li><b>Email:</b> ${email}</li>
                   <li><b>Phone:</b> ${phone}</li>
                   <li><b>Description:</b> ${description}</li>
                 </ul>
                 <p>Best regards,<br/>Capra Financials Team</p>`
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