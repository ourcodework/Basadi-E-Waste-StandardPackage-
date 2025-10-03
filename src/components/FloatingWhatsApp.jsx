import React from 'react'
import { FaWhatsapp } from "react-icons/fa";

function FloatingWhatsApp() {
    const phoneNumber = "27713132387";
    const message = "Hi, testing whats app feature!";
    return (
        <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
        >
            <FaWhatsapp size={30} />
        </a>
    )
}

export default FloatingWhatsApp