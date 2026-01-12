import Link from 'next/link'
import { ArrowRight, Zap, TrendingUp, Users, Rocket } from 'lucide-react'
import ToolCard from '@/components/shared/ToolCard'

export default function HomePage() {
  const tools = [
    {
      slug: 'overthinking-tax',
      name: 'Overthinking Tax Calculator',
      tagline: 'Quantify your hesitation. Calculate the real cost.',
      emoji: '🧮',
      color: 'bg-gradient-to-r from-purple-500 to-pink-500',
      isNew: true
    },
    {
      slug: 'actually-broke',
      name: 'Are You Actually Broke?',
      tagline: 'Financial reality check vs. feelings.',
      emoji: '💰',
      color: 'bg-gradient-to-r from-teal-500 to-blue-500',
      isNew: true
    },
    {
      slug: 'corporate-survival',
      name: 'Corporate Survival OS',
      tagline: 'Navigate office politics & burnout.',
      emoji: '💼',
      color: 'bg-gradient-to-r from-orange-500 to-red-500',
      isNew: false
    },
    {
      slug: 'family-approval',
      name: 'Family Approval Generator',
      tagline: 'Cultural scripts for tough conversations.',
      emoji: '👨‍👩‍👧‍👦',
      color: 'bg-gradient-to-r from-green-500 to-emerald-500',
      isNew: false
    },
  ]

  return (
    <div className="animate-fade-in-up">
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-lifeos-purple to-lifeos-teal text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Rocket size={16} />
          <span>The "Relatable Pain Products" Studio is Live</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Stop <span className="text-transparent bg-clip-text bg-gradient-to-r from-lifeos-purple to-lifeos-teal">overthinking.</span><br />
          Start <span className="underline decoration-wavy decoration-lifeos-teal">quantifying.</span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          We build digital tools that solve specific, painful life decisions. 
          <span className="font-semibold text-gray-900"> Each ₹199–₹999. Launched every 7–10 days. </span>
          One viral hit pays for 10 experiments.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link 
            href="/tools" 
            className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-all hover:scale-105 shadow-lg"
          >
            Explore All Tools
            <ArrowRight size={20} />
          </Link>
          <Link 
            href="/bundle" 
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-lifeos-purple to-lifeos-teal text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all hover:scale-105 shadow-lg"
          >
            Get LifeOS Bundle (40% Off)
            <Zap size={20} />
          </Link>
        </div>

        {/* Social Proof / Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center p-4">
            <div className="flex items-center justify-center gap-2 mb-2">
              <TrendingUp className="text-lifeos-purple" />
              <span className="text-3xl font-bold">7-10</span>
            </div>
            <p className="text-gray-600">Days between new tool launches</p>
          </div>
          <div className="text-center p-4">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Users className="text-lifeos-teal" />
              <span className="text-3xl font-bold">Same</span>
            </div>
            <p className="text-gray-600">Audience, checkout & email list</p>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold mb-2">1:10</div>
            <p className="text-gray-600">One viral hit funds ten experiments</p>
          </div>
        </div>
      </div>

      {/* Featured Tools Grid */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
          This Week's <span className="text-lifeos-purple">Pain Solvers</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {tools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-10 text-center text-white max-w-4xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to build your <span className="text-lifeos-teal">"Relatable Pain Products" studio?</span>
        </h3>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          This is the exact codebase. Clone it. Add your next tool in 7 days. 
          Same audience, same checkout, cross-sell brutally.
        </p>
        <div className="inline-flex flex-col sm:flex-row gap-4">
          <a 
            href="https://github.com/yourusername/life-os-studio" 
            target="_blank" 
            className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
          >
            ⭐ Star on GitHub
          </a>
          <Link 
            href="/strategy" 
            className="inline-flex items-center justify-center gap-2 border-2 border-lifeos-teal text-lifeos-teal px-6 py-3 rounded-lg font-semibold hover:bg-lifeos-teal hover:text-white transition-all"
          >
            Read the Full Meta-Strategy
          </Link>
        </div>
      </div>
    </div>
  )
}
