"use client"

import { ClaimForm } from "@/components/claim-form"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Suspense } from "react"
import { EmailTemplate, AdminEmailTemplate } from "@/components/EmailTemplate"

// Separate client component for animated content
const AnimatedContent = () => {
  return (
    <>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h2 className="text-3xl font-bold text-gray-900">Submit Your Claim</h2>
        <p className="mt-2 text-gray-600">
          Fill out the form below to start your debt recovery process with Capra Financials
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <ClaimForm />
      </motion.div>

      <motion.div
        className="mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
          <h3 className="font-medium text-emerald-800 mb-2">What happens next?</h3>
          <p className="text-sm text-emerald-700">
            After submitting your claim, our debt recovery specialists will review your case within 24 hours. We'll
            contact you to discuss your options and create a tailored recovery strategy for your situation.
          </p>
        </div>
      </motion.div>
    </>
  )
}

// Function to send emails using the API endpoint
export async function sendClaimEmails(formData: { fullName: string; email: string; phone: string; description: string }) {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to send emails');
    }

    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
}

export default function ClaimPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-white flex flex-col">
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="mx-auto w-full max-w-md">
          {/* Header */}
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to home
            </Link>
            <Suspense fallback={<div>Loading...</div>}>
              <AnimatedContent />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}
