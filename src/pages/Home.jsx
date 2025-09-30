import React from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className='min-h-screen'>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <Footer />
    </div>
    
  )
}

export default Home