'use client'

import { useState, useEffect } from 'react'
import { Calculator, Share2, TrendingUp, CreditCard } from 'lucide-react'
import ToolLayout from '@/components/tools/ToolLayout'
import { logUserInteraction, recommendNextTool } from '@/lib/analytics'
import { useRouter } from 'next/navigation'

export default function OverthinkingTaxPage() {
  const router = useRouter()
  const [hours, setHours] = useState(5)
  const [hourlyWage, setHourlyWage] = useState(25)
  const [currency, setCurrency] = useState('USD')
  
  // Calculate the "tax"
  const dailyCost = hours * hourlyWage
  const weeklyCost = dailyCost * 5
  const annualCost = weeklyCost * 52
  
  const [recommendation, setRecommendation] = useState('')

  // Simulate user tracking & cross-sell logic
  useEffect(() => {
    logUserInteraction('overthinking-tax', 'view')
    
    // Determine next tool recommendation based on result severity
    let nextTool = ''
    if (annualCost > 20000) {
      nextTool = 'actually-broke' // High cost → check finances
    } else if (hours > 10) {
      nextTool = 'corporate-survival' // Too many hours → burnout risk
    } else {
      nextTool = 'family-approval' // General → relationship tools
    }
    
    setRecommendation(nextTool)
  }, [annualCost, hours])

  const handleSaveResult = () => {
    const userResult = {
      tool: 'overthinking-tax',
      hours,
      hourlyWage,
      currency,
      annualCost,
      timestamp: new Date().toISOString()
    }
    
    // In production: Save to database/user profile
    localStorage.setItem('last_tool_result', JSON.stringify(userResult))
    
    // Show recommendation
    alert(`✅ Result saved! Based on your ₹${annualCost.toLocaleString()} overthinking tax, try the "Are You Actually Broke?" tool next.`)
    
    // Cross-sell navigation
    router.push(`/tools/${recommendation}`)
  }

  return (
    <ToolLayout
      title="Overthinking Tax Calculator"
      description="Quantify the financial cost of your hesitation and indecision."
      icon={<Calculator />}
    >
      <div className="max-w-2xl mx-auto">
        {/* Interactive Calculator */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8">
          <div className="space-y-8">
            {/* Input 1: Hours per day */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-lg font-semibold text-gray-800">
                  How many hours do you overthink daily? 
                </label>
                <span className="text-2xl font-bold text-lifeos-purple">{hours} hrs</span>
              </div>
              <input
                type="range"
                min="0"
                max="16"
                step="0.5"
                value={hours}
                onChange={(e) => setHours(parseFloat(e.target.value))}
                className="w-full h-3 bg-gradient-to-r from-purple-300 to-pink-300 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>0 (Zen)</span>
                <span>8 (Average)</span>
                <span>16 (Crisis)</span>
              </div>
            </div>

            {/* Input 2: Hourly wage */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-lg font-semibold text-gray-800">
                  Your estimated hourly worth
                </label>
                <div className="flex items-center gap-2">
                  <select 
                    value={currency} 
                    onChange={(e) => setCurrency(e.target.value)}
                    className="border rounded-lg px-2 py-1"
                  >
                    <option value="USD">$</option>
                    <option value="INR">₹</option>
                    <option value="EUR">€</option>
                    <option value="GBP">£</option>
                  </select>
                  <span className="text-2xl font-bold text-lifeos-teal">
                    {currency === 'INR' ? '₹' : '$'}{hourlyWage}
                  </span>
                </div>
              </div>
              <input
                type="range"
                min="5"
                max="200"
                step="5"
                value={hourlyWage}
                onChange={(e) => setHourlyWage(parseInt(e.target.value))}
                className="w-full h-3 bg-gradient-to-r from-teal-300 to-blue-300 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>{currency === 'INR' ? '₹' : '$'}5/hr</span>
                <span>{currency === 'INR' ? '₹' : '$'}50/hr</span>
                <span>{currency === 'INR' ? '₹' : '$'}200+/hr</span>
              </div>
            </div>
          </div>

          {/* Results Display */}
          <div className="mt-10 pt-8 border-t">
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-900">
              Your Annual <span className="text-lifeos-purple">Overthinking Tax</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-xl text-center">
                <div className="text-3xl font-bold text-lifeos-purple">
                  {currency === 'INR' ? '₹' : '$'}{dailyCost.toLocaleString()}
                </div>
                <p className="text-gray-600">Daily</p>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-4 rounded-xl text-center">
                <div className="text-3xl font-bold text-lifeos-teal">
                  {currency === 'INR' ? '₹' : '$'}{weeklyCost.toLocaleString()}
                </div>
                <p className="text-gray-600">Weekly</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-4 rounded-xl text-center">
                <div className="text-3xl font-bold text-red-600">
                  {currency === 'INR' ? '₹' : '$'}{annualCost.toLocaleString()}
                </div>
                <p className="text-gray-600">Annually</p>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
              <p className="font-semibold">
                💡 This is money you're <span className="underline">leaving on the table</span> due to decision paralysis.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              onClick={handleSaveResult}
              className="flex-1 bg-gradient-to-r from-lifeos-purple to-pink-500 text-white py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-all flex items-center justify-center gap-2"
            >
              <TrendingUp size={24} />
              Save Result & Get Personalized Fix
            </button>
            
            <button
              onClick={() => {
                const text = `My overthinking costs me ${currency === 'INR' ? '₹' : '$'}${annualCost.toLocaleString()} annually. Calculate yours: [URL]`
                navigator.clipboard.writeText(text)
                alert('Copied to clipboard! Share on Twitter/LinkedIn.')
              }}
              className="flex-1 border-2 border-lifeos-purple text-lifeos-purple py-4 rounded-xl font-semibold text-lg hover:bg-purple-50 transition-all flex items-center justify-center gap-2"
            >
              <Share2 size={24} />
              Share Your Tax
            </button>
          </div>
        </div>

        {/* Cross-sell Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-6 text-white">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <CreditCard size={24} />
            Ready to Eliminate This Tax?
          </h3>
          <p className="text-gray-300 mb-4">
            The <span className="font-semibold text-lifeos-teal">LifeOS Bundle</span> includes:
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-lifeos-teal rounded-full"></div>
              <span>Overthinking Detox Planner</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-lifeos-teal rounded-full"></div>
              <span>Decision Velocity Framework</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-lifeos-teal rounded-full"></div>
              <span>+ 5 other tools to fix root causes</span>
            </li>
          </ul>
          <button
            onClick={() => router.push('/bundle')}
            className="w-full bg-white text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
          >
            Get Bundle (40% Off) →
          </button>
        </div>
      </div>
    </ToolLayout>
  )
}
