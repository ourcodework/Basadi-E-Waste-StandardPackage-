import React from 'react'
import HeroSection from '../components/HeroSection'
import CurriculumSection from '../components/CurriculumSection'
import Impact from '../components/Impact'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <main className='min-h-screen'>
        <HeroSection />
        <CurriculumSection />
        <Impact />
        <Contact />
    </main>
  )
}

export default Home