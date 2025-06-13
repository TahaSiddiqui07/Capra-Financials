import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { PortfolioOverview } from "@/components/dashboard/portfolio-overview"
import { InvestmentChart } from "@/components/dashboard/investment-chart"
import { RecentTransactions } from "@/components/dashboard/recent-transactions"
import { ActiveInvestments } from "@/components/dashboard/active-investments"
import { MarketInsights } from "@/components/dashboard/market-insights"
import { QuickActions } from "@/components/dashboard/quick-actions"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <DashboardHeader />
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8">
          {/* Portfolio Overview */}
          <PortfolioOverview />

          {/* Charts and Quick Actions */}
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <InvestmentChart />
            </div>
            <div>
              <QuickActions />
            </div>
          </div>

          {/* Investments and Transactions */}
          <div className="grid lg:grid-cols-2 gap-8">
            <ActiveInvestments />
            <RecentTransactions />
          </div>

          {/* Market Insights */}
          <MarketInsights />
        </div>
      </main>
    </div>
  )
}
