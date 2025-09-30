import React from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'

function Home() {
  return (
    <div className='min-h-screen'>
      <NavBar />
      <HeroSection />
      <AboutSection />
    </div>
    
  )
}

export default Home