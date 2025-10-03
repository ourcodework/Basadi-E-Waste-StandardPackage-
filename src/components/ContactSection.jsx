import React from 'react'
import { Mail, Phone, MapPin } from "lucide-react";

function ContactSection() {
    return (
        <section id="contact" className="py-20 bg-white/80">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        Ready to Make an <span className="text-[#16A249]">Impact</span>?
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Join us in building a sustainable future. Whether you're a business, community organization,
                        or individual, we'd love to hear from you.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Contact Info */}
                    <div className="lg:col-span-1">
                        <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-[#16A249]/10 rounded-lg flex items-center justify-center">
                                    <Mail className="text-[#16A249]" size={20} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground">Email</h4>
                                    <p className="text-gray-500">info@basadiewaste.co.za</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-[#2FC1B2]/10 rounded-lg flex items-center justify-center">
                                    <Phone className="text-[#2FC1B2]" size={20} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground">Phone</h4>
                                    <p className="text-gray-500">+27 11 123 4567</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-[#16A249]/10 rounded-lg flex items-center justify-center">
                                    <MapPin className="text-[#16A249]" size={20} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground">Location</h4>
                                    <p className="text-gray-500">Pretoria, South Africa</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 p-6 bg-[#16A249]/5 rounded-xl">
                            <h4 className="font-bold text-foreground mb-2">Ready to Partner?</h4>
                            <p className="text-sm text-gray-500 mb-4">
                                Schedule a consultation to explore how we can work together for a sustainable future.
                            </p>
                            {/* <button size="sm" variant="default" className="w-full">
                                Schedule Meeting
                            </button> */}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="rounded-lg border border-gray-200 p-8 bg-white/90 shadow-medium">
                            <h3 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>

                            <form className="space-y-6" autoComplete='on'>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2" for="fname">
                                            First Name
                                        </label>
                                        <input
                                            id='fname'
                                            name='fname'
                                            type='text'
                                            className='h-10 w-full rounded-md border border-gray-200 px-3 py-2 focus-visible:ring-2'
                                            placeholder="Your first name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2" for="lname">
                                            Last Name
                                        </label>
                                        <input
                                            id='lname'
                                            name='lname'
                                            type='text'
                                            className='h-10 w-full rounded-md border border-gray-200 px-3 py-2 '
                                            placeholder="Your last name"
                                        />
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2" for="email">
                                            Email
                                        </label>
                                        <input
                                            id='email'
                                            name='email'
                                            className='h-10 w-full rounded-md border border-gray-200 px-3 py-2 '
                                            type="email"
                                            placeholder="your@email.com" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2" for="company">
                                            Organization
                                        </label>
                                        <input
                                            id='company'
                                            name='company'
                                            type='company'
                                            className='h-10 w-full rounded-md border border-gray-200 px-3 py-2 '
                                            placeholder="Your organization" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2" for="message">
                                        How can we help you?
                                    </label>
                                    <textarea
                                        id='message'
                                        name='message'
                                        className='min-h-[80px] w-full rounded-md border border-gray-200 px-3 py-2 '
                                        placeholder="Tell us about your project or how you'd like to collaborate..."
                                        rows={6}
                                    />
                                </div>

                                <button className="h-11 rounded-md px-8 w-full bg-[#16A249] hover:bg-[#16A249]/90 text-white font-medium">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection