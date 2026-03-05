import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {

    // const [formData, setFormData] = useState({
    //     name: "",
    //     email: "",
    //     message: "",
    // });
    // const [isSubmitting, setIsSubmitting] = useState(false);

    // function for sending email using web3form
    // const onSubmit = async (event) => {
    //     event.preventDefault();

    //     const formData = new FormData(event.target);
    //     formData.append("access_key", "3a62feba-4873-4f4f-99f5-6cf10ef737fc");

    //     try {
    //         const response = await fetch("https://api.web3forms.com/submit", {
    //             method: "POST",
    //             body: formData
    //         });

    //         const data = await response.json();

    //         if (data.success) {
    //             toast.success("Message Sent");
    //             event.target.reset();
    //         } else {
    //             console.log("Error", data);
    //         }
    //     } catch (error) {
    //         console.log("Network error - please try again later.");
    //     }
    // };

    const handleApplyClick = () => {
        window.open('https://forms.gle/oC14AVef983xpTLf8', '_blank');
    };

    return (
        <section id="contact" className="py-16 md:py-32 bg-white flex flex-col items-center justify-center gap:16">
            <div className='max-w-4xl mx-auto px-6'>
                <div className='text-center mb-10'>
                    <span className='inline-block bg-emerald-100 text-emerald-700 font-semibold px-4 py-2 rounded-full text-sm mb-4'>Join Us</span>
                    <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>Apply for the Programme</h2>
                    <p className='text-gray-600 text-lg'>Take the first step towards a sustainable career in e-waste management. On-site training</p>
                </div>
                {/* Apply button */}
                <div className='flex items-center justify-center my-16'>
                    <button
                        onClick={handleApplyClick}
                        className="bg-[#16A249] hover:bg-[#16A249]/80 text-white/95 font-poppins font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:shadow-glow"
                    >
                        Apply Now
                    </button>
                </div>
                <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <div className="text-center text-white">
                        <div className="w-14 h-14 bg-[#16A249] rounded-full flex items-center justify-center mx-auto mb-4">
                            <Mail className="w-6 h-6" />
                        </div>
                        <h3 className="font-poppins font-semibold text-lg mb-2 text-[#16A249]">Email</h3>
                        <p className="font-inter text-gray-500">training@basadiewaste.co.za</p>
                    </div>

                    <div className="text-center text-white">
                        <div className="w-14 h-14 bg-[#16A249] rounded-full flex items-center justify-center mx-auto mb-4">
                            <Phone className="w-6 h-6" />
                        </div>
                        <h3 className="font-poppins font-semibold text-lg mb-2 text-[#16A249]">Phone</h3>
                        <p className="font-inter text-gray-500">+27 81 784 9994</p>
                    </div>

                    <div className="text-center text-white">
                        <div className="w-14 h-14 bg-[#16A249] rounded-full flex items-center justify-center mx-auto mb-4">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <h3 className="font-poppins font-semibold text-lg mb-2 text-[#16A249]">Location</h3>
                        <p className="font-inter text-gray-500">Block K soshanguve, near power station and BP garage</p>
                    </div>
                </div>
                {/* <div className='bg-emerald-50/50 rounded-3xl p-8 md:-12 shadow-xl border border-emerald-100 '>
                    <div className='text-center mb-10'>
                        <span className='inline-block bg-emerald-100 text-emerald-700 font-semibold px-4 py-2 rounded-full text-sm mb-4'>Join Us</span>
                        <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>Apply for the Programme</h2>
                        <p className='text-gray-600 text-lg'>Take the first step towards a sustainable career in e-waste management. On-site training</p>
                    </div>
                    <form onSubmit={onSubmit} autoComplete='on' className='space-y-6'>
                        <div className='grid md:grid-cols-2 gap-6'>
                            <div>
                                <label htmlFor="name" className='block text-sm font-semibold text-gray-700 mb-2'>Full Name</label>
                                <input
                                    type="text"
                                    id='name'
                                    name='name'
                                    className='w-full px-4 py-3 rounded-xl bg-white border-2 border-[#e2e8f0] outline-none'
                                    placeholder='Enter your full name'
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="contact_number" className='block text-sm font-semibold text-gray-700 mb-2'>Contact Number</label>
                                <input
                                    type="tel"
                                    id='contact_number'
                                    name='contact_number'
                                    className='w-full px-4 py-3 rounded-xl bg-white  border-2 border-[#e2e8f0] outline-none'
                                    placeholder='Enter your full name'
                                    required
                                />
                            </div>
                        </div>
                        <div className='grid md:grid-cols-2 gap-6'>
                            <div>
                                <label htmlFor="email" className='block text-sm font-semibold text-gray-700 mb-2'>Email Address</label>
                                <input
                                    type="email"
                                    id='email'
                                    name='email'
                                    className='w-full px-4 py-3 rounded-xl bg-white  border-2 border-[#e2e8f0] outline-none'
                                    placeholder='your.email@example.com'
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="location" className='block text-sm font-semibold text-gray-700 mb-2'>Location</label>
                                <input
                                    type="text"
                                    id='location'
                                    name='location'
                                    className='w-full px-4 py-3 rounded-xl bg-white  border-2 border-[#e2e8f0] outline-none'
                                    placeholder='City / Township'
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="message" className='block text-sm font-semibold text-gray-700 mb-2'>Why are you interested in this programme?</label>
                            <textarea
                                type="text"
                                id='message'
                                name='message'
                                rows="4"
                                className='w-full px-4 py-3 rounded-xl bg-white  border-2 border-[#e2e8f0] outline-none resize-none'
                                placeholder='Tell us about your interest in e-waste management and what you hope to achieve...'
                                required
                            ></textarea>
                        </div>
                        <div className='pt-4'>
                            <button type="submit" id='submit-btn' className='w-full bg-green-700 text-white font-semibold px-8 py-4 rounded-xl text-lg shadow-lg flex items-center justify-center gap-3 '>
                                <span>Submit Application</span>
                            </button>
                        </div>
                    </form>
                </div> */}
            </div>
        </section>
    )
}

export default Contact