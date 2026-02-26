import React from 'react'

const Impact = () => {
    return (
        <section id="ourimpact" className="py-16 md:py-24 bg-emerald-50 flex flex-col items-center justify-center gap:16">
            <div className='flex flex-col items-center justify-center'>
                <p className='inline-block bg-emerald-100 text-emerald-700 font-semibold px-4 py-2 rounded-full mb-4 text-sm'>Our Impact</p>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4 '>Supporting Sustainable Development Goals</h2>
            </div>


            <div className='flex flex-wrap justify-center gap:6 md:gap:8'>
                <div className='flex flex-col items-center gap-3 p-4'>
                    <div className='w-20 h-20 md:w-24 md:h-24 bg-red-600 rounded-lg flex items-center justify-center shadow-lg'>
                        <p className='text-2xl md:text-3xl font-bold text-white'>8</p>
                    </div>
                    <p className='text-xs md:text-sm text-gray-600 text-center font-medium max-w-24'>Decent Work & Economic Growth</p>
                </div>
                <div className='flex flex-col items-center gap-3 p-4'>
                    <div className='w-20 h-20 md:w-24 md:h-24 bg-orange-500 rounded-lg flex items-center justify-center shadow-lg'>
                        <p className='text-2xl md:text-3xl font-bold text-white'>9</p>
                    </div>
                    <p className='text-xs md:text-sm text-gray-600 text-center font-medium max-w-24'>Industry, Innovation & Infrastructure</p>
                </div>
                <div className='flex flex-col items-center gap-3 p-4'>
                    <div className='w-20 h-20 md:w-24 md:h-24 bg-amber-600 rounded-lg flex items-center justify-center shadow-lg'>
                        <p className='text-2xl md:text-3xl font-bold text-white'>12</p>
                    </div>
                    <p className='text-xs md:text-sm text-gray-600 text-center font-medium max-w-24'>Responsible Consumption & Production</p>
                </div>
                <div className='flex flex-col items-center gap-3 p-4'>
                    <div className='w-20 h-20 md:w-24 md:h-24 bg-green-600 rounded-lg flex items-center justify-center shadow-lg'>
                        <p className='text-2xl md:text-3xl font-bold text-white'>13</p>
                    </div>
                    <p className='text-xs md:text-sm text-gray-600 text-center font-medium max-w-24'>Climate Action</p>
                </div>
               
            </div>
        </section>
    )
}

export default Impact