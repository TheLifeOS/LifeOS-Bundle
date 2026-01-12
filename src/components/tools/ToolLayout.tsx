import { ReactNode } from 'react'

interface ToolLayoutProps {
  title: string
  description: string
  icon: ReactNode
  children: ReactNode
}

export default function ToolLayout({ title, description, icon, children }: ToolLayoutProps) {
  return (
    <div className="animate-fade-in-up">
      {/* Tool Header */}
      <div className="max-w-4xl mx-auto mb-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-gradient-to-r from-lifeos-purple to-lifeos-teal text-white p-3 rounded-xl">
            {icon}
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
            <p className="text-xl text-gray-600 mt-2">{description}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <span className="bg-gray-100 px-3 py-1 rounded-full">Standalone: ₹499</span>
          <span className="bg-gradient-to-r from-lifeos-purple/10 to-lifeos-teal/10 px-3 py-1 rounded-full text-lifeos-purple font-medium">
            Included in LifeOS Bundle (Save 60%)
          </span>
          <span>•</span>
          <span>Launch Week Special</span>
        </div>
      </div>

      {children}

      {/* Tool Footer */}
      <div className="max-w-4xl mx-auto mt-16 p-6 bg-gradient-to-r from-gray-50 to-white rounded-2xl border">
        <h3 className="text-xl font-bold mb-4 text-gray-900">The "Relatable Pain Products" Meta-Strategy</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="p-4 bg-white rounded-xl border">
            <div className="font-bold mb-2">Each Product</div>
            <div className="text-lifeos-purple font-semibold">₹199–₹999</div>
            <p className="text-gray-600 mt-1">Low-risk impulse buy pricing</p>
          </div>
          <div className="p-4 bg-white rounded-xl border">
            <div className="font-bold mb-2">Launch Cadence</div>
            <div className="text-lifeos-purple font-semibold">Every 7–10 days</div>
            <p className="text-gray-600 mt-1">Keep audience engaged, SEO fresh</p>
          </div>
          <div className="p-4 bg-white rounded-xl border">
            <div className="font-bold mb-2">Cross-Sell Engine</div>
            <div className="text-lifeos-purple font-semibold">Same audience/list</div>
            <p className="text-gray-600 mt-1">Brutal recommendations between tools</p>
          </div>
        </div>
      </div>
    </div>
  )
}
