import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  email?: string;
  phone?: string;
  description?: string;
}

export const EmailTemplate = ({
  firstName,
  email,
  phone,
  description,
}: EmailTemplateProps): React.ReactElement => (
  <div>
    <h1>Dear {firstName},</h1>
    <p>Thank you for submitting your claim. Our team is now investigating your case and will contact you within 24 hours.</p>
    
    <h2>Claim details:</h2>
    <ul>
      <li><strong>Name:</strong> {firstName}</li>
      {email && <li><strong>Email:</strong> {email}</li>}
      {phone && <li><strong>Phone:</strong> {phone}</li>}
      {description && <li><strong>Description:</strong> {description}</li>}
    </ul>
    
    <p>Best regards,<br/>Capra Financials Team</p>
  </div>
);

export const AdminEmailTemplate = ({
  firstName,
  email,
  phone,
  description,
}: EmailTemplateProps): React.ReactElement => (
  <div>
    <h1>New Claim Submission: {firstName}</h1>
    
    <h2>Claim details:</h2>
    <ul>
      <li><strong>Name:</strong> {firstName}</li>
      {email && <li><strong>Email:</strong> {email}</li>}
      {phone && <li><strong>Phone:</strong> {phone}</li>}
      {description && <li><strong>Description:</strong> {description}</li>}
      <li><strong>Submitted:</strong> {new Date().toLocaleString()}</li>
    </ul>
  </div>
); 