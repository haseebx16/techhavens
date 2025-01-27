"use client";

import React from 'react'
import { font } from './fonts/font'
import { useEffect } from 'react';
import AOS from "aos"
import "aos/dist/aos.css"

const Client = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (  
    <div className={`${font.className} py-8 md:p-16 p-8 flex flex-col md:flex-row bg-black w-full`}>
        <section className='md:w-[50%] w-full flex flex-col justify-start items-start'>
            <h1 data-aos="fade-down" className='md:text-3xl text-2xl text-cards font-extrabold'>Our Client</h1>
            <h1 data-aos="fade-down" className='md:text-5xl text-white text-3xl pt-4  font-extrabold'>We Work With An Extensive Clientele</h1>
            <p  data-aos="fade-up" className='md:text-xl text-white text-lg pt-4 md:max-w-xl'>Through solutions, we have established relations around trust. Our clientele is winding and extending. We hope to wrap you in our trust too.</p>
        </section>
        <section className='md:w-[50%] md:ml-8 flex flex-col justify-center items-start w-full'>
            <p data-aos="fade-down" className='md:text-xl text-white text-lg pt-4 md:max-w-xl'>Complex products excite us! Our team integrate value-added solutions to enhance applications or any software projects that need further improvement. Get in touch with us to learn more how we can bring value to your project!</p>
            <a href='/contact'><button data-aos="fade-up" className='btn-primary bg-opacity-100 hover:bg-opacity-100 bg-cards text-black hover:text-white hover:bg-card1 mt-6'>Get In Touch</button></a>
        </section>
    </div>
  )
}

export default Client