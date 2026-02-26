import React from 'react'
import HeroSection from '../components/HeroSection'
import CurriculumSection from '../components/CurriculumSection'
import Impact from '../components/Impact'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <main className='min-h-screen'>
        <HeroSection />
        <CurriculumSection />
        <Impact />
        <Contact />
        <Footer />
    </main>
  )
}

export default Home