"use client";

import React, { useEffect, useRef, useState } from 'react'
import { font } from './fonts/font'
import Parallax from 'parallax-js';
import CountUp from 'react-countup';

const Choose = () => {

    const parallaxContainer = useRef(null);
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
        
          useEffect(() => {
            const parallaxInstance = new Parallax(parallaxContainer.current, {
              relativeInput: true,
            });
            return () => {
              parallaxInstance.destroy();
            };
          }, []);

          useEffect(() => {
            const observer = new IntersectionObserver(
              ([entry]) => {
                if (entry.isIntersecting) {
                  setIsVisible(true);
                }
              },
              { threshold: 0.5 } 
            );
        
            if (sectionRef.current) {
              observer.observe(sectionRef.current);
            }
        
            return () => {
              if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
              }
            };
          }, []);

  return (
    <div className={`${font.className} md:p-16 overflow-hidden z-10 p-8 flex flex-col md:flex-row md:justify-center md:items-center`} ref={sectionRef}>
        <section className="md:w-[50%] w-[100%] z-20 md:mr-12 flex flex-col justify-center items-center" ref={parallaxContainer}>
            <div data-depth="0.2">
                <img src='/iPhone.png' className='md:ml-24 ml-28'/>
            </div>
        </section>
        <section className='md:w-[50%] z-20 pt-12 md:pt-0 w-full'>
            <div>
                <p className='md:text-3xl text-2xl uppercase text-cards'>Curious Why-</p>
                <h1 className='md:text-5xl text-3xl font-bold text-black mt-6'>People Choose Tech Haven</h1>
                <p className='text-md text-gray-600 mt-6'>We are a platform that offers amazing career opportunities to everyone who shakes our hand.</p>
                <p className='text-md text-gray-600 mt-6'>&#x2022;&nbsp; Vetted once, eligible for life</p>
                <p className='text-md text-gray-600 '>&#x2022;&nbsp; Exclusive Turing developer community</p>
                <p className='text-md text-gray-600'>&#x2022;&nbsp; Income stability thanks to a 99% rematch rate</p>
                <div className='flex space-x-4'>
                    <div className='bg-cards text-black mt-6 p-4 rounded-md w-fit flex flex-col justify-center items-center'> 
                        <p className='text-3xl'>
                            {isVisible && <CountUp end={1500} duration={3} />}+
                        </p>
                        <p className='text-xl '>Worldwide Customers</p>
                    </div>
                    <div className='bg-customBlue text-white mt-6 p-4 rounded-md w-fit flex flex-col justify-center items-center'> 
                        <p className='text-3xl'>
                            {isVisible && <CountUp end={2000} duration={3} />}+
                        </p>
                        <p className='text-xl '>Projects Done</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Choose