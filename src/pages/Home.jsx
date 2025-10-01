import React from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ServiceSection from '../components/ServiceSection'
import ReviewSection from '../components/ReviewSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className='min-h-screen'>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ReviewSection />
      <ContactSection />
      <Footer />
    </div>
    
  )
}

export default Home