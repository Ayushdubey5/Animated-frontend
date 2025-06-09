"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useSiteContext } from "@/context/site-context"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  const { mousePosition, setMousePosition } = useSiteContext()
  const [isHovered, setIsHovered] = useState(false)
  const emailInputRef = useRef(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (window.innerWidth > 768) {
        setMousePosition({
          x: (e.clientX - window.innerWidth / 2) / 50,
          y: (e.clientY - window.innerHeight / 2) / 50,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [setMousePosition])

  // Staggered text animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const buttonVariants = {
    initial: { scale: 1, boxShadow: "0 0 0 rgba(154, 205, 50, 0)" },
    hover: {
      scale: 1.05,
      boxShadow: "0 0 20px rgba(154, 205, 50, 0.4)",
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.98 },
  }

  return (
    <section
      ref={sectionRef}
      className="relative pt-20 pb-20 overflow-hidden min-h-screen flex flex-col"
      style={{
        backgroundColor: '#010101',
  backgroundImage: `
    radial-gradient(circle at center bottom, rgba(255, 255, 255, 0.95) 0%, rgba(240, 240, 255, 0.5) 25%, transparent 55%),
    radial-gradient(circle at 20% 85%, rgba(112, 48, 160, 0.35), transparent 70%),
    radial-gradient(circle at 80% 85%, rgba(80, 70, 200, 0.3), transparent 70%),
    linear-gradient(to bottom, #000000 0%, #050509 25%, #0b0c13 100%)
  `,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
      }}
    >
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-purple-900/20" />

      <div className="container mx-auto px-4 pt-16 relative z-10 flex-1 flex flex-col justify-center">
        {/* Hero Content */}
        <div className="text-center max-w-6xl mx-auto">
          {/* Animated Headline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mb-6"
          >
            <h1 className="text-6xl md:text-8xl lg:text-7xl font-extrabold text-white leading-tight">
              {["Powerful", "Landing", "Pages"].map((word, index) => (
                <motion.span key={index} variants={wordVariants} className="inline-block mr-4">
                  {word}
                </motion.span>
              ))}
              <br />
              {["That", "Convert"].map((word, index) => (
                <motion.span key={index + 3} variants={wordVariants} className="inline-block mr-4">
                  {word}
                </motion.span>
              ))}
            </h1>
          </motion.div>

          {/* Animated Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-lg md:text-xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed px-4"
          >
            Launch high-converting landing pages faster, generate qualified leads, and
            <br />
            optimize your marketing efforts—all with one simple solution.
          </motion.p>

          {/* Email Input and CTA Button - Desktop Layout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-row items-center justify-center gap-1 mb-16 max-w-sm mx-auto"
          >
            <motion.input
              ref={emailInputRef}
              type="email"
              placeholder="Work email"
              whileFocus={{ scale: 1.02, boxShadow: "0 0 0 3px rgba(147, 51, 234, 0.1)" }}
              className="flex-1 px-3 py-3 rounded-lg bg-white/95 backdrop-blur-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 text-sm border-0"
            />
            <motion.div
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <Button
                onClick={() => emailInputRef.current?.focus()}
                className="bg-[#9ACD32] hover:bg-[#8BC34A] text-black px-5 py-5 rounded-lg transition-all duration-200 relative overflow-hidden text-lg whitespace-nowrap border-0"
              >
                <motion.span animate={isHovered ? { x: -5 } : { x: 0 }} transition={{ duration: 0.2 }}>
                  Start my trial
                </motion.span>
                <motion.div
                  animate={isHovered ? { x: 0 } : { x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="inline-block ml-2"
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
