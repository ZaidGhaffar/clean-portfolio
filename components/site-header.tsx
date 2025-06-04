"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="relative z-20 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-white">WintaX</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection("home")} className="text-white hover:text-blue-300 transition-colors">
            Home
          </button>
          <button onClick={() => scrollToSection("about")} className="text-white hover:text-blue-300 transition-colors">
            About
          </button>
          <button
            onClick={() => scrollToSection("products")}
            className="text-white hover:text-blue-300 transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-white hover:text-blue-300 transition-colors"
          >
            Contact
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white hover:text-blue-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-white/20 md:hidden">
            <nav className="flex flex-col space-y-4 p-6">
              <button
                onClick={() => scrollToSection("home")}
                className="text-white hover:text-blue-300 transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-white hover:text-blue-300 transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="text-white hover:text-blue-300 transition-colors text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white hover:text-blue-300 transition-colors text-left"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
