"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, AlertCircle, Lightbulb } from "lucide-react"

const insights = [
  {
    type: "trend",
    title: "Islamic Fintech Sector Surge",
    description: "Islamic fintech investments have grown 45% this quarter, outperforming traditional markets.",
    impact: "High",
    icon: TrendingUp,
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    type: "opportunity",
    title: "Halal E-commerce Expansion",
    description: "New opportunities in Southeast Asian halal e-commerce platforms showing 30% growth potential.",
    impact: "Medium",
    icon: Lightbulb,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    type: "alert",
    title: "Market Volatility Warning",
    description: "Increased volatility expected in tech sector due to regulatory changes. Consider diversification.",
    impact: "Medium",
    icon: AlertCircle,
    color: "text-yellow-600",
    bgColor: "bg-yellow-100",
  },
]

const marketStats = [
  { label: "Islamic Finance Market", value: "$3.2T", change: "+8.2%" },
  { label: "Halal Industry Growth", value: "12.3%", change: "+2.1%" },
  { label: "Fintech Investments", value: "$45B", change: "+15.7%" },
]

export function MarketInsights() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-bold">Market Insights</CardTitle>
        <p className="text-sm text-gray-600 dark:text-gray-400">Stay informed about market trends and opportunities</p>
      </CardHeader>
      <CardContent>
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {insights.map((insight, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <div className="flex items-start space-x-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${insight.bgColor}`}>
                    <insight.icon className={`h-5 w-5 ${insight.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white">{insight.title}</h4>
                      <Badge variant={insight.impact === "High" ? "default" : "secondary"} className="text-xs">
                        {insight.impact} Impact
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{insight.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900 dark:text-white">Market Overview</h4>
            {marketStats.map((stat, index) => (
              <div key={index} className="border rounded-lg p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                <div className="flex items-center space-x-2 mt-1">
                  <p className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                  <div className="flex items-center space-x-1 text-sm text-green-600">
                    <TrendingUp className="h-3 w-3" />
                    <span>{stat.change}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
