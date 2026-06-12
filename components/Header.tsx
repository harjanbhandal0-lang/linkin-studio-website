'use client'

import Link from 'next/link'
import { useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-cream/95 glass-frosted border-b border-royal-blue/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-royal-blue rounded-lg flex items-center justify-center">
            <span className="text-cream font-bold text-lg">LS</span>
          </div>
          <span className="font-playfair font-bold text-xl text-royal-blue hidden sm:block">
            Linkin Studio
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-charcoal hover:text-royal-blue transition-colors">
            Home
          </Link>
          <div className="relative group">
            <button className="text-charcoal hover:text-royal-blue transition-colors">
              Services
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white border border-royal-blue/20 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <Link href="/wedding-films" className="block px-4 py-2 text-charcoal hover:bg-cream transition-colors">
                Wedding Films
              </Link>
              <Link href="/photography" className="block px-4 py-2 text-charcoal hover:bg-cream transition-colors">
                Photography
              </Link>
              <Link href="/bridal-wear" className="block px-4 py-2 text-charcoal hover:bg-cream transition-colors">
                Bridal Wear
              </Link>
              <Link href="/accessories" className="block px-4 py-2 text-charcoal hover:bg-cream transition-colors">
                Accessories
              </Link>
            </div>
          </div>
          <Link href="/gallery" className="text-charcoal hover:text-royal-blue transition-colors">
            Gallery
          </Link>
          <a href="#contact" className="text-charcoal hover:text-royal-blue transition-colors">
            Contact
          </a>
          <Link
            href="tel:604-864-4999"
            className="px-6 py-2 bg-royal-blue text-cream rounded-lg hover:bg-royal-blue/90 transition-colors font-medium"
          >
            Call Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 w-6 h-6"
        >
          <div className="w-full h-0.5 bg-charcoal rounded-full"></div>
          <div className="w-full h-0.5 bg-charcoal rounded-full"></div>
          <div className="w-full h-0.5 bg-charcoal rounded-full"></div>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-royal-blue/10 bg-cream/95 py-4 px-4">
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-charcoal hover:text-royal-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <div className="border-t border-royal-blue/10 pt-2">
              <p className="text-charcoal font-semibold text-sm mb-2">Services</p>
              <Link
                href="/wedding-films"
                className="block text-charcoal hover:text-royal-blue transition-colors pl-4 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Wedding Films
              </Link>
              <Link
                href="/photography"
                className="block text-charcoal hover:text-royal-blue transition-colors pl-4 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Photography
              </Link>
              <Link
                href="/bridal-wear"
                className="block text-charcoal hover:text-royal-blue transition-colors pl-4 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Bridal Wear
              </Link>
              <Link
                href="/accessories"
                className="block text-charcoal hover:text-royal-blue transition-colors pl-4 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Accessories
              </Link>
            </div>
            <Link
              href="/gallery"
              className="text-charcoal hover:text-royal-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <a
              href="#contact"
              className="text-charcoal hover:text-royal-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <Link
              href="tel:604-864-4999"
              className="px-6 py-2 bg-royal-blue text-cream rounded-lg hover:bg-royal-blue/90 transition-colors font-medium text-center"
            >
              Call Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
