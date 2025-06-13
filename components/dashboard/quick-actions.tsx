"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, TrendingUp, Download, Eye, BarChart3 } from "lucide-react"

const actions = [
  {
    title: "New Investment",
    description: "Explore opportunities",
    icon: Plus,
    color: "bg-emerald-600 hover:bg-emerald-700",
  },
  {
    title: "Portfolio Analysis",
    description: "View detailed reports",
    icon: BarChart3,
    color: "bg-blue-600 hover:bg-blue-700",
  },
  {
    title: "Market Insights",
    description: "Latest market trends",
    icon: TrendingUp,
    color: "bg-purple-600 hover:bg-purple-700",
  },
  {
    title: "Download Reports",
    description: "Export your data",
    icon: Download,
    color: "bg-gray-600 hover:bg-gray-700",
  },
]

export function QuickActions() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Quick Actions</CardTitle>
        <p className="text-sm text-gray-600 dark:text-gray-400">Manage your investments</p>
      </CardHeader>
      <CardContent className="space-y-3">
        {actions.map((action, index) => (
          <Button
            key={index}
            variant="outline"
            className="w-full justify-start h-auto p-4 hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${action.color}`}>
              <action.icon className="h-5 w-5 text-white" />
            </div>
            <div className="text-left">
              <p className="font-semibold">{action.title}</p>
              <p className="text-xs text-gray-500">{action.description}</p>
            </div>
          </Button>
        ))}

        <div className="pt-4 border-t">
          <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Eye className="h-4 w-4 text-emerald-600" />
              <span className="font-semibold text-emerald-800 dark:text-emerald-200">New Opportunity</span>
            </div>
            <p className="text-sm text-emerald-700 dark:text-emerald-300 mb-3">
              Islamic AI Healthcare startup seeking Series A funding
            </p>
            <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 w-full">
              View Details
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
