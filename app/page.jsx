"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import FintaTechPoster from "@/components/fintatech-poster"
import AnimatedBrands from "@/components/animated-brands"
import { useSiteContext } from "@/context/site-context"

export default function HomePage() {
  const [showDropdown, setShowDropdown] = useState(null)
  const { isMobileMenuOpen } = useSiteContext()

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      const target = e.target
      if (!target.closest("nav") && !target.closest("[data-mega-menu]")) {
        setShowDropdown(null)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar showDropdown={showDropdown} setShowDropdown={setShowDropdown} />
      <main className={isMobileMenuOpen ? "hidden md:block" : ""}>
        <HeroSection />
        <FintaTechPoster />
        <AnimatedBrands />
      </main>
    </div>
  )
}
