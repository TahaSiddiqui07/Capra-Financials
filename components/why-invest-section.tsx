"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { TrendingUp, Shield, Users, Award, Globe, Zap, BarChart3, Heart, ArrowRight, Star } from "lucide-react"

const benefits = [
  {
    icon: TrendingUp,
    title: "High Recovery Rates",
    description: "Average 85% recovery success",
    detail:
      "Our proven methodology consistently outperforms industry standards with carefully tailored recovery strategies for each case.",
  },
  {
    icon: Shield,
    title: "Ethical Practices",
    description: "100% compliant approach",
    detail:
      "All recovery efforts adhere to strict legal and ethical guidelines, ensuring fair treatment while maximizing recovery outcomes.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "15+ years combined experience",
    detail:
      "Our team of recovery specialists and legal experts guide every case with proven expertise and professionalism.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "5,000+ successful recoveries",
    detail:
      "We've helped hundreds of businesses recover outstanding debts and improve their cash flow through strategic recovery methods.",
  },
]

const stats = [
  { number: "$50M+", label: "Debt Recovered", icon: BarChart3 },
  { number: "1,200+", label: "Satisfied Clients", icon: Users },
  { number: "85%", label: "Average Recovery Rate", icon: TrendingUp },
  { number: "98%", label: "Client Retention", icon: Award },
]

const trustFactors = [
  {
    icon: Globe,
    title: "Nationwide Coverage",
    description:
      "Access to comprehensive debt recovery services across all regions with local expertise and global resources.",
  },
  {
    icon: Zap,
    title: "AI-Powered Analysis",
    description:
      "Advanced algorithms analyze debtor patterns and identify the most effective recovery strategies for each case.",
  },
  {
    icon: Heart,
    title: "Client-Focused Approach",
    description:
      "Your business reputation matters to us - we maintain professional relationships while maximizing recovery.",
  },
]

export function WhyInvestSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-emerald-50 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 text-emerald-700 bg-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-300"
          >
            Why Choose Capra Financials
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            The Smart Choice for Debt Recovery
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join thousands of businesses who trust Capra Financials for ethical, effective, and professional debt
            recovery services
          </p>
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg animated-card h-full group hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl dark:bg-gray-800 dark:border-gray-700">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800/50 transition-all duration-300 group-hover:scale-110">
                    <benefit.icon className="h-8 w-8 text-emerald-600 dark:text-emerald-400 transition-all duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-emerald-700 dark:group-hover:text-emerald-400">
                    {benefit.title}
                  </h3>
                  <p className="text-emerald-600 dark:text-emerald-400 font-semibold mb-4 transition-all duration-300 group-hover:scale-105">
                    {benefit.description}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed transition-colors duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-200">
                    {benefit.detail}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Statistics */}
        <motion.div
          className="bg-emerald-600 dark:bg-emerald-800 rounded-2xl p-12 mb-20 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Impact in Numbers</h3>
            <p className="text-emerald-100 text-lg">Real results from real clients who chose Capra Financials</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <stat.icon className="h-8 w-8 mx-auto mb-4 text-emerald-200" />
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-emerald-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Factors */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {trustFactors.map((factor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg animated-card h-full group hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl dark:bg-gray-800 dark:border-gray-700">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800/50 group-hover:scale-110">
                    <factor.icon className="h-8 w-8 text-emerald-600 dark:text-emerald-400 transition-all duration-300 group-hover:scale-110" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-emerald-700 dark:group-hover:text-emerald-400">
                    {factor.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-200">
                    {factor.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Social Proof */}
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-2xl p-12 shadow-lg border dark:border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Trusted by Businesses Nationwide</h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
              "Capra Financials has transformed our accounts receivable process. Their approach is professional, the
              recovery rates are exceptional, and I feel confident knowing our business reputation is protected
              throughout the process."
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">JD</span>
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900 dark:text-white">James Davidson</p>
                <p className="text-gray-500 dark:text-gray-400">CFO, Davidson Enterprises</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-800 px-8 py-3 text-lg font-semibold"
            >
              Start Recovering Your Debts Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
