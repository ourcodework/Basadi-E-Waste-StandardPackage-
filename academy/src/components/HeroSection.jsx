import React from 'react'
import { MapPin, BadgeCheck } from 'lucide-react'
import heroImage from '../assets/basadiewaste-hero-section.jpeg'


const HeroSection = () => {
    const handleApplyClick = () => {
        window.open('https://forms.gle/oC14AVef983xpTLf8', '_blank');
    };
    return (
        <section id='home' className="min-h-screen w-full px-8 sm:h-90 flex items-center justify-center gap-8 overflow-hidden lg:py-20">
            {/* Background Image Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{ backgroundImage: `url(${heroImage})` }}
            />
            <div className='w-99.5 md:w-full flex flex-col md:flex-row items-center gap-12'>
                <div className='absolute inset-0 bg-linear-to-br from-black/40 to-transparent'></div>
                <div className='absolute top-20 left-10 w-20 h-20 rounded-full bg-white/10 animate-float'></div>
                <div className='absolute bottom-20 right-20 w-32 h-32 rounded-full bg-white/5 animate-float'></div>
                <div className='relative z-10 max-6xl mx-auto px-6 py-14 md:py-24'>
                    <div className='flex items-center'>
                        <div className='flex-1 md:flex flex-col gap-4'>
                            <div className='flex justify-center'>
                                <div className='flex w-37.5 items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6'>
                                    <span className='w-2 h-2 bg-yellow-300 rounded-full animate-pulse'></span>
                                    <span className='text-white/90 text-sm font-medium'>Now Enrolling</span>
                                </div>
                            </div>

                            <div className='flex justify-center text-center'>
                                <h1 className='text-2xl md:text-5xl lg:text-6xl text-white font-bold leading-tight mb-6 w-70 md:w-160'>Basadi E-Waste Training Academy</h1>
                            </div>

                            <div className='flex justify-center text-center'>
                                <p className='w-80 text-lg md:text-xl font-medium text-black mb-8 md:w-175'>
                                    Empowering communities through sustainable e-waste management education and practical skills development.
                                </p>
                            </div>

                            <div className='flex justify-center'>
                                <div className='w-76 md:w-72 flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-3 mb-8 border border-white/30'>
                                    <MapPin size={16} color='white' />
                                    <p className='font-semibold text-white'>On-Site Training at Our Centre</p>
                                </div>
                            </div>

                            <div className='flex justify-center'>
                                <div className='inline-flex items-center gap-2 md:gap-4 bg-white rounded-2xl px-4 py-2 md:px-6 md:py-4 shadow-xl mb-8'>
                                    <div className='w-10 h-10 md:w-12 md:h-12 bg-emerald-100 rounded-xl flex items-center justify-center'>
                                        <BadgeCheck size={16} color='green' />
                                    </div>
                                    <div >
                                        <p className='text-sm font-bold md:text-xl text-gray-900'>R1000 - 6 Weeks - Micro-Credential</p>
                                        {/* <p className='text-sm text-gray-500'>Accredited skills certification</p> */}
                                    </div>
                                </div>
                            </div>

                            {/* Apply Now Button */}
                            <div className='flex justify-center'>
                                <button
                                    className='bg-[#16A249] text-white font-semibold px-8 py-4 rounded-xl text-lg shadow-lg cursor-pointer'
                                    onClick={handleApplyClick}
                                >
                                    Apply Now
                                </button>
                            </div>
                        </div>
                        {/* <div className='hidden sm:flex relative'>
                            <div className='relative bg-linear-to-br from-white/20 to-white/10 rounded-3xl p-8 backdrop-blur-sm border border-white/20 overflow-hidden'>
                                <svg class="w-full h-80" viewBox="0 0 400 500" fill="none">
                                    <rect x="50" y="150" width="300" height="280" rx="15" fill="#1e6b38" stroke="#2fc1b2" stroke-width="2"></rect>
                                    <polygon points="50,150 200,80 350,150" fill="#1e9345" stroke="#2fc1b2" stroke-width="2"></polygon>
                                    <rect x="175" y="380" width="50" height="80" rx="5" fill="#8B4513" stroke="#2fc1b2" stroke-width="2"></rect>
                                    <circle cx="220" cy="420" r="3" fill="#FFD700"></circle> <rect x="80" y="200" width="40" height="40" rx="3" fill="#87CEEB" stroke="#2fc1b2" stroke-width="2"></rect>
                                    <rect x="280" y="200" width="40" height="40" rx="3" fill="#87CEEB" stroke="#2fc1b2" stroke-width="2"></rect>
                                    <line x1="100" y1="200" x2="100" y2="240" stroke="#2fc1b2" stroke-width="1"></line>
                                    <line x1="80" y1="220" x2="120" y2="220" stroke="#2fc1b2" stroke-width="1"></line>
                                    <line x1="300" y1="200" x2="300" y2="240" stroke="#2fc1b2" stroke-width="1"></line>
                                    <line x1="280" y1="220" x2="320" y2="220" stroke="#2fc1b2" stroke-width="1"></line>
                                    <rect x="80" y="280" width="40" height="40" rx="3" fill="#87CEEB" stroke="#2fc1b2" stroke-width="2"></rect>
                                    <rect x="280" y="280" width="40" height="40" rx="3" fill="#87CEEB" stroke="#2fc1b2" stroke-width="2"></rect>
                                    <line x1="100" y1="280" x2="100" y2="320" stroke="#2fc1b2" stroke-width="1"></line> <line x1="80" y1="300" x2="120" y2="300" stroke="#2fc1b2" stroke-width="1"></line>
                                    <line x1="300" y1="280" x2="300" y2="320" stroke="#2fc1b2" stroke-width="1"></line> <line x1="280" y1="300" x2="320" y2="300" stroke="#2fc1b2" stroke-width="1"></line>
                                    <rect x="155" y="200" width="35" height="35" rx="3" fill="#FFD700" stroke="#2fc1b2" stroke-width="2"></rect> <rect x="210" y="200" width="35" height="35" rx="3" fill="#FFD700" stroke="#2fc1b2" stroke-width="2"></rect> <rect x="155" y="280" width="35" height="35" rx="3" fill="#FFD700" stroke="#2fc1b2" stroke-width="2"></rect> <rect x="210" y="280" width="35" height="35" rx="3" fill="#FFD700" stroke="#2fc1b2" stroke-width="2"></rect>
                                    <circle cx="165" cy="210" r="4" fill="#E67E22"></circle>
                                    <path d="M165 214 L165 225" stroke="#E67E22" stroke-width="2"></path>
                                    <circle cx="220" cy="210" r="4" fill="#E67E22"></circle>
                                    <path d="M220 214 L220 225" stroke="#E67E22" stroke-width="2"></path>
                                    <g>

                                        <rect x="70" y="320" width="260" height="30" fill="#8B7355" stroke="#2fc1b2" stroke-width="1"></rect>
                                        <circle cx="90" cy="335" r="8" fill="#FFD700"></circle>
                                        <circle cx="150" cy="335" r="8" fill="#FFD700"></circle>
                                        <circle cx="210" cy="335" r="8" fill="#FFD700"></circle>
                                        <circle cx="270" cy="335" r="8" fill="#FFD700"></circle>
                                        <circle cx="310" cy="335" r="8" fill="#FFD700"></circle>
                                    </g>  <ellipse cx="200" cy="450" rx="150" ry="30" fill="#2fc1b2" opacity="0.3"></ellipse> <g>
                                        <rect x="190" y="60" width="20" height="35" fill="#8B4513"></rect>
                                        <polygon points="210,65 210,85 235,75" fill="#FFD700" stroke="#E67E22" stroke-width="1.5"></polygon>
                                        <text x="212" y="80" font-size="8" fill="#E67E22" font-weight="bold">
                                            CERT
                                        </text>
                                    </g>  <rect x="150" y="30" width="100" height="30" rx="5" fill="#FFD700" stroke="#1e9345" stroke-width="2"></rect> <text x="200" y="50" font-size="12" fill="#1e9345" font-weight="bold" text-anchor="middle">
                                        Training Centre
                                    </text>
                                </svg>
                                <div className='absolute -bottom-4 -right-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-bold text-sm shadow-lg border-2 border-yellow-500'>
                                    Accredited
                                </div>
                            </div>
                        </div> */}
                    </div>

                </div>

            </div>
        </section>
    )
}

export default HeroSection