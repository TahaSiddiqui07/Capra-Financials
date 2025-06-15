import { NextResponse } from 'next/server'
import { checkSupabaseConnection } from '@/lib/supabase-admin'

export async function GET() {
  try {
    const isConnected = await checkSupabaseConnection()
    
    if (isConnected) {
      return NextResponse.json({ 
        status: 'success', 
        message: 'Successfully connected to Supabase',
        supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL
      })
    } else {
      return NextResponse.json({ 
        status: 'error', 
        message: 'Failed to connect to Supabase',
        supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL
      }, { status: 500 })
    }
  } catch (error) {
    console.error('Error testing connection:', error)
    return NextResponse.json({ 
      status: 'error', 
      message: 'Error testing connection',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
} 