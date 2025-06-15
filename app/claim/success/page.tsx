"use client"

import { CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function ClaimSuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-white flex flex-col">
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="mx-auto w-full max-w-md">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CheckCircle className="h-16 w-16 text-emerald-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Claim Submitted Successfully</h1>
            <p className="text-gray-600 mb-8">
              Thank you for submitting your claim. Our team will review your case and contact you shortly.
            </p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100 mb-8 text-left">
                <h3 className="font-medium text-emerald-800 mb-2">What happens next?</h3>
                <ul className="text-sm text-emerald-700 space-y-2">
                  <li className="flex items-start">
                    <span className="font-medium mr-2">1.</span>
                    Our debt recovery specialists will review your case within 24 hours
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">2.</span>
                    We'll contact you to discuss your options and next steps
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">3.</span>
                    A tailored recovery strategy will be created for your situation
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <Link href="/" passHref>
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                Return to Home
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 