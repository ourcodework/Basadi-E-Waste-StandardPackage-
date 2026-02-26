import React from 'react'

const HeroSection = () => {
  return (
    <section id='home' className="sm:h-90 min-h-screen flex items-center justify-center gap-8 bg-[#16A249] overflow-hidden lg:py-20">       
        <div className='flex flex-col gap-8 w-150  '>
            <h1 className='text-6xl text-white font-bold w-120'>Basadi E-Waste Training Academy</h1>
            <p className='text-2xl font-medium text-white'>
                Empowering communities through sustainable e-waste management education and practical skills development.
            </p>
    margin: 0;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 1.5rem;
    font-weight: 700;
    font-size: 3.75rem;
    line-height: 1;
            <div className='w-75 bg-white/30 p-4 border-2 border-amber-50 rounded-4xl'>
                <p className='font-medium text-white'>On-Site Training at Our Centre</p>
            </div>
        </div>
        <div className='flex items-center'>
            <div className='w-2xs h-52 bg-amber-500'>

            </div>
        </div>
    </section>
  )
}

export default HeroSection