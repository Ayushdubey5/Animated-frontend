"use client"

import { motion } from "framer-motion"

export default function AnimatedBrands() {
  const brands = [
    "Shopify",
    "HubSpot",
    "Mailchimp",
    "Salesforce",
    "Zapier",
    "ConvertKit",
    "ActiveCampaign",
    "Drip",
    "GetResponse",
    "AWeber",
    "Constant Contact",
    "Campaign Monitor",
  ]

  // Duplicate brands for seamless loop
  const duplicatedBrands = [...brands, ...brands]

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-gray-600 text-lg">Trusted by over 40,000+ businesses worldwide</p>
        </motion.div>

        {/* Animated Brand Logos */}
        <div className="relative">
          <motion.div
            className="flex space-x-16 items-center"
            animate={{
              x: [0, -50 * brands.length],
            }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {duplicatedBrands.map((brand, index) => (
              <motion.div
                key={`${brand}-${index}`}
                className="flex-shrink-0 w-32 h-12 bg-gray-200 rounded-lg flex items-center justify-center cursor-pointer"
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#f3f4f6",
                  transition: { duration: 0.2 },
                }}
              >
                <span className="text-gray-600 font-semibold text-sm whitespace-nowrap">{brand}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  )
}
