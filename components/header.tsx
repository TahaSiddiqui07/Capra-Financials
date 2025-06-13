"use client"

import Link from "next/link"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-emerald-600 dark:bg-emerald-800 text-white backdrop-blur supports-[backdrop-filter]:bg-emerald-600/95 dark:supports-[backdrop-filter]:bg-emerald-800/95">
      <div className="w-full px-4 sm:px-6 lg:container lg:mx-auto flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold">Capra Financials</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
          <Link href="#why" className="text-sm font-medium hover:text-emerald-200 transition-colors">
            Why Capra Financials
          </Link>
          <Link href="#testimonials" className="text-sm font-medium hover:text-emerald-200 transition-colors">
            Testimonials
          </Link>
          <Link href="#faq" className="text-sm font-medium hover:text-emerald-200 transition-colors">
            FAQ
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-emerald-200 transition-colors">
            Contact Us
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-white hover:bg-emerald-700 dark:hover:bg-emerald-700"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          )}
          <Link href="/claim">
            <Button
              variant="secondary"
              className="bg-white text-emerald-600 hover:bg-gray-100 dark:bg-gray-100 dark:text-emerald-700 dark:hover:bg-gray-200"
            >
              Submit Claim
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
