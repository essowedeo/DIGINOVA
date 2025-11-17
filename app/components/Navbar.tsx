"use client";

import { useState } from 'react'
import Link from 'next/link'
import Logo from './Logo'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Logo />

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-medium">
          <Link href="/" className="hover:text-blue-600">Accueil</Link>
          <Link href="/about" className="hover:text-blue-600">À propos</Link>
          <Link href="/services" className="hover:text-blue-600">Services</Link>
          <Link href="/technologies" className="hover:text-blue-600">Technologies</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-md">
          <div className="px-4 py-2 space-y-2">
            <Link href="/" className="block hover:text-blue-600" onClick={() => setIsOpen(false)}>Accueil</Link>
            <Link href="/about" className="block hover:text-blue-600" onClick={() => setIsOpen(false)}>À propos</Link>
            <Link href="/services" className="block hover:text-blue-600" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="/technologies" className="block hover:text-blue-600" onClick={() => setIsOpen(false)}>Technologies</Link>
            <Link href="/contact" className="block hover:text-blue-600" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  )
}