import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../../../main-site/src/assets/images/Basadi-E-Waste-Logo.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleApplyClick = () => {
        window.open('https://forms.gle/oC14AVef983xpTLf8', '_blank');
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#D9EBE9]">
            <div className="container mx-auto px-6 py-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <img src={logo} width={100} height={100} alt="OurCode Logo" />
                        {/* <h1 className='font-bold text-2xl text-[#3BA2A7]'>Academy</h1> */}
                    </div>

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center gap-8">
                        <button
                            onClick={() => scrollToSection('home')}
                            className="font-inter font-medium text-foreground hover:text-[#3BA2A7] transition-colors"
                        >
                            Home
                        </button>
                        <button
                            onClick={() => scrollToSection('about')}
                            className="font-inter font-medium text-foreground hover:text-[#3BA2A7] transition-colors"
                        >
                            Curriculum
                        </button>
                        <button
                            onClick={() => scrollToSection('programs')}
                            className="font-inter font-medium text-foreground hover:text-[#3BA2A7] transition-colors"
                        >
                            Impact
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="font-inter font-medium text-foreground hover:text-[#3BA2A7] transition-colors"
                        >
                            Contact
                        </button>
                    </div>

                    {/* Apply button */}
                    <button
                        onClick={handleApplyClick}
                        className="hidden md:flex bg-[#16A249] hover:bg-[#16A249]/80 text-white/95 font-poppins font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:shadow-glow"
                    >
                        Apply Now
                    </button>

                    {/* mobile button */}
                    <div className="md:hidden">
                        {/* <ThemeToggle /> */}
                        <button
                            size="icon"
                            onClick={() => setIsOpen(!isOpen)}
                            data-testid="button-mobile-menu"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden border-t bg-background">
                    <div className="px-4 py-3 space-y-1">
                        <button
                            className="w-full justify-start hover:text-[rgb(53,162,161)] transition-colors duration-300"
                            onClick={() => scrollToSection("home")}
                            data-testid="mobile-link-about"
                        >
                            Home
                        </button>
                        <button
                            className="w-full justify-start hover:text-[rgb(53,162,161)] transition-colors duration-300"
                            onClick={() => scrollToSection("ourcurriculum")}
                            data-testid="mobile-link-services"
                        >
                            Curriculum
                        </button>
                        <button
                            className="w-full justify-start hover:text-[rgb(53,162,161)] transition-colors duration-300"
                            onClick={() => scrollToSection("ourimpact")}
                            data-testid="mobile-link-portfolio"
                        >
                            Impact
                        </button>
                        <button
                            className="w-full justify-start hover:text-[rgb(53,162,161)] transition-colors duration-300"
                            onClick={() => scrollToSection("contact")}
                            data-testid="mobile-link-contact"
                        >
                            Contact
                        </button>
                        {/* Apply button */}
                        <div className='flex justify-center py-2'>
                            <button
                                onClick={handleApplyClick}
                                className="bg-[#16A249] hover:bg-[#16A249]/80 text-white/95 font-poppins font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:shadow-glow"
                            >
                                Apply Now
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar