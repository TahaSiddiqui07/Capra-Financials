import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate, AdminEmailTemplate } from '@/components/EmailTemplate';

// Initialize Resend with server-side API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, description } = body;

    // Validate required fields
    if (!fullName || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email to the user
    const userEmailResponse = await resend.emails.send({
      from: 'Capra Financials <onboarding@resend.dev>',
      to: [email],
      subject: 'Your claim is being investigated',
      react: EmailTemplate({ 
        firstName: fullName,
        email,
        phone,
        description
      }),
    });

    // Send notification to backup email
    const adminEmailResponse = await resend.emails.send({
      from: 'Capra Financials <onboarding@resend.dev>',
      to: ['basharsbackup@gmail.com'],
      subject: `New Claim Submission: ${fullName}`,
      react: AdminEmailTemplate({
        firstName: fullName,
        email,
        phone,
        description
      }),
    });

    return NextResponse.json({
      success: true,
      userEmailId: userEmailResponse.id,
      adminEmailId: adminEmailResponse.id
    });
  } catch (error: any) {
    console.error('Error sending email via Resend:', error?.message || error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 