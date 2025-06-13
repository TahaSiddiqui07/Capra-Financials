"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Plus, Minus } from "lucide-react"

const transactions = [
  {
    type: "investment",
    title: "Islamic Fintech Solutions",
    description: "Series A Investment",
    amount: "$25,000",
    date: "2 hours ago",
    status: "completed",
    icon: Plus,
  },
  {
    type: "return",
    title: "Halal E-commerce Platform",
    description: "Quarterly Return",
    amount: "+$3,750",
    date: "1 day ago",
    status: "completed",
    icon: ArrowUpRight,
  },
  {
    type: "investment",
    title: "Green Energy Startup",
    description: "Series B Investment",
    amount: "$35,000",
    date: "3 days ago",
    status: "completed",
    icon: Plus,
  },
  {
    type: "withdrawal",
    title: "Portfolio Rebalancing",
    description: "Partial Withdrawal",
    amount: "-$10,000",
    date: "1 week ago",
    status: "completed",
    icon: Minus,
  },
  {
    type: "return",
    title: "Islamic Banking Tech",
    description: "Monthly Dividend",
    amount: "+$2,100",
    date: "2 weeks ago",
    status: "completed",
    icon: ArrowUpRight,
  },
]

export function RecentTransactions() {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-xl font-bold">Recent Transactions</CardTitle>
          <p className="text-sm text-gray-600 dark:text-gray-400">Your latest investment activity</p>
        </div>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {transactions.map((transaction, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                transaction.type === "investment"
                  ? "bg-blue-100"
                  : transaction.type === "return"
                    ? "bg-green-100"
                    : "bg-red-100"
              }`}
            >
              <transaction.icon
                className={`h-5 w-5 ${
                  transaction.type === "investment"
                    ? "text-blue-600"
                    : transaction.type === "return"
                      ? "text-green-600"
                      : "text-red-600"
                }`}
              />
            </div>

            <div className="flex-1 min-w-0">
              <p className="font-semibold text-gray-900 dark:text-white truncate">{transaction.title}</p>
              <p className="text-sm text-gray-500 truncate">{transaction.description}</p>
            </div>

            <div className="text-right">
              <p
                className={`font-semibold ${
                  transaction.amount.startsWith("+")
                    ? "text-green-600"
                    : transaction.amount.startsWith("-")
                      ? "text-red-600"
                      : "text-gray-900 dark:text-white"
                }`}
              >
                {transaction.amount}
              </p>
              <p className="text-xs text-gray-500">{transaction.date}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
