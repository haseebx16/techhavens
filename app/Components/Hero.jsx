'use client';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { font } from './fonts/font';
import ParticlesCX from './Particles';
import { useEffect } from 'react';
import AOS from "aos"
import ContactModal from './ContactModal';
import "aos/dist/aos.css"

export default function Hero() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [error, setError] = useState('');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullName, email, phone, message } = formData;

    // Validate required fields
    if (!fullName || !email || !phone || !message) {
      setError('All fields are required.');
      return;
    }

    // Reset error state
    setError('');

    // Send email using EmailJS
    emailjs
      .send(
        'service_r0ex0cl', // Replace with your service ID
        'template_4vtfjk5', // Replace with your template ID
        {
          to_email: 'support@amazonlegacypress.com',
          from_name: fullName,
          from_email: email,
          phone,
          message,
        },
        'TihDoLxcsdR_sDnwT' // Replace with your EmailJS user ID
      )
      .then(() => {
        alert('Your message has been sent successfully!');
        setFormData({ fullName: '', email: '', phone: '', message: '' }); // Reset form fields
      })
      .catch((err) => {
        setError('Failed to send your message. Please try again later.');
        console.error('EmailJS Error:', err);
      });
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

  return (
    <section className={`${font.className} relative bg-black min-h-screen p-12 overflow-hidden`}>
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <ParticlesCX className="absolute inset-0 w-full h-full" />
        </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="text-white max-w-2xl">
            <h2 data-aos="fade-down" className="font-oswald text-lg md:text-xl mb-4 text-cards uppercase font-medium tracking-wider">
              Tech Haven - Crafting Excellence, Providing Growth
            </h2>
            <h1 data-aos="fade-up" className="font-oswald text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-wide">
              YOUR PATHWAY TO TURNING LITERARY DREAMS INTO REALITY
            </h1>
            <button onClick={openModal} data-aos="fade-right" className="btn-primary hover:text-white hover:bg-card1 bg-cards text-black text-lg uppercase tracking-wider">
              DISCOVER MORE
            </button>
            <ContactModal isOpen={isModalOpen} onClose={closeModal} />
          </div>

          {/* Contact Form */}
          <div data-aos="fade-left" className="bg-gray-800/80 hidden md:block p-8 rounded-lg w-full max-w-md">
            <h3 className="font-oswald text-2xl text-white font-bold mb-6 text-center">Let's Get Started</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="form-input"
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              />
              <input
                type="email"
                placeholder="Your Email"
                className="form-input"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="form-input"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
              <textarea
                placeholder="Message"
                rows="4"
                className="form-input"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
              <button
                type="submit"
                className="btn-primary bg-cards hover:text-white hover:bg-card1 text-black w-full uppercase tracking-wider"
              >
                SEND MESSAGE
              </button>
            </form>
        <p className='text-white mt-4'><span className="text-cards pt-4">Disclaimer:</span> By providing a telephone number and submitting the form you are consenting to be contacted by SMS text message . Message and data rates may apply. Reply STOP to opt out of further messaging. Visit <a href='/privacypolicy' className='text-cards underline'>Privacy Policy Page</a> for further knowledge.</p>

          </div>
        </div>
      </div>
    </section>
  );
}
