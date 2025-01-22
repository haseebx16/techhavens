import React from 'react'
import Link from 'next/link';
import { font } from './fonts/font';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {

  return (
    <footer className={`${font.className} bg-customBlue text-white  py-12 md:py-12`}>
      <div className="container mx-auto flex flex-wrap justify-evenly items-center space-y-6 md:space-y-0">
        <div className="flex flex-col items-start">
          <img src="/logo.png" alt="Logo" className="w-auto h-auto sm:h-10 md:h-28 lg:h-14" style={{ height: '50px', width: "200px" }} />
            <p className='text-white pt-4 max-w-md'>Tech Haven is an innovation delivery company that specializes in team augmentation for digital projects. We work with you to innovate your ideas and execute them to perfection.</p>
        </div>

        <div className="flex flex-wrap justify-between md:space-x-16">
          <ul className="space-y-2 p-4 md:p-0 text-lg">
            <Link href={"/"}><li data-aos="fade-down" className='hover:text-white hover:cursor-pointer'>Home</li></Link>
            <Link href={"/about"}><li data-aos="fade-right" className='hover:text-white hover:cursor-pointer'>Services</li></Link>
            <Link href={"/contact"}><li data-aos="fade-up" className='hover:text-white hover:cursor-pointer'>Contact</li></Link>
          </ul>

          <ul className="space-y-0 p-4 md:p-0 text-lg">
            <li data-aos="fade-down" className='hover:text-white hover:cursor-pointer'>Address</li>
            <li data-aos="fade-right" className='hover:text-white hover:cursor-pointer'>Number</li>
            <li data-aos="fade-left" className='hover:text-white hover:cursor-pointer'>info@techhaven.com</li>
          </ul>

          <ul className="space-y-0 text-lg p-4 pt-8 text-center md:text-left md:p-0 max-w-sm">
            <li className="flex items-center space-x-2">
              <FaFacebook size={20} />
              <span>Facebook</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaLinkedin size={20} />
              <span>LinkedIn</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaInstagram size={20} />
              <span>Instagram</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
