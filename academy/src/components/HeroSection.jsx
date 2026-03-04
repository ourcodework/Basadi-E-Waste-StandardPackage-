import React from 'react'
import {MapPin, BadgeCheck} from 'lucide-react'


const HeroSection = () => {
    const handleApplyClick = () => {
        window.open('https://forms.gle/oC14AVef983xpTLf8', '_blank');
    };
    return (
        <section id='home' className="sm:h-90 min-h-screen flex items-center justify-center gap-8 overflow-hidden lg:py-20">
            <div className='flex flex-col md:flex-row items-center gap-12'>
                <div className='absolute inset-0 bg-linear-to-br from-black/40 to-transparent'></div>
                <div className='absolute top-20 left-10 w-20 h-20 rounded-full bg-white/10 animate-float'></div>
                <div className='absolute bottom-20 right-20 w-32 h-32 rounded-full bg-white/5 animate-float'></div>
                <div className='relative z-10 max-6xl mx-auto px-6 py-14'>
                    <div className='flex flex-col md:flex-row items-center'>
                        <div className='flex-1 flex-col gap-8 w-150  '>
                            <div className='inline-flex w-37.5 items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6'>
                                <span className='w-2 h-2 bg-yellow-300 rounded-full animate-pulse'></span>
                                <span className='text-white/90 text-sm font-medium'>Now Enrolling</span>
                            </div>
                            <h1 className='text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight mb-6 w-120'>Basadi E-Waste Training Academy</h1>
                            <p className='text-lg md:text-xl font-medium text-white/80 mb-8 max-w-xl'>
                                Empowering communities through sustainable e-waste management education and practical skills development.
                            </p>
                            <div className='w-72 inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-3 mb-8 border border-white/30'>
                                <MapPin size={16} color='white'/>
                                <p className='font-semibold text-white'>On-Site Training at Our Centre</p>
                            </div>
                            <div className='inline-flex items-center gap-4 bg-white rounded-2xl px-6 py-4 shadow-xl mb-8'>
                                <div className='w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center'>
                                    <BadgeCheck size={16} color='green'/>
                                </div>
                                <div >
                                    <p className='font-bold text-xl text-gray-900'>R1000 - 6 Weeks - Micro-Credential</p>
                                    <p className='text-sm text-gray-500'>Accredited skills certification</p>
                                </div>
                            </div>
                            <div>
                                <button
                                    className='bg-[#16A249] text-white font-semibold px-8 py-4 rounded-xl text-lg shadow-lg'
                                    onClick={handleApplyClick}
                                >
                                    Apply Now
                                </button>
                            </div>
                        </div>
                        <div className='flex-1 relative'>
                            <div className='relative bg-linear-to-br from-white/20 to-white/10 rounded-3xl p-8 backdrop-blur-sm border border-white/20 overflow-hidden'>
                                <div className='w-2xs h-52 bg-amber-500'>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default HeroSection