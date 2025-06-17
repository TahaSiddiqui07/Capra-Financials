"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-emerald-600 via-emerald-500 to-emerald-700 dark:from-emerald-800 dark:via-emerald-700 dark:to-emerald-900 text-white w-full overflow-hidden">
      <div className="absolute inset-0 bg-black/10" />
      <div className="relative w-full px-4 sm:px-6 lg:container lg:mx-auto py-16 sm:py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-8 items-center w-full">
          <div className="text-center md:text-left w-full">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Capra Financials
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-emerald-100 max-w-3xl mx-auto md:mx-0 leading-relaxed px-2 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              No recovery, no fees — it's that simple. We handle debt recovery through litigation with zero upfront costs, so you only pay when we succeed.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start items-center w-full px-4 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link href="/claim">
                <Button
                  size="lg"
                  className="bg-white text-emerald-600 hover:bg-gray-100 dark:bg-gray-100 dark:hover:bg-gray-200 dark:text-emerald-700 px-8 py-3 text-lg font-semibold"
                >
                  Submit Your Claim
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>

          <div className="hidden md:block">
            <FinanceAnimation />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  )
}

function FinanceAnimation() {
  return (
    <div className="relative h-[400px] w-full">
      {/* Dashboard Background */}
      <motion.div
        className="absolute top-10 right-0 w-[90%] h-[300px] bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-xl overflow-hidden"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div className="absolute top-4 left-4 flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
      </motion.div>

      {/* Chart */}
      <motion.div
        className="absolute top-40 right-10 w-[70%] h-[180px] bg-emerald-800/50 backdrop-blur-sm rounded-lg border border-emerald-600/30 overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
          <motion.path
            d="M0,100 L0,80 C20,70 40,90 60,80 C80,70 100,50 120,40 C140,30 160,50 180,40 C200,30 220,20 240,30 C260,40 280,60 300,50 L300,100 Z"
            fill="rgba(16, 185, 129, 0.2)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.8 }}
          />
          <motion.path
            d="M0,80 C20,70 40,90 60,80 C80,70 100,50 120,40 C140,30 160,50 180,40 C200,30 220,20 240,30 C260,40 280,60 300,50"
            fill="none"
            stroke="#10B981"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.8 }}
          />
        </svg>
      </motion.div>

      {/* Circular Progress */}
      <motion.div
        className="absolute top-20 left-10 w-[120px] h-[120px] bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <svg width="100" height="100" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="8" />
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#10B981"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray="251.2"
            initial={{ strokeDashoffset: 251.2 }}
            animate={{ strokeDashoffset: 75 }}
            transition={{ duration: 2, delay: 1.2 }}
          />
          <text x="50" y="55" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">
            85%
          </text>
        </svg>
      </motion.div>

      {/* Data Points */}
      <motion.div
        className="absolute bottom-20 left-20 w-[180px] h-[80px] bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.4 }}
      >
        <div className="flex justify-between items-center mb-2">
          <div className="h-2 w-16 bg-white/20 rounded"></div>
          <div className="h-2 w-8 bg-emerald-400 rounded"></div>
        </div>
        <div className="flex justify-between items-center mb-2">
          <div className="h-2 w-12 bg-white/20 rounded"></div>
          <div className="h-2 w-12 bg-emerald-400 rounded"></div>
        </div>
        <div className="flex justify-between items-center">
          <div className="h-2 w-14 bg-white/20 rounded"></div>
          <div className="h-2 w-10 bg-emerald-400 rounded"></div>
        </div>
      </motion.div>

      {/* Floating Icons */}
      <motion.div
        className="absolute top-10 right-20 w-10 h-10 bg-emerald-400 rounded-full flex items-center justify-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 1.6,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          repeatDelay: 2,
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
            clipRule="evenodd"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-40 right-10 w-8 h-8 bg-white rounded-full flex items-center justify-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 1.8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          repeatDelay: 1.5,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-emerald-600"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
            clipRule="evenodd"
          />
        </svg>
      </motion.div>
    </div>
  )
}
