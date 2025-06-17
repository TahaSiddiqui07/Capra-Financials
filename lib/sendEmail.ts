import { resend } from './resendConfig';
import React from 'react';

type SendEmailParams = {
  to: string | string[];
  subject: string;
  html?: string;
  text?: string;
  react?: React.ReactElement;
};

export async function sendEmail({ to, subject, html, text, react }: SendEmailParams) {
  if (!html && !text && !react) {
    throw new Error('Either html, text, or react content must be provided');
  }

  try {
    // Use the caprafinancials.com domain for sending emails
    const fromEmail = 'Capra Financials <noreply@caprafinancials.com>';
    
    // Create the base email options
    const emailOptions = {
      from: fromEmail,
      to: Array.isArray(to) ? to : [to],
      subject,
    };

    // Send email with the appropriate content type
    let response;
    if (react) {
      response = await resend.emails.send({
        ...emailOptions,
        react,
      });
    } else if (html) {
      response = await resend.emails.send({
        ...emailOptions,
        html,
        ...(text ? { text } : {}),
      });
    } else {
      response = await resend.emails.send({
        ...emailOptions,
        text: text || '',
      });
    }

    return response;
  } catch (error: any) {
    console.error('Failed to send email via Resend:', error?.message || error);
    throw new Error('Email sending failed');
  }
}
