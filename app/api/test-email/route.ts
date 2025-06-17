import { NextResponse } from 'next/server'
import { sendEmail } from '@/lib/sendEmail'

export async function GET(request: Request) {
  try {
    // Send a test email to verify functionality
    const response = await sendEmail({
      to: ['tahasiddiqui1235@gmail.com', 'Alwaan@hotmail.co.uk'],
      subject: 'Capra Financials - Email Test',
      html: `
        <h1>Email Test from Capra Financials</h1>
        <p>This is a test email to verify that the email sending functionality is working correctly.</p>
        <p>If you received this email, it means the system is configured properly.</p>
        <p>Test details:</p>
        <ul>
          <li>Time: ${new Date().toLocaleString()}</li>
          <li>Domain: caprafinancials.com</li>
          <li>Sender: noreply@caprafinancials.com</li>
        </ul>
        <p>Best regards,<br/>Capra Financials Team</p>
      `
    })

    return NextResponse.json({ 
      success: true, 
      message: 'Test email sent successfully',
      details: response
    })
  } catch (error: any) {
    console.error('Failed to send test email:', error?.message || error)
    return NextResponse.json({ 
      success: false, 
      error: error?.message || 'Failed to send test email' 
    }, { status: 500 })
  }
} 