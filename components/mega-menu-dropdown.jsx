"use client"

import { motion, AnimatePresence } from "framer-motion"
import {
  Globe,
  Zap,
  CreditCard,
  Users,
  BarChart3,
  Grid3X3,
  Target,
  Mail,
  Share2,
  Search,
  Star,
  UserPlus,
  ArrowRight,
} from "lucide-react"

export default function MegaMenuDropdown({ isVisible, menuType }) {
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  }

  const platformContent = {
    features: [
      {
        icon: <Globe className="w-6 h-6" />,
        title: "Landing Pages",
        description: "Easily build beautiful landing pages that convert",
      },
      {
        icon: <Zap className="w-6 h-6" />,
        title: "Conversion Tools",
        description: "Boost conversions with pop-ups, alert bars, and the Lead Meter",
      },
      {
        icon: <CreditCard className="w-6 h-6" />,
        title: "Payments",
        description: "Add online checkouts to your pages for seamless transactions",
      },
    ],
    platformOverview: [
      {
        icon: <Globe className="w-6 h-6" />,
        title: "Websites",
        description: "Create a code-free site for your business, products, or events",
      },
      {
        icon: <Users className="w-6 h-6" />,
        title: "Lead Management",
        description: "Sort, edit, and manage your leads all in one place",
      },
      {
        icon: <Grid3X3 className="w-6 h-6" />,
        title: "All features",
        description: "See all our product offerings in one place",
      },
    ],
    whatsNew: [
      {
        icon: <Star className="w-6 h-6" />,
        title: "Lead Enrichment",
        description: "Enrich your leads with powerful data to tailor your campaigns",
        featured: true,
      },
      {
        icon: <UserPlus className="w-6 h-6" />,
        title: "Invite your Team",
        description: "Get your whole team on the same page",
      },
    ],
    integrations: [
      { name: "Mailchimp", logo: "🐵" },
      { name: "HubSpot", logo: "🟠" },
      { name: "Salesforce", logo: "☁️" },
      { name: "Zapier", logo: "⚡" },
      { name: "Google", logo: "🔍" },
    ],
  }

  const solutionsContent = {
    useCases: [
      {
        icon: <Target className="w-6 h-6" />,
        title: "PPC Ads",
        description: "Increase your RoAS and boost your conversions",
      },
      {
        icon: <Mail className="w-6 h-6" />,
        title: "Email Marketing",
        description: "Grow your email list and promote special offers",
      },
      {
        icon: <Share2 className="w-6 h-6" />,
        title: "Social Ads",
        description: "Get more leads and sales from your social campaigns",
      },
      {
        icon: <Search className="w-6 h-6" />,
        title: "Search Engine Marketing",
        description: "Grow your organic traffic with optimized web pages",
      },
    ],
    industries: [
      { title: "E-commerce", description: "Boost online sales and conversions" },
      { title: "SaaS", description: "Generate qualified leads for your software" },
      { title: "Agencies", description: "Scale your client campaigns efficiently" },
      { title: "Coaches", description: "Build your personal brand and audience" },
    ],
  }

  const templatesContent = {
    categories: [
      { title: "Lead Generation", count: "150+ templates" },
      { title: "Sales Pages", count: "80+ templates" },
      { title: "Webinar Registration", count: "45+ templates" },
      { title: "Thank You Pages", count: "30+ templates" },
    ],
    featured: [
      { title: "High-Converting Templates", description: "Our top-performing designs" },
      { title: "Mobile-Optimized", description: "Perfect on any device" },
      { title: "Industry-Specific", description: "Templates for your niche" },
    ],
  }

  const resourcesContent = {
    learn: [
      { title: "Blog", description: "Marketing tips and strategies" },
      { title: "Guides", description: "In-depth marketing resources" },
      { title: "Webinars", description: "Live and on-demand training" },
      { title: "Case Studies", description: "Real customer success stories" },
    ],
    support: [
      { title: "Help Center", description: "Find answers to common questions" },
      { title: "Community", description: "Connect with other marketers" },
      { title: "Contact Support", description: "Get help from our team" },
    ],
  }

  const renderPlatformMenu = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="absolute top-full left-0 right-0 bg-[#1a1a1a]/85 backdrop-blur-md border-t border-gray-800 shadow-2xl z-40"
    >
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Features Section */}
          <div className="col-span-3">
            <motion.h3
              variants={itemVariants}
              className="text-gray-400 font-semibold text-sm uppercase tracking-wider mb-6"
            >
              FEATURES
            </motion.h3>
            <div className="space-y-6">
              {platformContent.features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  className="flex items-start space-x-3 cursor-pointer group"
                >
                  <div className="text-purple-400 group-hover:text-purple-300 transition-colors">{feature.icon}</div>
                  <div>
                    <h4 className="text-white font-medium mb-1 group-hover:text-purple-300 transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Platform Overview */}
          <div className="col-span-3">
            <motion.div variants={itemVariants} className="mb-6">
              <h3 className="text-white font-medium text-lg mb-2">Platform Overview</h3>
            </motion.div>
            <div className="space-y-6">
              {platformContent.platformOverview.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  className="flex items-start space-x-3 cursor-pointer group"
                >
                  <div className="text-purple-400 group-hover:text-purple-300 transition-colors">{item.icon}</div>
                  <div>
                    <h4 className="text-white font-medium mb-1 group-hover:text-purple-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* What's New */}
          <div className="col-span-3">
            <motion.h3
              variants={itemVariants}
              className="text-gray-400 font-semibold text-sm uppercase tracking-wider mb-6"
            >
              WHAT'S NEW
            </motion.h3>
            <div className="space-y-6">
              {platformContent.whatsNew.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  className="flex items-start space-x-3 cursor-pointer group"
                >
                  <div className="text-purple-400 group-hover:text-purple-300 transition-colors">{item.icon}</div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="text-white font-medium group-hover:text-purple-300 transition-colors">
                        {item.title}
                      </h4>
                      {item.featured && (
                        <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                          FEATURED
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* See Leadpages in Action */}
          <div className="col-span-3">
            <motion.h3
              variants={itemVariants}
              className="text-gray-400 font-semibold text-sm uppercase tracking-wider mb-6"
            >
              SEE LEADPAGES IN ACTION
            </motion.h3>
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-lg p-4 cursor-pointer border border-purple-500/30"
            >
              <div className="w-full h-32 bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-gray-500">
                  <BarChart3 className="w-8 h-8" />
                </div>
              </div>
              <h4 className="text-white font-medium mb-2">Interactive Demo</h4>
              <p className="text-gray-400 text-sm">See how easy it is to build high-converting pages</p>
            </motion.div>
          </div>
        </div>

        {/* Integrations Section */}
        <motion.div variants={itemVariants} className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-gray-400 font-semibold text-sm uppercase tracking-wider">INTEGRATIONS</h3>
            <motion.button
              whileHover={{ x: 5 }}
              className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center space-x-1"
            >
              <span>See 90+ Integrations</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
          <div className="flex items-center space-x-8">
            {platformContent.integrations.map((integration, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -2 }}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <span className="text-2xl">{integration.logo}</span>
                <span className="text-gray-400 text-sm">{integration.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )

  const renderSolutionsMenu = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="absolute top-full left-0 right-0 bg-[#1a1a1a]/85 backdrop-blur-md border-t border-gray-800 shadow-2xl z-40"
    >
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-2 gap-12">
          <div>
            <motion.h3
              variants={itemVariants}
              className="text-gray-400 font-semibold text-sm uppercase tracking-wider mb-6"
            >
              USE CASES
            </motion.h3>
            <div className="grid grid-cols-2 gap-6">
              {solutionsContent.useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="cursor-pointer group"
                >
                  <div className="text-purple-400 group-hover:text-purple-300 transition-colors mb-3">
                    {useCase.icon}
                  </div>
                  <h4 className="text-white font-medium mb-2 group-hover:text-purple-300 transition-colors">
                    {useCase.title}
                  </h4>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    {useCase.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <motion.h3
              variants={itemVariants}
              className="text-gray-400 font-semibold text-sm uppercase tracking-wider mb-6"
            >
              INDUSTRIES
            </motion.h3>
            <div className="space-y-4">
              {solutionsContent.industries.map((industry, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  className="cursor-pointer group"
                >
                  <h4 className="text-white font-medium mb-1 group-hover:text-purple-300 transition-colors">
                    {industry.title}
                  </h4>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    {industry.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )

  const renderTemplatesMenu = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="absolute top-full left-0 right-0 bg-[#1a1a1a]/85 backdrop-blur-md border-t border-gray-800 shadow-2xl z-40"
    >
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-2 gap-12">
          <div>
            <motion.h3
              variants={itemVariants}
              className="text-gray-400 font-semibold text-sm uppercase tracking-wider mb-6"
            >
              TEMPLATE CATEGORIES
            </motion.h3>
            <div className="space-y-4">
              {templatesContent.categories.map((category, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  className="cursor-pointer group flex justify-between items-center"
                >
                  <h4 className="text-white font-medium group-hover:text-purple-300 transition-colors">
                    {category.title}
                  </h4>
                  <span className="text-gray-400 text-sm">{category.count}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <motion.h3
              variants={itemVariants}
              className="text-gray-400 font-semibold text-sm uppercase tracking-wider mb-6"
            >
              FEATURED
            </motion.h3>
            <div className="space-y-4">
              {templatesContent.featured.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  className="cursor-pointer group"
                >
                  <h4 className="text-white font-medium mb-1 group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )

  const renderResourcesMenu = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="absolute top-full left-0 right-0 bg-[#1a1a1a]/85 backdrop-blur-md border-t border-gray-800 shadow-2xl z-40"
    >
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-2 gap-12">
          <div>
            <motion.h3
              variants={itemVariants}
              className="text-gray-400 font-semibold text-sm uppercase tracking-wider mb-6"
            >
              LEARN
            </motion.h3>
            <div className="space-y-4">
              {resourcesContent.learn.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  className="cursor-pointer group"
                >
                  <h4 className="text-white font-medium mb-1 group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <motion.h3
              variants={itemVariants}
              className="text-gray-400 font-semibold text-sm uppercase tracking-wider mb-6"
            >
              SUPPORT
            </motion.h3>
            <div className="space-y-4">
              {resourcesContent.support.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  className="cursor-pointer group"
                >
                  <h4 className="text-white font-medium mb-1 group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {menuType === "Platform" && renderPlatformMenu()}
          {menuType === "Solutions" && renderSolutionsMenu()}
          {menuType === "Templates" && renderTemplatesMenu()}
          {menuType === "Resources" && renderResourcesMenu()}
        </>
      )}
    </AnimatePresence>
  )
}
