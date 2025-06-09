import { Zap, Target, BarChart3, Users } from "lucide-react"

export default function FeatureSection() {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Create high-converting landing pages in minutes, not hours",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Conversion Focused",
      description: "Built-in optimization tools to maximize your conversion rates",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics & Insights",
      description: "Track performance and optimize with detailed analytics",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Lead Generation",
      description: "Capture and nurture leads with powerful automation tools",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything you need to convert visitors</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to help you create, optimize, and scale your marketing efforts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
