"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"

export default function FintaTechPoster() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      className="relative py-20 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, 
          #7209b7 0%, 
          #533483 25%, 
          #0f3460 50%, 
          #16213e 75%, 
          #1a1a2e 100%
        )`,
      }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-white rounded-3xl overflow-hidden shadow-2xl max-w-7xl mx-auto"
        >
          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
            {/* Left Content */}
            <div className="p-12 lg:p-16 flex flex-col justify-center">
              {/* FINTATECH Brand */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center space-x-2 mb-8"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-green-500 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
                <span className="text-2xl font-bold">
                  <span className="text-gray-800">FINTA</span>
                  <span className="text-purple-600">TECH</span>
                </span>
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-6"
              >
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Spend Freely.
                  <br />
                  Save Boldly.
                </h2>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-gray-600 text-lg leading-relaxed mb-8 max-w-md"
              >
                Turn your spare change into serious savings with Fintatech — the financial tech app that's about to
                become your new money-saving BFF.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Button className="bg-[#9ACD32] hover:bg-[#8BC34A] text-black font-bold px-8 py-3 rounded-lg text-lg">
                  SIGN UP FREE
                </Button>
              </motion.div>
            </div>

            {/* Right Content - Image */}
            <div className="relative overflow-hidden">
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="absolute inset-0"
              >
                <img
                  src="/fintatech-poster.png"
                  alt="Fintatech App Interface"
                  className="w-full h-full object-cover object-left"
                  loading="lazy"
                />
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute top-20 right-20 bg-white rounded-2xl p-4 shadow-lg"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">A/B TEST</div>
                  <div className="text-3xl font-bold text-green-500">+45%</div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="bg-gray-900 text-white text-center py-8"
          >
            <h3 className="text-2xl lg:text-3xl font-bold">Not Just Another</h3>
            <p className="text-gray-400 mt-2">Budgeting App</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
