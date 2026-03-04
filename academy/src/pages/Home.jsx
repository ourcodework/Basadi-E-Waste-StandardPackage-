import React from 'react'
import HeroSection from '../components/HeroSection'
import CurriculumSection from '../components/CurriculumSection'
import Impact from '../components/Impact'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import AchievementSection from '../components/AchievementSection'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <main className='min-h-screen'>
        <Navbar />
        <HeroSection />
        <CurriculumSection />
        <Impact />
        <Contact />
        <AchievementSection />
        <Footer />
    </main>
  )
}

export default Home