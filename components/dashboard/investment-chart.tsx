"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

export function InvestmentChart() {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-xl font-bold">Portfolio Performance</CardTitle>
          <p className="text-sm text-gray-600 dark:text-gray-400">Your investment growth over time</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            1M
          </Button>
          <Button variant="outline" size="sm">
            3M
          </Button>
          <Button variant="default" size="sm" className="bg-emerald-600 hover:bg-emerald-700">
            6M
          </Button>
          <Button variant="outline" size="sm">
            1Y
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] relative">
          <svg className="w-full h-full" viewBox="0 0 800 300" preserveAspectRatio="none">
            {/* Grid lines */}
            <defs>
              <pattern id="grid" width="80" height="60" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 60" fill="none" stroke="#e5e7eb" strokeWidth="1" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />

            {/* Area fill */}
            <motion.path
              d="M0,250 C100,240 200,220 300,200 C400,180 500,160 600,140 C700,120 750,110 800,100 L800,300 L0,300 Z"
              fill="url(#gradient)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
            />

            {/* Main line */}
            <motion.path
              d="M0,250 C100,240 200,220 300,200 C400,180 500,160 600,140 C700,120 750,110 800,100"
              fill="none"
              stroke="#10B981"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
            />

            {/* Gradient definition */}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="0.05" />
              </linearGradient>
            </defs>

            {/* Data points */}
            <motion.circle
              cx="800"
              cy="100"
              r="6"
              fill="#10B981"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 2.5 }}
            />
          </svg>

          {/* Performance badge */}
          <div className="absolute top-4 right-4">
            <Badge className="bg-green-100 text-green-800 border-green-200">
              <TrendingUp className="h-3 w-3 mr-1" />
              +23.4% YTD
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t">
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">Best Month</p>
            <p className="text-lg font-semibold text-green-600">+8.2%</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">Worst Month</p>
            <p className="text-lg font-semibold text-red-600">-2.1%</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">Volatility</p>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">4.2%</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
