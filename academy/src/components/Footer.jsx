import React from 'react'
import {Recycle} from 'lucide-react'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-12'>
        <div className='max-w-6xl mx-auto px-6'>
            <div className='flex flex-col md:flex-row justify-center items-center gap-12'>
                <div className='text-center md:text-left'>
                    <h3 className='text-xl font-bold mb-2'>Basadi E-Waste Training Academy</h3>
                    <p className='text-gray-400 text-sm'>Empowering communities through sustainable skills. On-site training at our centre.</p>
                </div>
                <div className='flex items-center gap-2'>
                    <span><Recycle color="green" size={18}/></span>
                    <span className='text-sm text-gray-400'>Building a circular economy, one certified professional at a time.</span>
                </div>
            </div>
            <div className='border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500'>
                <p>© 2025 Basadi E-Waste. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer