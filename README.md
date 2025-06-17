# Capra Financials

A debt recovery platform built with Next.js and Supabase.

## Setup Instructions

### 1. Supabase Setup

1. Create a Supabase account at [supabase.com](https://supabase.com)
2. Create a new project
3. Get your project URL and API keys from the project settings
4. Create a `.env.local` file in the root directory with the following variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
   ```

### 2. Email Setup with Resend

1. Create a Resend account at [resend.com](https://resend.com)
2. Add and verify your domain (caprafinancials.com)
3. Create an API key in the Resend dashboard
4. Add the following to your `.env.local` file:
   ```
   RESEND_API_KEY=your-resend-api-key
   RESEND_DOMAIN_ID=your-domain-id
   ```
5. Test the email functionality by visiting `/api/test-email`

### 3. Database Setup

1. In your Supabase project, go to the SQL Editor
2. Create the necessary tables by running the SQL commands in the `schema.sql` file

### 4. Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### 5. Testing the Connection

1. After setting up your environment variables, visit `/api/test-connection` to verify your Supabase connection is working properly.
2. Visit `/api/test-email` to verify your email configuration is working properly.
3. Visit `/api/env-test` to check your environment variables and domain status.

## Project Structure

- `/app` - Next.js app directory with pages and API routes
- `/components` - React components
- `/lib` - Utility functions and services
- `/types` - TypeScript type definitions

## API Routes

- `POST /api/claims` - Submit a new claim
- `GET /api/test-connection` - Test Supabase connection
- `GET /api/test-email` - Test email functionality
- `GET /api/env-test` - Test environment variables 