import React, { useState } from 'react'
import { Mail, Phone, MapPin } from "lucide-react";
import { ToastContainer, toast } from 'react-toastify';

function ContactSection() {

    const onSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        formData.append("access_key", "d9976922-c41d-440a-adbd-624e9448ec3c");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                toast.success("Message Sent");
                event.target.reset();
            } else {
                console.log("Error", data);
            }
        } catch (error) {
            console.log("Network error - please try again later.");
        }
    };

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
                                    <p className="text-gray-500">+27 12 881 6988</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-[#16A249]/10 rounded-lg flex items-center justify-center">
                                    <MapPin className="text-[#16A249]" size={20} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground">Location</h4>
                                    <p className="text-gray-500 w-70">TUT soshanguve campus, corner Aubrey Matlakala and college rd, Soshanguve, Block K, Pretoria 0152</p>
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

                            <form className="space-y-6" onSubmit={onSubmit} autoComplete='on'>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2" htmlFor="firstName">
                                            First Name
                                        </label>
                                        <input
                                            id='firstName'
                                            name='firstName'
                                            type='text'
                                            className='h-10 w-full rounded-md border border-gray-200 px-3 py-2 focus-visible:ring-2'
                                            placeholder="Your first name"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2" htmlFor="lastName">
                                            Last Name
                                        </label>
                                        <input
                                            id='lastName'
                                            name='lastName'
                                            type='text'
                                            className='h-10 w-full rounded-md border border-gray-200 px-3 py-2 '
                                            placeholder="Your last name"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2" htmlFor="email">
                                            Email
                                        </label>
                                        <input
                                            id='email'
                                            name='email'
                                            className='h-10 w-full rounded-md border border-gray-200 px-3 py-2 '
                                            type="email"
                                            placeholder="your@email.com"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2" htmlFor="company">
                                            Organization
                                        </label>
                                        <input
                                            id='company'
                                            name='company'
                                            type='company'
                                            className='h-10 w-full rounded-md border border-gray-200 px-3 py-2 '
                                            placeholder="Your organization"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2" htmlFor="message">
                                        How can we help you?
                                    </label>
                                    <textarea
                                        id='message'
                                        name='message'
                                        className='min-h-[80px] w-full rounded-md border border-gray-200 px-3 py-2 '
                                        placeholder="Tell us about your project or how you'd like to collaborate..."
                                        rows={6}
                                        required
                                    />
                                </div>

                                <button
                                    type='submit'
                                    className="h-11 rounded-md px-8 w-full bg-[#16A249] hover:bg-[#16A249]/90 text-white font-medium"
                                >
                                   Send Message
                                </button>
                                {/* <div className='flex items-center justify-center'>
                                    {result}
                                </div> */}
                                <ToastContainer position="bottom-center" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection