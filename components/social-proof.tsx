export default function SocialProof() {
  const companies = ["Microsoft", "Google", "Amazon", "Shopify", "HubSpot", "Salesforce"]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-gray-600 text-lg mb-8">Trusted by over 40,000+ businesses worldwide</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
            {companies.map((company, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="text-gray-400 font-semibold text-lg">{company}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-xl text-gray-700 mb-4">
              "Leadpages helped us increase our conversion rate by 340% in just 3 months. The templates are beautiful
              and the editor is incredibly intuitive."
            </blockquote>
            <cite className="text-gray-600">
              <strong>Sarah Johnson</strong>, Marketing Director at TechCorp
            </cite>
          </div>
        </div>
      </div>
    </section>
  )
}
