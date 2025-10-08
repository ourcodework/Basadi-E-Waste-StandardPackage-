import React from 'react'
import { Recycle, Lightbulb, Users, Leaf,Trash2 } from "lucide-react";

function ServiceSection() {
    const services = [
        {
            icon: Recycle,
            title: "E-Waste Collection & Processing",
            description: "Comprehensive electronic waste collection and safe processing using advanced recycling technologies.",
            features: ["Door-to-door collection", "Certified data destruction", "Material recovery"]
        },
        {
            icon: Lightbulb,
            title: "Innovation & R&D",
            description: "Pioneering research and development in sustainable e-waste processing and circular economy solutions.",
            features: ["Technology development", "Process optimization", "Patent development"]
        },
        {
            icon: Users,
            title: "Community Empowerment",
            description: "Training and empowering local communities, especially women, in green technology and sustainable practices.",
            features: ["Skills training", "Job creation", "Community programs"]
        },
        {
            icon: Leaf,
            title: "Sustainability Consulting",
            description: "Expert consulting services to help businesses implement sustainable e-waste management practices.",
            features: ["Sustainability audits", "Implementation planning", "Compliance support"]
        },
        {
            icon: Trash2,
            title: "General Waste Management and Recycling",
            description: "Comprehensive waste management solutions for businesses and communities, promoting circular economy practices.",
            features: ["Waste collection services", "Sorting and processing", "Recycling solutions"]
        }
    ];

    return (
        <section id="services" className="py-20 bg-white/80">
            {/* Meta tags for SEO optimization */}
            <div>
                <meta title="Basadi E-Waste | Service" />
                <meta description="Explore our e-waste recycling services: collection, drop-off recycling centers, and corporate disposal programs across South Africa." />
                <meta keywords="Basadi e-waste services, electronics, waste recycling South Africa, disposal programs" />
                <meta canonical="https://www.basadiewaste.co.za/#service" />
            </div>
            <div className="container mx-auto px-4 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        Our <span className="text-[#16A249]">Services</span>
                    </h2>
                    <p className="text-xl text-gray-500 max-w-3xl mx-auto">
                        Comprehensive e-waste solutions that create value, protect the environment,
                        and empower communities across Africa.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="rounded-lg border border-gray-200 bg-white shadow p-8 bg-card-gradient hover:shadow-green-200 transition-smooth group">
                            <div className="mb-6">
                                <div className="w-16 h-16 bg-[#16A249]/10 rounded-xl flex items-center justify-center group-hover:bg-[#16A249] group-hover:text-primary-foreground transition-smooth">
                                    <service.icon size={32} className="text-[#16A249] group-hover:text-white/90 transition-smooth" />
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-foreground mb-4">
                                {service.title}
                            </h3>

                            <p className="text-gray-500 mb-6 leading-relaxed">
                                {service.description}
                            </p>

                            <ul className="space-y-2 mb-6">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-sm text-gray-500">
                                        <div className="w-2 h-2 bg-[#2FC1B2] rounded-full mr-3" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServiceSection