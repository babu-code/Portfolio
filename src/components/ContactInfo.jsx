import React from 'react'
import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa'

const ContactInfo = () => {
  return (
    <div className="w-full md:w-1/2">
    <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
    <p className="text-gray-300 mb-6">
        Feel free to reach out to me for any questions or opportunities. I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
    </p>
    
    <div className="space-y-4">
        <div className="flex items-start">
            <i className="fas fa-envelope text-primary mt-1 mr-4"></i>
            <FaEnvelope className='text-primary mt-1 mr-4'/>
            <div>
                <h4 className="font-bold text-white">Email</h4>
                <a href="mailto:tonnieblair12@gmail.com" className="text-gray-300 hover:text-primary transition">tonnieblair12@gmail.com</a>
            </div>
        </div>
        <div className="flex items-start">
            <i className="fas fa-phone text-primary mt-1 mr-4"></i>
            <FaPhone className='text-primary mt-1 mr-4'/>
            <div>
                <h4 className="font-bold text-white">Phone</h4>
                <a href="tel:+254716241697" className="text-gray-300 hover:text-primary transition">+254 716 241 697</a>
            </div>
        </div>
        <div className="flex items-start">
            <i className="fab fa-whatsapp text-primary mt-1 mr-4"></i>
            <FaWhatsapp className='text-primary mt-1 mr-4' />
            <div>
                <h4 className="font-bold text-white">WhatsApp</h4>
                <a href="https://wa.me/254716241697" target="_blank" className="text-gray-300 hover:text-primary transition">Chat on WhatsApp</a>
            </div>
        </div>
    </div>
</div>
  )
}

export default ContactInfo