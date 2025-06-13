"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, TrendingDown, MoreHorizontal, Eye } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const investments = [
  {
    name: "Islamic Fintech Solutions",
    type: "Series A",
    amount: "$25,000",
    currentValue: "$31,250",
    return: "+25.0%",
    returnType: "positive",
    progress: 75,
    status: "Active",
    duration: "18 months",
  },
  {
    name: "Halal E-commerce Platform",
    type: "Seed",
    amount: "$15,000",
    currentValue: "$18,750",
    return: "+25.0%",
    returnType: "positive",
    progress: 60,
    status: "Active",
    duration: "12 months",
  },
  {
    name: "Green Energy Startup",
    type: "Series B",
    amount: "$35,000",
    currentValue: "$42,000",
    return: "+20.0%",
    returnType: "positive",
    progress: 90,
    status: "Active",
    duration: "24 months",
  },
  {
    name: "Islamic Banking Tech",
    type: "Pre-IPO",
    amount: "$50,000",
    currentValue: "$47,500",
    return: "-5.0%",
    returnType: "negative",
    progress: 45,
    status: "Under Review",
    duration: "6 months",
  },
]

export function ActiveInvestments() {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-xl font-bold">Active Investments</CardTitle>
          <p className="text-sm text-gray-600 dark:text-gray-400">Your current investment portfolio</p>
        </div>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {investments.map((investment, index) => (
          <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-emerald-600 font-semibold text-sm">
                    {investment.name
                      .split(" ")
                      .map((word) => word[0])
                      .join("")
                      .slice(0, 2)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{investment.name}</h4>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className="text-xs">
                      {investment.type}
                    </Badge>
                    <span className="text-xs text-gray-500">{investment.duration}</span>
                  </div>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Eye className="mr-2 h-4 w-4" />
                    View Details
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-3">
              <div>
                <p className="text-xs text-gray-500">Invested</p>
                <p className="font-semibold">{investment.amount}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Current Value</p>
                <div className="flex items-center space-x-2">
                  <p className="font-semibold">{investment.currentValue}</p>
                  <div
                    className={`flex items-center space-x-1 text-xs ${
                      investment.returnType === "positive" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {investment.returnType === "positive" ? (
                      <TrendingUp className="h-3 w-3" />
                    ) : (
                      <TrendingDown className="h-3 w-3" />
                    )}
                    <span>{investment.return}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Progress</span>
                <span className="text-gray-500">{investment.progress}%</span>
              </div>
              <Progress value={investment.progress} className="h-2" />
            </div>

            <div className="flex justify-between items-center mt-3">
              <Badge
                variant={investment.status === "Active" ? "default" : "secondary"}
                className={investment.status === "Active" ? "bg-emerald-100 text-emerald-800" : ""}
              >
                {investment.status}
              </Badge>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
