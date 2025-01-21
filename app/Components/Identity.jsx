import React from 'react'
import { font } from './fonts/font'

const Identity = () => {
  return (
    <div className={`${font.className} md:p-16 p-8 z-10 flex flex-col md:flex-row md:justify-center md:items-center`}>
        <section className='md:w-[50%] w-[100%] z-20 md:mr-12 flex flex-col justify-center items-center'>
            
                <img src='/laptop.png'/>
            
        </section>
        <section className='md:w-[50%] w-full z-20'>
            <div>
                <p className='md:text-3xl text-2xl uppercase text-cyan-500'>Tech Haven PVT LTD--</p>
                <h1 className='md:text-5xl text-3xl font-bold text-black mt-6'>To Be The Blueprint for Your Digital Identity.</h1>
                <p className='text-md text-gray-600 mt-6'>At Tech Haven, build the perfect team for your project whenever needed! This enables you to save time, focus on your project, and ensure successful completion.</p>
                <div className='grid md:grid-cols-2 mt-6 gap-4 '>
                    <div className='p-4  '>
                        <h1 className='text-2xl text-cyan-500 '>Speedy Hiring Process</h1>
                        <p className='text-black text-justify pt-4'>Our mission is to provide the best possible service to our clients and to help them achieve their goals.</p>
                    </div>
                    <div className='p-4  duration-300'>
                        <h1 className='text-2xl text-cyan-500 text-justify'> ONLY THE BEST OF THE BEST</h1>
                        <p className='text-black text-justify pt-4'>Our vision is to be the best in the industry and to provide the best possible service to our clients.</p>
                    </div>
                    <div className='p-4  duration-300'>
                        <h1 className='text-2xl text-cyan-500 text-justify'>FUTURE-PROOFED TALENT                        </h1>
                        <p className='text-black text-justify pt-4'>Our mission is to provide the best possible service to our clients and to help them achieve their goals.</p>
                    </div>
                    <div className='p-4  hover:text-white duration-300'>
                        <h1 className='text-2xl text-cyan-500 text-justify'>EXCEPTIONAL PROFESSIONALISM                        </h1>
                        <p className='text-black text-justify pt-4'>Our vision is to be the best in the industry and to provide the best possible service to our clients.</p>
                    </div>
                </div>
                
            </div>
        </section>
    </div>
  )
}

export default Identity