import React from 'react'
import { BookOpen,Check,Settings, CircleDollarSign } from 'lucide-react'

const skills = [
    {
        title: 'E-Waste Fundamentals',
        about: 'Understanding electronic components, hazardous materials identification, and safety protocols for handling e-waste.',
        list: ['Component identification', 'Safety protocols', 'Hazard awareness'],
        icon: 'BookOpen',
        color: ''
    },
    {
        title: 'Hands-On Training',
        about: 'Practical on-site training in dismantling, sorting, testing, and refurbishing electronic equipment with expert instructors.',
        list: ['Device dismantling', 'Component testing', 'Basic repairs'],
        icon: 'Settings',
        color: ''
    },
    {
        title: 'Circular Economy',
        about: 'Learn sustainable business models, resource recovery, and how to create value from electronic waste in a circular economy.',
        list: ['Resource recovery', 'Business models', 'Market opportunities'],
        icon: 'CircleDollarSign',
        color: ''
    }
]

const CurriculumSection = () => {
    return (
        <section id="ourcurriculum" className="py-16 md:py-24 bg-white flex flex-col items-center justify-center gap:16">
            <div>
                <p className='inline-block bg-emerald-100 text-emerald-700 font-semibold px-4 py-2 rounded-full mb-4 text-sm'>Our Curriculum</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4 '>What You'll Learn</h2>
                <p className='text-gray-600 text-lg max-w-2xl mx-auto text-center' >A comprehensive 6-week on-site programme designed to equip you with practical skills and industry knowledge.</p>
            </div>

            {/* Cards */}
            <div className='grid md:grid-cols-3 gap-8 mt-16'>
                {/* Card 1 */}
                <div className='w-85 bg-gray-50 rounded-2xl p-8 border border-emerald-100'>
                    <div className='w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6'>
                        <BookOpen className='text-emerald-700'/>
                    </div>
                    <h3 className='font-bold text-xl text-gray-900 mb-3'>E-Waste Fundamentals</h3>
                    <p className='text-gray-600 text-sm mb-4'>Understanding electronic <br/> components, hazardous materials identification, and safety protocols for handling e-waste.</p>
                    <ul className='space-y-2 text-sm text-gray-500'>
                        <li className='flex items-center gap-2'><Check color='green' size={16}/><p>Component identification</p></li>
                        <li className='flex items-center gap-2'><Check color='green' size={16}/><p>Safety protocols</p></li>
                        <li className='flex items-center gap-2'><Check color='green' size={16}/><p>Hazard awareness</p></li>
                    </ul>
                </div>
                {/* Card 2 */}
                <div className='w-85 bg-gray-50 rounded-2xl p-8 border border-emerald-100'>
                    <div className='w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6'>
                        <Settings className='text-orange-600'/>
                    </div>
                    <h3 className='font-bold text-xl text-gray-900 mb-3'>Hands-On Training</h3>
                    <p className='text-gray-600 text-sm mb-4'>Practical on-site training in <br/> dismantling, sorting, testing, and refurbishing electronic equipment with expert instructors.</p>
                    <ul className='space-y-2 text-sm text-gray-500'>
                        <li className='flex items-center gap-2'><Check color='green' size={16}/><p>Device dismantling</p></li>
                        <li className='flex items-center gap-2'><Check color='green' size={16}/><p>Component testing</p></li>
                        <li className='flex items-center gap-2'><Check color='green' size={16}/><p>Basic repairs</p></li>
                    </ul>
                </div>
                {/* Card 3 */}
                <div className='w-85 bg-green bg-gray-50 rounded-2xl p-8 border border-emerald-100'>
                    <div className='w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-6'>
                        <CircleDollarSign className='text-yellow-600'/>
                    </div>
                    <h3 className='font-bold text-xl text-gray-900 mb-3'>Circular Economy</h3>
                    <p className='text-gray-600 text-sm mb-4'>Learn sustainable business models,<br/> resource recovery, and how to create<br/> value from electronic waste in a circular economy.</p>
                    <ul className='space-y-2 text-sm text-gray-500'>
                        <li className='flex items-center gap-2'><Check color='green' size={16}/> <p>Resource recovery</p></li>
                        <li className='flex items-center gap-2'><Check color='green' size={16}/> <p>Business models</p></li>
                        <li className='flex items-center gap-2'><Check color='green' size={16}/> <p>Market opportunities</p></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default CurriculumSection