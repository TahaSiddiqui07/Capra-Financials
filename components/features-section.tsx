import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Building2, Zap } from "lucide-react"

export function FeaturesSection() {
  return (
    <section id="why" className="py-24 bg-gradient-to-b from-emerald-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 text-emerald-700 bg-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-300"
          >
            Why Capra Financials?
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Recovery Excellence</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our recovery rates exceed industry standards by 35%
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="border-0 shadow-lg animated-card fade-in-up dark:bg-gray-800 dark:border-gray-700 group hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800/50 group-hover:scale-110">
                <Building2 className="h-8 w-8 text-emerald-600 dark:text-emerald-400 transition-all duration-300 group-hover:scale-110" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-emerald-700 dark:group-hover:text-emerald-400">
                Comprehensive Recovery Solutions
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-200">
                Tailored debt recovery strategies for businesses of all sizes, from early-stage collections to complex
                legal recovery processes.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg animated-card fade-in-up delay-100 dark:bg-gray-800 dark:border-gray-700 group hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800/50 group-hover:scale-110">
                <TrendingUp className="h-8 w-8 text-emerald-600 dark:text-emerald-400 transition-all duration-300 group-hover:scale-110" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-emerald-700 dark:group-hover:text-emerald-400">
                Advanced Recovery Platform
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-200">
                AI-powered analytics and debtor assessment tools to help you track recovery progress and maximize
                collection rates with confidence.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg animated-card fade-in-up delay-200 dark:bg-gray-800 dark:border-gray-700 group hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800/50 group-hover:scale-110">
                <Zap className="h-8 w-8 text-emerald-600 dark:text-emerald-400 transition-all duration-300 group-hover:scale-110" />
              </div>
              <CardTitle className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-emerald-700 dark:group-hover:text-emerald-400">
                Rapid Results
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-200">
                Our streamlined recovery process delivers faster results than traditional collection agencies, with most
                clients seeing recoveries within the first 30 days.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
