import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 text-emerald-700 bg-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-300"
          >
            Client Success Stories
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Proven Results</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            See what our clients are saying about our debt recovery services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="border-0 shadow-lg animated-card dark:bg-gray-800 dark:border-gray-700 group hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Quote className="h-8 w-8 text-emerald-600 dark:text-emerald-400 mb-4 transition-all duration-300 group-hover:scale-110 group-hover:text-emerald-700 dark:group-hover:text-emerald-300" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-emerald-700 dark:group-hover:text-emerald-400">
                Exceptional Recovery Rate
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-200">
                "We had written off nearly $120,000 in bad debt before partnering with Capra Financials. Within 60 days,
                they recovered 78% of our outstanding receivables."
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-emerald-700 dark:group-hover:text-emerald-400">
                    Michael Thompson
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Finance Director</p>
                </div>
                <div className="flex transition-all duration-300 group-hover:scale-110">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg animated-card dark:bg-gray-800 dark:border-gray-700 group hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Quote className="h-8 w-8 text-emerald-600 dark:text-emerald-400 mb-4 transition-all duration-300 group-hover:scale-110 group-hover:text-emerald-700 dark:group-hover:text-emerald-300" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-emerald-700 dark:group-hover:text-emerald-400">
                Professional Approach
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-200">
                "What impressed me most was how they maintained our business relationships while firmly pursuing
                payment. Their professional approach actually strengthened some client relationships."
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-emerald-700 dark:group-hover:text-emerald-400">
                    Sarah Williams
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Operations Manager</p>
                </div>
                <div className="flex transition-all duration-300 group-hover:scale-110">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg animated-card dark:bg-gray-800 dark:border-gray-700 group hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Quote className="h-8 w-8 text-emerald-600 dark:text-emerald-400 mb-4 transition-all duration-300 group-hover:scale-110 group-hover:text-emerald-700 dark:group-hover:text-emerald-300" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-emerald-700 dark:group-hover:text-emerald-400">
                Game Changing Results
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-200">
                "Capra Financials has revolutionized our accounts receivable process. Their transparent reporting and
                consistent results have dramatically improved our cash flow."
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-emerald-700 dark:group-hover:text-emerald-400">
                    David Chen
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Small Business Owner</p>
                </div>
                <div className="flex transition-all duration-300 group-hover:scale-110">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
