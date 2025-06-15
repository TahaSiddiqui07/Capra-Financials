import { createClient } from '@supabase/supabase-js'
import type { Database } from '@/types/supabase'

// Initialize the Supabase admin client with service role key
// This should only be used in server-side contexts
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

// Log connection info (without exposing keys)
console.log('Supabase admin client - URL configured:', !!supabaseUrl)
console.log('Supabase admin client - Service key configured:', !!supabaseServiceKey)

if (!supabaseUrl) {
  console.error('Missing NEXT_PUBLIC_SUPABASE_URL environment variable')
}

if (!supabaseServiceKey) {
  console.error('Missing SUPABASE_SERVICE_ROLE_KEY environment variable')
}

// Create the client with options for better error handling
export const supabaseAdmin = createClient<Database>(
  supabaseUrl, 
  supabaseServiceKey,
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    }
  }
)

// Helper function to check if Supabase connection is working
export async function checkSupabaseConnection() {
  try {
    console.log('Testing Supabase connection...')
    
    // Try a simpler approach first - just ping the URL
    try {
      const response = await fetch(`${supabaseUrl}/rest/v1/`, {
        method: 'GET',
        headers: {
          'apikey': supabaseServiceKey,
          'Content-Type': 'application/json'
        }
      })
      
      console.log('Basic connectivity test:', response.status)
      
      if (!response.ok) {
        console.error('Basic connectivity failed:', await response.text())
      }
    } catch (e) {
      console.error('Basic connectivity test failed:', e)
    }
    
    // Now try the actual query
    const { data, error } = await supabaseAdmin.from('claims').select('count').limit(1)
    
    if (error) {
      console.error('Supabase connection error:', error)
      return false
    }
    
    console.log('Supabase connection successful:', data)
    return true
  } catch (error) {
    console.error('Failed to connect to Supabase:', error)
    return false
  }
} 