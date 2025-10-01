import React from 'react'
import { Quote } from "lucide-react"

function ReviewSection() {
    const reviews = [
        {
            text: "Basadi E-Waste has completely transformed how we handle our electronic waste. Their collection service is reliable, and we feel confident knowing our data is securely destroyed.",
            author: "Corporate Client",
        },
        {
            text: "Thanks to Basadi E-Waste, we no longer worry about sensitive data on old devices. Their data destruction and sanitization services are trustworthy and thorough.",
            author: "Business Partner",
        },
    ];

    return (
        <section id="reviews" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-foreground mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        Trusted by businesses across Africa for secure and sustainable e-waste solutions
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-white/90 border border-gray-200 rounded-lg shadow-soft hover:shadow-medium transition-all">
                            <div className="p-8">
                                <Quote className="w-10 h-10 text-[#16A249] mb-4" />
                                <p className="text-card-foreground text-lg mb-6 italic">
                                    "{review.text}"
                                </p>
                                <p className="text-gray-500 font-medium">
                                    — {review.author}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ReviewSection