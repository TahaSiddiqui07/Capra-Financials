import { Resend } from 'resend';

// Initialize Resend client
export const resend = new Resend(process.env.RESEND_API_KEY || '');

// Domain configuration constants
export const DOMAIN_ID = process.env.RESEND_DOMAIN_ID || '';

// Configure domain settings
export async function configureDomainSettings(options?: {
  openTracking?: boolean;
  clickTracking?: boolean;
}) {
  if (!DOMAIN_ID) {
    console.warn('RESEND_DOMAIN_ID not set. Domain configuration skipped.');
    return;
  }

  try {
    const response = await resend.domains.update({
      id: DOMAIN_ID,
      openTracking: options?.openTracking ?? false,
      clickTracking: options?.clickTracking ?? true,
    });
    
    console.log('Domain settings updated successfully:', response);
    return response;
  } catch (error: any) {
    console.error('Failed to update domain settings:', error?.message || error);
    throw new Error('Domain configuration failed');
  }
} 