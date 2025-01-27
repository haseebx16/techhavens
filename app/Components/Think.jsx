'use client';

import React, { useEffect, useRef } from 'react';
import { font } from './fonts/font';
import Parallax from 'parallax-js';
import AOS from "aos"
import { useState } from 'react';
import ContactModal from './ContactModal';
import "aos/dist/aos.css"

const Think = () => {
  const parallaxContainer = useRef(null);

  useEffect(() => {
    const parallaxInstance = new Parallax(parallaxContainer.current, {
      relativeInput: true,
    });
    return () => {
      parallaxInstance.destroy();
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
    
      const openModal = () => setIsModalOpen(true);
      const closeModal = () => setIsModalOpen(false);

  return (
    <div
      className={`${font.className} md:p-16 bg-black overflow-hidden p-8 flex flex-col md:flex-row md:justify-center md:items-center`}
    >
      <section className="md:w-[50%] w-[100%] z-20 md:mr-12 flex flex-col justify-center items-center" ref={parallaxContainer}>
        <div data-depth="0.2">
          <img src="asian-about.jpg" alt="img" />
        </div>
      </section>
      <section className="md:w-[50%] md:pt-0 pt-12 z-20 w-full">
        <div>
          <p data-aos="fade-right" className="md:text-3xl text-2xl text-cards">Think, Hire, Develop</p>
          <h1 data-aos="fade-down" className="md:text-5xl text-3xl font-bold text-white mt-6">
            Improving The Code Base, Frameworks, Languages, And Designs.
          </h1>
          <p data-aos="fade-up" className="text-md text-white mt-6">
            At Tech Haven, our agile and multi-disciplinary development teams
            have a well-defined methodology to deliver high-quality results. Our
            expertise spans a wide range of developmental projects, from UI/UX
            design to web or mobile development.
          </p>
          <button onClick={openModal} data-aos="fade-left" className="btn-primary bg-cards text-black hover:text-white hover:bg-card1 mt-6">
            Let's Connect
          </button>
          <ContactModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
      </section>
    </div>
  );
};

export default Think;
