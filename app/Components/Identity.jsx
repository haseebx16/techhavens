"use client";

import React, { useEffect, useRef } from 'react'
import { font } from './fonts/font'
import Parallax from 'parallax-js';

const Identity = () => {

    const parallaxContainer = useRef(null);
    
      useEffect(() => {
        const parallaxInstance = new Parallax(parallaxContainer.current, {
          relativeInput: true,
        });
        return () => {
          parallaxInstance.destroy();
        };
      }, []);

  return (
    <div className={`${font.className} md:p-16 bg-black overflow-hidden p-8 z-10 flex flex-col md:flex-row md:justify-center md:items-center`}>
        <section className="md:w-[50%] w-[100%] z-20 md:mr-12 flex flex-col justify-center items-center" ref={parallaxContainer}>
            <div data-depth="0.2">
                <img src="/laptop.png" alt="img" />
            </div>
        </section>
        <section className='md:w-[50%] pt-20 md:pt-0 w-full z-20'>
            <div>
                <p className='md:text-3xl text-2xl uppercase text-cards'>Tech Haven PVT LTD--</p>
                <h1 className='md:text-5xl text-3xl font-bold text-white mt-6'>To Be The Blueprint for Your Digital Identity.</h1>
                <p className='text-md text-white mt-6'>At Tech Haven, build the perfect team for your project whenever needed! This enables you to save time, focus on your project, and ensure successful completion.</p>
                <div className='grid md:grid-cols-2 mt-6 gap-4 '>
                    <div className='p-4  '>
                        <h1 className='text-2xl text-cards '>Speedy Hiring Process</h1>
                        <p className='text-white text-justify pt-4'>Our mission is to provide the best possible service to our clients and to help them achieve their goals.</p>
                    </div>
                    <div className='p-4  duration-300'>
                        <h1 className='text-2xl text-cards text-justify'> ONLY THE BEST OF THE BEST</h1>
                        <p className='text-white text-justify pt-4'>Our vision is to be the best in the industry and to provide the best possible service to our clients.</p>
                    </div>
                    <div className='p-4  duration-300'>
                        <h1 className='text-2xl text-cards text-justify'>FUTURE-PROOFED TALENT                        </h1>
                        <p className='text-white text-justify pt-4'>Our mission is to provide the best possible service to our clients and to help them achieve their goals.</p>
                    </div>
                    <div className='p-4  hover:text-white duration-300'>
                        <h1 className='text-2xl text-cards text-justify'>EXCEPTIONAL PROFESSIONALISM                        </h1>
                        <p className='text-white text-justify pt-4'>Our vision is to be the best in the industry and to provide the best possible service to our clients.</p>
                    </div>
                </div>
                
            </div>
        </section>
    </div>
  )
}

export default Identity