import React, { useState } from 'react'
import logo from '../assets/images/Basadi-E-Waste-Logo.png'
import { Menu, X } from "lucide-react";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {label: "Home", href:"#home"},
    {label: "About", href:"#about"},
    {label: "Services", href:"#services"},
    {label: "Contact", href:"#contact"}
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F6FBF6]/95 backdrop-blur-sm border-b border-gray-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Basadi E-WASTE Logo"
              className="w-20 shadow-strong "
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="font-semibold text-foreground hover:text-[#16A249] transition-smooth">Home</a>
            <a href="#about" className="font-semibold text-foreground hover:text-[#16A249] transition-smooth">About</a>
            <a href="#services" className="font-semibold text-foreground hover:text-[#16A249] transition-smooth">Services</a>
            <a href="#contact" className="font-semibold text-foreground hover:text-[#16A249] transition-smooth">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            variant="default"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='md:hidden border-t border-gray-200 mt-4'>
            <div className='flex flex-col space-y-4 p-4'>
              {navItems.map((item)=> (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-semibold text-foreground hover:text-[#16A249] transition-smooth"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar