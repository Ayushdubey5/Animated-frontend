"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useSiteContext } from "@/context/site-context"
import MegaMenuDropdown from "./mega-menu-dropdown"

export default function Navbar({ showDropdown, setShowDropdown }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [hoveredItem, setHoveredItem] = useState(null)
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useSiteContext()
  const navRef = useRef(null)
  const hoverTimeoutRef = useRef(null)

  // Track scroll position for navbar background change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 5)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Platform", href: "#", hasDropdown: true },
    { name: "Solutions", href: "#", hasDropdown: true },
    { name: "Templates", href: "#", hasDropdown: true },
    { name: "Resources", href: "#", hasDropdown: true },
    { name: "Pricing", href: "#pricing", hasDropdown: false },
  ]

  const handleMouseEnter = (itemName) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
    setHoveredItem(itemName)
    setShowDropdown(itemName)
  }

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredItem(null)
      setShowDropdown(null)
    }, 150) // Small delay to prevent flickering
  }

  const handleNavItemClick = (e, item) => {
    e.stopPropagation()
    if (item === "Pricing") {
      setShowDropdown(null)
      setHoveredItem(null)
    }
  }

  return (
    <>
      <motion.nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#1a1a2e]/80 backdrop-blur-md shadow-lg" : "bg-[#1a1a2e]/90"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        onMouseLeave={handleMouseLeave}
      >
        <div className="container mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
          {/* Logo - Exact Leadpages Style */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="flex items-center space-x-3"
          >
            <Link href="/" className="flex items-center space-x-3">
              {/* Leadpages Logo - Purple Diamond */}
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-700 transform rotate-45 rounded-sm"></div>
                <div className="absolute inset-0 w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 transform rotate-45 rounded-sm opacity-80"></div>
              </div>
              <span className="text-white font-bold text-xl tracking-tight">Leadpages</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation - Left aligned after logo */}
          <div className="hidden lg:flex items-center space-x-8 flex-1 ml-12">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.name)}
              >
                <motion.button
                  onClick={(e) => handleNavItemClick(e, item.name)}
                  className={`flex items-center space-x-1 cursor-pointer transition-colors duration-300 py-2 relative ${
                    hoveredItem === item.name ? "text-purple-400" : "text-white hover:text-purple-400"
                  }`}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="font-medium">{item.name}</span>
                  {item.hasDropdown && (
                    <motion.div
                      animate={{
                        rotate: hoveredItem === item.name ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  )}

                  {/* Animated underline */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-400"
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{
                      scaleX: hoveredItem === item.name ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </div>
            ))}
          </div>

          {/* Auth Buttons - Stay at far right */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.button
              className="text-white hover:text-purple-400 font-medium transition-colors duration-300"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              Log in
            </motion.button>
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
              <Link
                href="#"
                className="inline-flex items-center opacity-40 border-green-400 text-white bg-[#9ACD32] hover:bg-[#8BC34A] hover:opacity-100  font-semibold px-6 py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span>Sign Up Free</span>
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                  className="ml-1"
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button - Aligned to right */}
          <motion.button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden bg-[#1a1a2e]/90 border-t border-gray-800 overflow-hidden"
            >
              <div className="container mx-auto px-6 py-6 space-y-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    className="py-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <button
                      onClick={(e) => handleNavItemClick(e, item.name)}
                      className="flex items-center justify-between w-full text-white hover:text-purple-400 text-lg font-medium transition-colors duration-300"
                    >
                      <span>{item.name}</span>
                      {item.hasDropdown && (
                        <motion.div
                          animate={{ rotate: showDropdown === item.name ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.div>
                      )}
                    </button>
                  </motion.div>
                ))}

                <motion.div
                  className="pt-4 border-t border-gray-800 flex flex-col space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                >
                  <button className="text-white hover:text-purple-400 text-lg font-medium transition-colors duration-300">
                    Log in
                  </button>
                  <Link
                    href="#"
                    className="flex items-center justify-center border-spacing-3  border-white bg-[#9ACD32] hover:bg-[#8BC34A] hover:text-black  font-semibold py-3 px-6 rounded-full transition-all duration-300"
                  >
                    <span>Sign Up Free</span>
                    <span className="ml-1">→</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mega Menu Dropdown */}
      <div
        className="relative"
        onMouseEnter={() => {
          if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current)
          }
        }}
        onMouseLeave={handleMouseLeave}
      >
        <MegaMenuDropdown isVisible={!!showDropdown && showDropdown !== "Pricing"} menuType={showDropdown || ""} />
      </div>
    </>
  )
}
