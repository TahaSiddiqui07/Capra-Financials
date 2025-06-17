import { NextResponse } from 'next/server';
import { resend, DOMAIN_ID, DOMAIN_NAME } from '@/lib/resendConfig';

export async function GET() {
  try {
    // Check if Resend API key is set
    const hasResendApiKey = !!process.env.RESEND_API_KEY;
    
    // Check domain status
    let domainStatus = { status: 'unknown' };
    
    try {
      // If we have a domain ID, check that specific domain
      if (DOMAIN_ID) {
        const domain = await resend.domains.get(DOMAIN_ID);
        domainStatus = domain;
      } else {
        // Otherwise, list all domains
        const domains = await resend.domains.list();
        domainStatus = {
          domains: domains.data,
          message: `Looking for domain: ${DOMAIN_NAME}`
        };
      }
    } catch (domainError: any) {
      domainStatus = {
        error: domainError?.message || 'Failed to check domain status',
        status: 'error'
      };
    }
    
    return NextResponse.json({
      environment: process.env.NODE_ENV,
      hasResendApiKey,
      hasDomainId: !!DOMAIN_ID,
      domainName: DOMAIN_NAME,
      domainStatus,
      timestamp: new Date().toISOString()
    }, { status: 200 });
  } catch (error: any) {
    console.error('Environment test error:', error);
    return NextResponse.json({
      error: error?.message || 'Failed to check environment',
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
} 