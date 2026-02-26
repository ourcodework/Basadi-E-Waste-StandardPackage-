import React from 'react'
import logo from '../assets/images/Basadi-E-Waste-Logo.png'
import { Mail, Phone, MapPin, Facebook, Linkedin } from "lucide-react";
import { PiTiktokLogoLight } from 'react-icons/pi';

function Footer() {
  return (
    <footer className="bg-[#16A249] text-primary-foreground py-16 border-t border-gray-300">
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
                  className="w-24 shadow-strong "
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
                <span className="text-white/80 text-sm">operations@basadiewaste.co.za</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#2FC1B2]" />
                <span className="text-white/80 text-sm">+27 12 881 6988</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-[#2FC1B2]" />
                <span className="text-white/80 text-sm">TUT soshanguve campus, Pretoria 0152</span>
              </div>
            </div>
            <div className='mt-4'>
              <ul className='flex gap-2'>
                <li
                  className='w-10 h-10 flex items-center justify-center rounded-full bg-[#2FC1B2]/20'
                >
                  <a
                    href="https://www.facebook.com/basadiewaste/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className='text-[#2FC1B2] hover:text-white/80' />
                  </a>
                </li>
                <li
                  className='w-10 h-10 flex items-center justify-center rounded-full bg-[#2FC1B2]/20'
                >
                  <a
                    href=" https://www.linkedin.com/in/kgothatso-ndema-a6b15272/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className='text-[#2FC1B2] hover:text-white/80' size={20} />
                  </a>
                </li>
                <li
                  className='w-10 h-10 flex items-center justify-center rounded-full bg-[#2FC1B2]/20'
                >
                  <a
                    href="https://www.tiktok.com/@basadi.ewaste"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PiTiktokLogoLight className='text-[#2FC1B2] hover:text-white/80' size={24} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600/30 mt-12 pt-8 flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-white/80 text-sm text-center">
            © 2024 Basadi E-WASTE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer