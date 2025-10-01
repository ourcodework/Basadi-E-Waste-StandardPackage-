import React from 'react'
import logo from '../assets/images/Basadi-E-Waste-Logo.png'
import { Recycle, Mail, Phone, MapPin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#16A249] text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-24">
                {/* <Recycle size={24} className="text-white" /> */}
                <img
                  src={logo}
                  alt="Basadi E-WASTE Logo"
                  className="w-24 rounded-2xl shadow-strong "
                />
              </div>
              {/* <h3 className="text-2xl font-bold text-[#F6FBF6]">Basadi E-WASTE</h3> */}
            </div>
            <p className="text-white/80 mb-6 max-w-md leading-relaxed">
              Leading the charge in sustainable e-waste recycling across Africa.
              Empowering women, transforming communities, and building a circular future.
            </p>
            <p className="text-[#2FC1B2] font-semibold">
              Because the future is female, and the future is now.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-[#F6FBF6]">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-white/80 hover:text-white transition-smooth">About Us</a></li>
              <li><a href="#services" className="text-white/80 hover:text-white transition-smooth">Our Services</a></li>
              <li><a href="#impact" className="text-white/80 hover:text-white transition-smooth">Our Impact</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-white transition-smooth">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-[#F6FBF6]">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[#2FC1B2]" />
                <span className="text-primary-foreground/80 text-sm">info@basadiewaste.co.za</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#2FC1B2]" />
                <span className="text-primary-foreground/80 text-sm">+27 11 123 4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-[#2FC1B2]" />
                <span className="text-primary-foreground/80 text-sm">Johannesburg, South Africa</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/80 text-sm">
            © 2024 Basadi E-WASTE. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/80 hover:text-white transition-smooth">Privacy Policy</a>
            <a href="#" className="text-white/80 hover:text-white transition-smooth">Terms of Service</a>
            <a href="#" className="text-white/80 hover:text-white transition-smooth">Sustainability Report</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer