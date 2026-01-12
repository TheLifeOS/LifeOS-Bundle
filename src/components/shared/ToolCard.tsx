import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ToolCardProps {
  tool: {
    slug: string
    name: string
    tagline: string
    emoji: string
    color: string
    isNew: boolean
  }
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <Link href={`/tools/${tool.slug}`}>
      <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border hover:border-lifeos-purple">
        {/* Color accent bar */}
        <div className={`h-2 ${tool.color}`}></div>
        
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <span className="text-3xl">{tool.emoji}</span>
              {tool.isNew && (
                <span className="ml-3 bg-gradient-to-r from-lifeos-purple to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  NEW
                </span>
              )}
            </div>
            <ArrowRight className="text-gray-400 group-hover:text-lifeos-purple group-hover:translate-x-2 transition-all" />
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {tool.name}
          </h3>
          <p className="text-gray-600 mb-4">
            {tool.tagline}
          </p>
          
          <div className="text-sm text-gray-500">
            Price: <span className="font-semibold text-gray-900">₹499</span> 
            <span className="mx-2">•</span>
            <span className="font-medium text-lifeos-purple">Try free calculator</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
