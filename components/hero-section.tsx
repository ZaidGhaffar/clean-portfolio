"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { NavBarDemo } from "@/components/navbar-demo"
import TechIcons from "@/components/tech-icons"
import SiteHeader from "@/components/site-header"

export default function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative bg-black pb-32 min-h-screen">
      {/* Tech icons */}
      <TechIcons />

      {/* Radial gradient background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[70%] z-0"
        style={{
          background: "radial-gradient(circle, #0055FF 0%, #001133 50%, rgba(0,0,0,0) 80%)",
          filter: "blur(50px)",
          opacity: 0.8,
        }}
      ></div>

      {/* Header */}
      <SiteHeader />

      {/* Main content */}
      <main className="relative z-10 flex flex-col items-center justify-center px-6 pt-24 pb-32 text-center">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white max-w-5xl mx-auto leading-tight tracking-tight"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 0.8,
          }}
        >
          Building Intelligent Solutions for a Smarter World - I teach machines to decide
        </motion.h1>

        <motion.p
          className="mt-8 text-xl text-white/90 max-w-2xl mx-auto font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Technology That Moves You Forward, Building Software Building Success
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Button
            onClick={scrollToContact}
            className="mt-16 px-8 py-6 text-base font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-md"
          >
            Get in touch
          </Button>
        </motion.div>
      </main>

      {/* Navbar */}
      <NavBarDemo />
    </div>
  )
}
