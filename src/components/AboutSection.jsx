import React from 'react'
import founderImage from '../assets/images/founder.png'

function AboutSection() {
  return (
    <section id="about" className="py-20  bg-[#EEF5F2]">
      {/* Meta tags for SEO optimization */}
      <div>
        <meta title="Basadi E-Waste | About" />
        <meta description="Learn more about Basadi Ewaste, South Africa's trusted partner in electronic waste recycling and eco-friendly disposal." />
        <meta keywords="about e-waste recycling, GreenTech South Africa, electronics disposal" />
        <meta canonical="https://www.basadiewaste.co.za/#about" />
      </div>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Empowering <span className="text-[#16A249]">Women</span>,<br />
              Transforming <span className="text-[#2FC1B2]">Africa</span>
            </h2>

            <p className="text-lg text-[#64748B] mb-6 leading-relaxed">
              At Basadi E-WASTE, we believe that sustainable innovation comes from diverse perspectives.
              Our women-led team combines technical expertise with deep community understanding to create
              solutions that work for real people.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="rounded-lg p-6 bg-[#FBFCFB] shadow-soft hover:shadow-medium transition-smooth">
                <h3 className="font-semibold text-[#16A249] mb-2">Women-Led Innovation</h3>
                <p className="text-sm text-[#64748B]">
                  Pioneering sustainable solutions with female leadership at every level
                </p>
              </div>

              <div className="rounded-lg p-6 bg-[#FBFCFB] shadow-soft hover:shadow-medium transition-smooth">
                <h3 className="font-semibold text-[#2FC1B2] mb-2">African Focus</h3>
                <p className="text-sm text-[#64748B]">
                  Tailored solutions for African communities and environmental challenges
                </p>
              </div>

              <div className="rounded-lg p-6 bg-[#FBFCFB] shadow-soft hover:shadow-medium transition-smooth">
                <h3 className="font-semibold text-[#16A249] mb-2">Circular Economy</h3>
                <p className="text-sm text-[#64748B]">
                  Creating closed-loop systems that benefit communities and environment
                </p>
              </div>

              <div className="rounded-lg p-6 bg-[#FBFCFB] shadow-soft hover:shadow-medium transition-smooth">
                <h3 className="font-semibold text-[#2FC1B2] mb-2">Green Jobs</h3>
                <p className="text-sm text-[#64748B]">
                  Generating sustainable employment opportunities in the green economy
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-end ">
            <img
              src={founderImage}
              alt="Basadi E-WASTE team collaboration"
              className="w-96 shadow-strong border-4 border-green-500 rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection