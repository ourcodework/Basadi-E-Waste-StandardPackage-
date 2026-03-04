import React from 'react'
import {Badge,Check} from 'lucide-react'

const AchievementSection = () => {
  return (
    <section className='py-16 bg-emerald-50'>
        <div className='max-w-4xl mx-auto px-6'>
            <div className='text-center mb-12'>
                <p className='inline-block bg-orange-100 text-orange-700 font-semibold px-4 py-2 rounded-full mb-4 text-sm'>Your Achievement</p>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4 '>Your Micro-Credential Certificate</h2>
                <p className='text-gray-600 text-lg max-w-2xl mx-auto text-center' >A professional certificate of completion that demonstrates your expertise.</p>
            </div>
            {/* Certificate */}
            <div className='bg-white rounded-2xl p-8 md:p-12 shadow-xl border-4 border-emerald-200 relative overflow-hidden'>
              {/* Corner Decorations */}
              <div className='absolute top-0 left-0 w-24 h-24 bg-emerald-100 rounded-br-full'></div>
              <div className='absolute bottom-0 right-0 w-24 h-24 bg-emerald-100 rounded-tl-full'></div>
              <div className='relative text-center'>
                <div className='flex justify-center items-center mb-6'>
                <Badge className='text-emerald-600' size={52}/><Check className='text-emerald-600 -ml-9.5'/>
              </div>
              <h3 className='text-2xl md:text-3xl font-bold text-gray-400 mb-2'>Micro-Credential</h3>
              <p className='text-emerald-600 font-semibold text-lg mb-8'>E-Waste Management Specialist</p>
              <p className='text-gray-500 mb-2'>This certifies that</p>
              <p className='text-3xl Md:text-4 font-bold tetx-gray-900 mb-4 border-b-2 border-emerald-200 pb-4 mx-auto max-w-md'>[Your Name]</p>
              <p className='text-gray-600 mb-8 max-w-lg mx-auto'>has successfully completed the 6-Week On-Site E-Waste Management Training Programme and demonstrated competency in sustainable e-waste management practices and circular economy principles.</p>
              <div className='flex justify-center gap-12 md:gap-24 mt-8'> 
                <div className='text-center'>
                  <div className='border-t-2 border-gray-300 pt-2 px-8'>
                    <p className='text-sm tetx-gray-500'>Date</p>
                  </div>
                </div>
                <div className='text-center'>
                  <div className='border-t-2 border-gray-300 pt-2 px-8'>
                    <p className='text-sm tetx-gray-500'>Signature</p>
                  </div>
                </div>
              </div>
              </div>
            </div>
        </div>

    </section>
  )
}

export default AchievementSection