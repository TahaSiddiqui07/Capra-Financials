"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, DollarSign, PieChart, Target, Calendar } from "lucide-react"
import { motion } from "framer-motion"

const portfolioStats = [
  {
    title: "Total Portfolio Value",
    value: "$127,450",
    change: "+12.5%",
    changeType: "positive",
    icon: DollarSign,
    description: "vs last month",
  },
  {
    title: "Total Returns",
    value: "$23,890",
    change: "+8.2%",
    changeType: "positive",
    icon: TrendingUp,
    description: "this year",
  },
  {
    title: "Active Investments",
    value: "12",
    change: "+2",
    changeType: "positive",
    icon: PieChart,
    description: "new this month",
  },
  {
    title: "Average ROI",
    value: "23.4%",
    change: "+2.1%",
    changeType: "positive",
    icon: Target,
    description: "annual average",
  },
]

export function PortfolioOverview() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Portfolio Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400">Welcome back, Ahmed. Here's your investment overview.</p>
        </div>
        <Badge variant="outline" className="flex items-center space-x-2">
          <Calendar className="h-4 w-4" />
          <span>Last updated: Today, 2:30 PM</span>
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {portfolioStats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.title}</CardTitle>
                <stat.icon className="h-4 w-4 text-emerald-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                <div className="flex items-center space-x-2 mt-2">
                  <div
                    className={`flex items-center space-x-1 text-sm ${
                      stat.changeType === "positive" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {stat.changeType === "positive" ? (
                      <TrendingUp className="h-3 w-3" />
                    ) : (
                      <TrendingDown className="h-3 w-3" />
                    )}
                    <span>{stat.change}</span>
                  </div>
                  <span className="text-xs text-gray-500">{stat.description}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
