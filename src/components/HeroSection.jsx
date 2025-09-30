import React from 'react'

function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden">
            {/* Background Image Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-20"
                // style={{ backgroundImage: `url(${heroImage})` }}
            />

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl">
                    <h1 className="text-5xl md:text-7xl font-bold text-[#FAFAFA] mb-6 leading-tight">
                        Welcome to<br />
                        <span className="text-[#2FC1B2]">Basadi E-WASTE</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-[#FAFAFA]/90 mb-4 font-medium">
                        Innovating for Impact. Recycling for a Better Tomorrow.
                    </p>

                    <p className="text-lg text-[#FAFAFA]/80 mb-8 max-w-2xl leading-relaxed">
                        At Basadi E-WASTE, we go beyond recycling — we innovate, empower, and transform.
                        Led by women, inspired by change, and driven by a bold vision for a cleaner, smarter Africa.
                    </p>

                    <p className="text-lg text-[#FAFAFA]/80 mb-12 max-w-2xl leading-relaxed">
                        Innovation meets sustainability as we turn electronic waste into new opportunities,
                        green jobs, and a thriving circular economy. Join us on the journey to power progress — responsibly.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold">
                            Learn Our Impact
                        </button>
                        <button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold">
                            Partner With Us
                        </button>
                    </div>

                    <p className="text-accent font-bold text-lg mt-8">
                        Because the future is female, and the future is now.
                    </p>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/4 right-10 w-32 h-32 rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute bottom-1/4 left-10 w-40 h-40 rounded-full bg-primary-foreground/10 blur-3xl" />
        </section>
    )
}

export default HeroSection