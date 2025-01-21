"use client";

import React, { useEffect, useRef } from 'react'
import { font } from './fonts/font'
import Parallax from 'parallax-js';

const Choose = () => {

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
    <div className={`${font.className} md:p-16 overflow-hidden z-10 p-8 flex flex-col md:flex-row md:justify-center md:items-center`}>
        <section className="md:w-[50%] w-[100%] z-20 md:mr-12 flex flex-col justify-center items-center" ref={parallaxContainer}>
            <div data-depth="0.2">
                <img src='/iPhone.png' className='md:ml-24 ml-28'/>
            </div>
        </section>
        <section className='md:w-[50%] z-20 pt-12 md:pt-0 w-full'>
            <div>
                <p className='md:text-3xl text-2xl uppercase text-cyan-500'>Curious Why-</p>
                <h1 className='md:text-5xl text-3xl font-bold text-black mt-6'>People Choose Tech Haven</h1>
                <p className='text-md text-gray-600 mt-6'>We are a platform that offers amazing career opportunities to everyone who shakes our hand.</p>
                <p className='text-md text-gray-600 mt-6'>&#x2022;&nbsp; Vetted once, eligible for life</p>
                <p className='text-md text-gray-600 '>&#x2022;&nbsp; Exclusive Turing developer community</p>
                <p className='text-md text-gray-600'>&#x2022;&nbsp; Income stability thanks to a 99% rematch rate</p>
                
            </div>
        </section>
    </div>
  )
}

export default Choose