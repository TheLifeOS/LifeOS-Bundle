import ToolCard from '@/components/shared/ToolCard'

export default function AllToolsPage() {
  const allTools = [
    { slug: 'overthinking-tax', name: 'Overthinking Tax Calculator', tagline: 'Quantify hesitation cost', emoji: '🧮', color: 'bg-gradient-to-r from-purple-500 to-pink-500', isNew: true },
    { slug: 'actually-broke', name: 'Are You Actually Broke?', tagline: 'Financial reality check', emoji: '💰', color: 'bg-gradient-to-r from-teal-500 to-blue-500', isNew: true },
    { slug: 'corporate-survival', name: 'Corporate Survival OS', tagline: 'Navigate office politics', emoji: '💼', color: 'bg-gradient-to-r from-orange-500 to-red-500', isNew: false },
    { slug: 'family-approval', name: 'Family Approval Generator', tagline: 'Cultural scripts', emoji: '👨‍👩‍👧‍👦', color: 'bg-gradient-to-r from-green-500 to-emerald-500', isNew: false },
    { slug: 'career-reality', name: 'Career Reality Check AI', tagline: '5-year projection', emoji: '🤖', color: 'bg-gradient-to-r from-blue-500 to-indigo-500', isNew: false },
    { slug: 'salary-negotiation', name: 'Salary Negotiation Simulator', tagline: 'Choose-your-adventure', emoji: '💸', color: 'bg-gradient-to-r from-yellow-500 to-red-500', isNew: false },
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">All Pain Solvers</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Each tool solves one specific, painful life decision. 
          <span className="font-semibold text-lifeos-purple"> Standalone or bundled.</span>
          New tool every 7-10 days.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allTools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>

      <div className="mt-16 bg-gradient-to-r from-lifeos-purple to-lifeos-teal rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Get the Complete LifeOS Bundle</h2>
        <p className="mb-6 text-lg opacity-90">
          All current tools + 12 months of new launches (20+ tools). 
          <br />
          <span className="font-bold">One payment. Unlimited updates.</span>
        </p>
        <button className="bg-white text-gray-900 px-8 py-3 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all">
          View Bundle (Save 60%) →
        </button>
      </div>
    </div>
  )
}
