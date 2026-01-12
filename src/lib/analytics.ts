// Simulated user tracking and cross-sell recommendations
// In production, connect to a real database (like Supabase)

export interface UserInteraction {
  toolSlug: string
  action: 'view' | 'calculate' | 'save' | 'share'
  data?: Record<string, any>
  timestamp: Date
}

// Simulate logging (in production: send to your backend)
export const logUserInteraction = (toolSlug: string, action: UserInteraction['action'], data?: any) => {
  const interaction: UserInteraction = {
    toolSlug,
    action,
    data,
    timestamp: new Date()
  }
  
  // Store in localStorage for demo (production: send to API)
  const history = JSON.parse(localStorage.getItem('user_interactions') || '[]')
  history.push(interaction)
  localStorage.setItem('user_interactions', JSON.stringify(history))
  
  console.log('[Analytics]', interaction)
}

// Core cross-sell recommendation engine
export const recommendNextTool = (currentTool: string, userData?: any): string => {
  const recommendations: Record<string, string> = {
    'overthinking-tax': 'actually-broke', // If overthinking money → check finances
    'actually-broke': 'salary-negotiation', // If broke → earn more
    'corporate-survival': 'resignation-templates', // If unhappy → exit plans
    'family-approval': 'awkward-conversations', // If family issues → social scripts
    'career-reality-check': 'pivot-probability' // If stagnant → change paths
  }
  
  // Custom logic based on user's result data
  if (currentTool === 'overthinking-tax' && userData?.annualCost > 50000) {
    return 'salary-negotiation' // High cost → urgent income increase
  }
  
  return recommendations[currentTool] || 'overthinking-tax'
}

// Calculate user's "pain profile" for personalized bundles
export const calculatePainProfile = (interactions: UserInteraction[]) => {
  const toolWeights: Record<string, number> = {}
  
  interactions.forEach(interaction => {
    toolWeights[interaction.toolSlug] = (toolWeights[interaction.toolSlug] || 0) + 1
  })
  
  return {
    primaryPain: Object.keys(toolWeights).reduce((a, b) => toolWeights[a] > toolWeights[b] ? a : b),
    toolCount: Object.keys(toolWeights).length,
    engagementScore: interactions.length
  }
}
