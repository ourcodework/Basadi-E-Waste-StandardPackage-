import React from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ServiceSection from '../components/ServiceSection'
import ReviewSection from '../components/ReviewSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import TeamSection from '../components/TeamSection'

function Home() {
  return (
    <main className='min-h-screen'>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <TeamSection />
      <ServiceSection />
      <ReviewSection />
      <ContactSection />
      <FloatingWhatsApp />
      <Footer />
    </main>
    
  )
}

export default Home