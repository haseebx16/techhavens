"use client";

import Link from 'next/link';
import Image from 'next/image';
import { font } from './fonts/font';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    'UI/UX Designing',
    'Web Development',
    'App Development',
    'Graphics Designing',
  ];

  return (
    <header className={`${font.className} bg-customBlue shadow-md relative top-0 z-50`}>
      <nav className="max-w-[1400px] mx-auto px-2">
        <div className="flex items-center">
          {/* Logo - Left */}
          <div className="w-1/4 p-6">
            <Link href="/" className="font-oswald text-2xl font-bold text-sky-700">
              <span className="flex items-center">
                <img src='/header.png' style={{ width: "300px", height: "60px" }}/>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex justify-center w-2/4">
            <div className="flex space-x-6">
              <Link href="/" className="nav-link text-cards">
                Home
              </Link>
              {/* <Link href="/about" className="nav-link hover:text-cyan-500">
                About Us
              </Link> */}
              <div className="relative group">
                <button 
                  className="nav-link text-white hover:text-cards flex items-center"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  Services
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isServicesOpen && (
                  <div 
                    className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg py-2 w-64 z-50"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    {services.map((service, index) => (
                      <Link 
                        key={index} 
                        href={`/services/${service.toLowerCase().replace(/\s+/g, '')}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-100 hover:text-sky-700"
                      >
                        {service}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              {/* <Link href="/testimonials" className="nav-link hover:text-cyan-500">
                Testimonials
              </Link>
              <Link href="/portfolio" className="nav-link hover:text-cyan-500">
                Portfolio
              </Link> */}
              <Link href="/contact" className="nav-link text-white hover:text-cards">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Phone Number - Right */}
          <div className="hidden md:flex w-1/4 justify-end">
            <a className="font-oswald text-cards font-bold whitespace-nowrap">
              info@techhaven.com
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden text-cards ml-auto">
            <button 
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden absolute top-full left-0 right-0 bg-customBlue shadow-md`}>
          <div className="flex flex-col p-4 space-y-4">
            <Link href="/" className="nav-link text-cards">
              Home
            </Link>
            {/* <Link href="/about" className="nav-link">
              About Us
            </Link> */}
            <div>
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="nav-link w-full text-left flex items-center text-white justify-between"
              >
                Services
                <svg className={`w-4 h-4 transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isServicesOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {services.map((service, index) => (
                    <Link 
                      key={index}
                      href={`/services/${service.toLowerCase().replace(/\s+/g, '')}`}
                      className="block py-1 text-sm text-cards hover:text-sky-700"
                    >
                      {service}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {/* <Link href="/testimonials" className="nav-link">
              Testimonials
            </Link>
            <Link href="/portfolio" className="nav-link">
              Portfolio
            </Link> */}
            <Link href="/contact" className="nav-link text-white">
              Contact Us
            </Link>
            <a className="font-oswald text-cards font-bold">
              info@techhaven.com
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}