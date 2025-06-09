"use client"

import { motion } from "framer-motion"
import { Target, Mail, Share2, Globe, ThumbsUp, Users, Search, LineChart } from "lucide-react"

export default function UseCasesDropdown() {
  const useCases = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "PPC Ads",
      description: "Increase your RoAS and boost your conversions",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Marketing",
      description: "Grow your email list and promote special offers to your subscribers",
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Social Ads",
      description: "Get more leads and sales from your social campaigns",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Small Business Websites",
      description: "Establish your online presence without expensive developers",
    },
    {
      icon: <ThumbsUp className="w-6 h-6" />,
      title: "Social Media",
      description: "Turn followers into subscribers with engaging landing pages",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Lead Generation",
      description: "Get all the tools you need to find, nurture, and manage your leads",
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Search Engine Marketing",
      description: "Grow your organic traffic with optimized web pages",
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Demand Capture",
      description: "Fill your sales funnel with ideal prospects",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="absolute top-16 left-0 right-0 z-40 bg-[#121212] border-t border-gray-800 shadow-xl"
    >
      <div className="container mx-auto px-4 py-8">
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 font-medium mb-6 uppercase tracking-wider text-sm"
        >
          USE CASES
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
              className="flex items-start space-x-4 group cursor-pointer p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200"
            >
              <motion.div
                className="text-white group-hover:text-purple-400 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                {useCase.icon}
              </motion.div>
              <div>
                <h4 className="text-white font-medium mb-1 group-hover:text-purple-400 transition-colors">
                  {useCase.title}
                </h4>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                  {useCase.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
