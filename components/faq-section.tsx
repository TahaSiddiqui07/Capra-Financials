import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "What is Capra Financials and how does it work?",
    answer:
      "Capra Financials is a professional debt recovery service that helps businesses recover outstanding payments. We use a strategic combination of communication techniques, legal expertise, and advanced analytics to maximize recovery rates while maintaining professional relationships with your customers.",
  },
  {
    question: "What types of debt can you recover?",
    answer:
      "We handle a wide range of commercial debts including B2B invoices, service fees, contract payments, and more. Our expertise spans across industries including manufacturing, professional services, healthcare, construction, and retail sectors.",
  },
  {
    question: "What are your fees and how are they structured?",
    answer:
      "We offer flexible fee structures including contingency-based fees (where we only get paid when you get paid), flat fees for certain services, and custom arrangements for large portfolios. Our standard contingency fees typically range from 15-35% depending on the age, size, and complexity of the debt.",
  },
  {
    question: "How long does the debt recovery process take?",
    answer:
      "While each case is unique, our initial demand phase typically yields results within 30 days. More complex cases requiring legal action may take 60-90 days. We provide transparent timelines and regular updates throughout the process so you always know where your accounts stand.",
  },
  {
    question: "What recovery rates can I expect?",
    answer:
      "Our average recovery rate across all accounts is 85%, significantly higher than the industry average. Recovery rates vary based on the age of the debt, documentation quality, and debtor circumstances. We provide a free assessment of your specific accounts to give you realistic expectations.",
  },
  {
    question: "How do you maintain professional relationships with my customers?",
    answer:
      "We understand that many debtors are also your customers. Our approach emphasizes professionalism, respect, and compliance with all regulations. We focus on finding mutually beneficial solutions that preserve relationships while still ensuring you get paid for your products or services.",
  },
  {
    question: "Is my business information kept confidential?",
    answer:
      "Absolutely. We maintain strict confidentiality protocols for all client information. Our systems feature enterprise-grade security, and all staff members sign comprehensive confidentiality agreements. Your business data and customer information are protected at all times.",
  },
  {
    question: "How can I track the progress of my accounts?",
    answer:
      "Our client portal provides real-time updates on all your accounts, including collection activity, payment status, and recovery rates. You'll also receive regular reports and have a dedicated account manager who provides personalized updates on your portfolio.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 text-emerald-700 bg-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-300"
          >
            <HelpCircle className="w-4 h-4 mr-2" />
            FAQ
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get answers to common questions about our debt recovery services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-lg animated-card dark:bg-gray-800 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-8">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-b border-gray-200 dark:border-gray-700 last:border-b-0"
                  >
                    <AccordionTrigger className="text-left hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors py-6">
                      <span className="font-semibold text-gray-900 dark:text-white">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 dark:text-gray-300 leading-relaxed pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          
        </div>
      </div>
    </section>
  )
}
