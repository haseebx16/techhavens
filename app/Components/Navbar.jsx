"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { font } from './fonts/font';
import AOS from "aos";
import "aos/dist/aos.css";

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    'UI UX Designing',
    'Web Development',
    'App Development',
    'Graphics Designing',
    "Ebook Services",
    "Payment Merchant Services"
  ];

  useEffect(() => {
          AOS.init({
            duration: 1000,
            once: true,
          });
        }, []);

  return (
    <header className={`${font.className} bg-black relative top-0 w-full`}>
      <nav className="max-w-[1400px] mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div data-aos="flip-left" className="flex items-center">
          <Link href="/">
            <img
              src="/logo-new-2.png"
              alt="Logo"
              className="w-48 h-auto"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link data-aos="fade-right" href="/" className="text-white hover:text-cards transition">
            Home
          </Link>

          <div 
            className="relative group" 
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button 
              className="nav-link text-white hover:text-cards flex items-center"
              data-aos="fade-up"
            >
              Services
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isServicesOpen && (
              <div 
                className="absolute top-full left-0 transform bg-white shadow-lg rounded-lg py-2 w-64 z-50 overflow-visible"
                
              >
                {services.map((service, index) => (
                  <Link 
                    key={index} 
                    href={`/services/${service.toLowerCase().replace(/\s+/g, '')}`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-100 hover:text-sky-700"
                    data-aos="fade-down"
                  >
                    {service}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link  data-aos="fade-left" href="/contact" className="text-white hover:text-cards transition">
            Contact Us
          </Link>
        </div>

        {/* Contact Info */}
        <div data-aos="fade-left" className="hidden md:flex items-center text-cards font-bold">
          <a href="mailto:info@techhavenmarketing.com" className="hover:text-white">
            info@techhavenmarketing.com
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black w-full shadow-md">
          <div className="flex flex-col p-4 space-y-4">
            <Link
              href="/"
              className="text-white hover:text-cards transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full text-left flex items-center text-white justify-between"
              >
                Services
                <svg
                  className={`w-4 h-4 transform ${isServicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isServicesOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={`/services/${service.toLowerCase().replace(/\s+/g, '')}`}
                      className="block py-1 text-sm text-cards hover:text-sky-700"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="text-white hover:text-cards transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>

            <a
              href="mailto:info@techhavenmarketing.com"
              className="text-cards font-bold hover:text-white"
            >
              info@techhavenmarketing.com
            </a>
          </div>
        </div>
      )}
    </header>
  );
}