import React from 'react'

const ContactForm = ({form, sendEmail}) => {
  return (
    <div className="w-full md:w-1/2">
    <form className="space-y-6" ref={form} onSubmit={sendEmail}>
        <div className="relative">
            <input type="text" id="name" name="from_name" className="form-input w-full bg-darker border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none" placeholder=" " required />
            <label htmlFor="name" className="floating-label text-gray-400">Your Name</label>
        </div>
        <div className="relative">
            <input type="email" id="email" name="from_email" className="form-input w-full bg-darker border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none" placeholder=" " required />
            <label htmlFor="email" className="floating-label text-gray-400">Your Email</label>
        </div>
        <div className="relative">
            <input type="text" id="subject" name='subject' className="form-input w-full bg-darker border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none" placeholder=" " required />
            <label htmlFor="subject" className="floating-label text-gray-400">Subject</label>
        </div>
        <div className="relative">
            <textarea id="message"  name="message" rows="4" className="form-input w-full bg-darker border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none" placeholder=" " required ></textarea>
            <label htmlFor="message" className="floating-label text-gray-400">Your Message</label>
        </div>
        <button type="submit" className="btn-glow px-8 py-3 rounded-full gradient-bg text-black font-bold relative overflow-hidden w-full">
            <span className="relative z-10">Send Message</span>
        </button>
    </form>
</div>
  )
}

export default ContactForm