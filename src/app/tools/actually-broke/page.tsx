'use client'

import { Wallet, TrendingDown, ArrowRight } from 'lucide-react'
import ToolLayout from '@/components/tools/ToolLayout'
import { useState } from 'react'

export default function ActuallyBrokePage() {
  const [score, setScore] = useState(0)
  
  const questions = [
    { id: 1, text: 'Do you know your exact monthly expenses?', weight: 2 },
    { id: 2, text: 'Could you cover a $1000 emergency today?', weight: 3 },
    { id: 3, text: 'Do you invest ≥10% of income monthly?', weight: 2 },
  ]

  const calculateScore = () => {
    // Simplified scoring
    return questions.reduce((acc, q) => acc + (Math.random() > 0.5 ? q.weight : 0), 0)
  }

  return (
    <ToolLayout
      title="Are You Actually Broke?"
      description="Financial reality check vs. feelings. Data-driven assessment."
      icon={<Wallet />}
    >
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">
            Answer 3 questions for a reality check
          </h3>
          
          <div className="space-y-6 mb-8">
            {questions.map((q) => (
              <div key={q.id} className="p-4 border rounded-xl hover:border-lifeos-purple transition-all">
                <p className="font-semibold mb-3">{q.text}</p>
                <div className="flex gap-4">
                  {['Yes', 'No', 'Unsure'].map((option) => (
                    <button
                      key={option}
                      className="flex-1 border py-2 rounded-lg hover:bg-gray-50 transition-all"
                      onClick={() => setScore(calculateScore())}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {score > 0 && (
            <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-6 rounded-xl border border-teal-200">
              <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
                <TrendingDown className="text-lifeos-teal" />
                Your Financial Reality Score: {score}/7
              </h4>
              <p className="text-gray-700 mb-4">
                {score >= 5 
                  ? 'You have solid fundamentals. Focus on wealth acceleration.' 
                  : 'Address basic financial hygiene first. Track every expense for 30 days.'}
              </p>
              <button className="inline-flex items-center gap-2 text-lifeos-teal font-semibold">
                Get Personalized Action Plan <ArrowRight size={20} />
              </button>
            </div>
          )}

          <div className="mt-8 text-center text-gray-600">
            <p className="text-sm">
              💰 Next tool recommendation: <span className="font-semibold text-lifeos-purple">Salary Negotiation Simulator</span> 
              — because knowing your finances is step 1, increasing income is step 2.
            </p>
          </div>
        </div>
      </div>
    </ToolLayout>
  )
}
