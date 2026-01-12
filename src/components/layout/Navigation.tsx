'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Tool, Package, Sparkles, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home', icon: <Home size={20} /> },
    { href: '/tools', label: 'All Tools', icon: <Tool size={20} /> },
    { href: '/bundle', label: 'Bundle', icon: <Package size={20} /> },
    { href: '/strategy', label: 'Strategy', icon: <Sparkles size={20} /> },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-lifeos-purple to-lifeos-teal text-white p-2 rounded-lg">
              <Sparkles size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">LifeOS Studio</h1>
              <p className="text-xs text-gray-500">Relatable Pain Products</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  pathname === link.href
                    ? 'bg-gradient-to-r from-lifeos-purple/10 to-lifeos-teal/10 text-lifeos-purple font-semibold'
                    : 'text-gray-700 hover:text-lifeos-purple hover:bg-gray-100'
                }`}
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
            <button className="bg-gradient-to-r from-lifeos-purple to-lifeos-teal text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-all">
              Dashboard
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.icon}
                <span className="font-medium">{link.label}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
