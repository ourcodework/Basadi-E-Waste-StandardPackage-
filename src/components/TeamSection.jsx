import React from 'react'
import { Users } from "lucide-react";
import founderImage from '../assets/images/founder.png'

function TeamSection() {
    const teamMembers = [
        {
            image: "",
            name: "Kgothatso Ndema",
            role: "Founder & Director",
            description: "Vision & Strategy",
        },
        {
            image: "",
            name: "Kagiso Maphatane",
            role: "Operations Manager",
            description: "Day-to-day operations & recycling processes",
        },
        {
            image: "",
            name: "Goitsemang Maphosa",
            role: "Senior Administrator",
            description: "Organizational & administrative support",
        },
    ];

    return (
        <section id="team" className="py-20 bg-[#F6FBF6]/95">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="flex justify-center mb-4">
                        <Users className="w-12 h-12 text-[#16A249]" />
                    </div>
                    <h2 className="text-4xl font-bold text-foreground mb-4">Our <span className='text-[#16A249]'>Team</span></h2>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        Meet the passionate women leading the change in e-waste management
                    </p>
                </div>
                <div className="grid lg:grid-cols-2 gap-28 items-center">
                    <div>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                            Founded by <span className="font-semibold text-[#16A249]">Kgothatso Ndema</span>, a visionary woman from the township who saw potential where others saw waste, Basadi E-Waste was born out of determination, purpose, and a deep love for the planet. With limited resources but boundless drive, she set out to prove that electronic waste could become a source of both environmental restoration and economic empowerment.
                        </p>

                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                            Her passion lies in transforming challenges into opportunities, turning discarded plastics into high-quality raw materials and innovating sustainable solutions such as digital crutches. Through Basadi E-Waste, she continues to advocate for responsible e-waste disposal while creating pathways for women and youth to participate in the green economy.
                        </p>

                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            At its heart, Basadi E-Waste is more than a recycling initiative; it's a movement. One that protects the environment, sparks innovation, and empowers communities to see value where others see loss.
                        </p>
                    </div>

                    <div className="relative flex justify-center">
                        <div className='flex flex-col items-center justify-center gap-4'>
                            <img
                                src={founderImage}
                                alt="Kgothatso Ndema, Founder of Basadi E-Waste"
                                className="rounded-full shadow-strong w-96 h-96 object-cover"
                            />
                            <div className='flex flex-col gap-2'>
                                <h3 className='font-bold'>Kgothatso Ndema</h3>
                                <p className='font-medium'>Founder & Director</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="text-center mb-12">
                    <div className="flex justify-center mb-4">
                        <Users className="w-12 h-12 text-[#16A249]" />
                    </div>
                    <h2 className="text-4xl font-bold text-foreground mb-4">Our Team</h2>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        Meet the passionate women leading the change in e-waste management
                    </p>
                </div> */}

                {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-lg shadow-soft hover:shadow-medium transition-all"
                        >
                            <div className='flex items-center justify-center py-4'>
                                <img
                                    src={member.image}
                                    alt="Team Image"
                                    className="w-72 h-48 bg-green-600 shadow-strong"
                                />
                            </div>
                            <div className='flex justify-center'>
                                <div className="text-xl text-card-foreground font-semibold">
                                    {member.name}
                                </div>
                            </div>
                            <div className='text-center py-4'>
                                <p className="text-[#16A249] font-semibold mb-2">{member.role}</p>
                                <p className="text-gray-500 text-sm">
                                    {member.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div> */}
            </div>
        </section>
    )
}

export default TeamSection