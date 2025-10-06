import React, { useRef, useState } from 'react'

import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import Spinner from './Spinner';
import { useNavigate } from 'react-router-dom';


const Contact = () => {

    const form = useRef(null);
    const [loading, setLoading] = useState(false);


    const sendEmail = async (e) => {
        e.preventDefault();
        setLoading(true)

        try {
          const result = await emailjs.sendForm(
            "service_m4gq0hc",
            "template_6nwj3cb",
            form.current,
            "cJhSSHHLWHRMD8rNU"
          );
          console.log(result.text);
          toast.success("Message sent successfully!");
          } catch (error) {
          console.error("Email sending error:", error);
          toast.error("Failed to send message. Please try again.");
        }
        finally{
            setLoading(false)
        }
    }

  return (
    <section id="contact" className="py-20 bg-dark">
    <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center gradient-text">Get In Touch</h2>
        
        <div className="flex flex-col md:flex-row gap-12">
            <ContactInfo />
            {loading ? <Spinner /> : <ContactForm form={form} sendEmail={sendEmail}/>
            
        }
            
        </div>
    </div>
  </section>
  )
}

export default Contact