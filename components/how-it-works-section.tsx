"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { FileText, MessageSquare, BarChart2, DollarSign, ArrowRight, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: FileText,
    title: "Submit Your Accounts",
    description:
      "Upload your outstanding invoices and debtor information through our secure portal. We'll analyze your portfolio and create a recovery strategy.",
    details: ["Secure data upload", "Portfolio analysis", "Recovery strategy development"],
  },
  {
    icon: MessageSquare,
    title: "Professional Communication",
    description: "Our team initiates contact with debtors using proven communication strategies that get results.",
    details: ["Multi-channel outreach", "Negotiation expertise", "Legal compliance"],
  },
  {
    icon: BarChart2,
    title: "Track Progress",
    description:
      "Monitor recovery progress in real-time through our client dashboard with detailed analytics and reporting.",
    details: ["Real-time updates", "Detailed reporting", "Performance analytics"],
  },
  {
    icon: DollarSign,
    title: "Receive Payment",
    description: "Funds are securely transferred to your account as they're collected, with transparent reporting.",
    details: ["Secure payment processing", "Regular disbursements", "Complete reconciliation"],
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-emerald-700 bg-emerald-100">
            How It Works
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Your Path to Improved Cash Flow</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined process makes it easy to start recovering your outstanding receivables
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="relative border-0 shadow-lg hover:shadow-xl transition-all duration-500 h-full group hover:-translate-y-2 hover:scale-[1.02]">
                  <CardContent className="p-8 text-center">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 transition-all duration-300 group-hover:scale-110">
                      <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm group-hover:bg-emerald-700 transition-colors duration-300">
                        {index + 1}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 mt-4 transition-all duration-300 group-hover:bg-emerald-200 group-hover:scale-110">
                      <step.icon className="h-8 w-8 text-emerald-600 transition-all duration-300 group-hover:scale-110" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold mb-4 text-gray-900 transition-colors duration-300 group-hover:text-emerald-700">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                      {step.description}
                    </p>

                    {/* Details */}
                    <ul className="space-y-2 text-left">
                      {step.details.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="flex items-center text-sm text-gray-600 transition-all duration-300 group-hover:text-gray-700 group-hover:translate-x-1"
                        >
                          <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0 transition-all duration-300 group-hover:text-emerald-700 group-hover:scale-110" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 px-8 py-3 text-lg font-semibold">
              Start Recovering Your Debts Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
