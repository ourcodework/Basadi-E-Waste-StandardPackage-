import React from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ServiceSection from '../components/ServiceSection'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className='min-h-screen'>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <Footer />
    </div>
    
  )
}

export default Home