"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function TrustedLogos() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const logos = [
    { name: "Vimeo", width: "w-24" },
    { name: "Zapier", width: "w-24" },
    { name: "Shopify", width: "w-24" },
    { name: "Mailchimp", width: "w-24" },
    { name: "HubSpot", width: "w-24" },
  ]

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

  const logoVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 0.6,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <section ref={ref} className="py-16 bg-white relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-gray-600 text-lg">Trusted by over 40,000+ businesses worldwide</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              variants={logoVariants}
              whileHover={{
                opacity: 1,
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
              className={`${logo.width} h-8 bg-gray-300 rounded cursor-pointer flex items-center justify-center`}
            >
              <span className="text-gray-600 font-semibold text-sm">{logo.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
