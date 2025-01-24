import React from 'react'
import { font } from './fonts/font'
import ParticlesCX from './Particles'

const WhyChooseUs = () => {
  return (
    <div className={`${font.className} md:p-16 p-8 z-10 flex bg-black flex-col md:flex-row md:justify-center md:items-center`}>
        {/* <ParticlesCX/> */}
        <section className='md:w-[50%] w-full'>
            <div>
                <p className='md:text-3xl text-2xl uppercase text-cards font-bold'>Why Choose</p>
                <h1 className='md:text-5xl text-3xl font-bold text-white mt-6'>Why Choose Tech Haven For Your Project?</h1>
                <p className='text-md text-white mt-6'>At Tech Haven, we believe outsourcing should be about building relationships, not just getting tasks done. That’s why we pour our hearts into crafting a seamless and enjoyable experience. Our goal is to ensure that our clients feel like an extension of our team.</p>
                <p className='text-md text-white mt-6'>As development experts, we know how to create top-notch products that exceed expectations. But it’s our dedication to customer service that truly sets us apart. We are here to listen, advise and support you every step of the way.</p>
                <p className='text-md text-white mt-6'>No project is too big, complex, or small for our talented and experienced team. From custom software development to ongoing maintenance and support, we’ve got you covered.</p>
                <p className='text-md text-white mt-6'><span className='text-cards'>&#x2022;</span>&nbsp; Access to Global talent.</p>
                <p className='text-md text-white mt-1'><span className='text-cards'>&#x2022;</span>&nbsp; Cost Effective.</p>
                <p className='text-md text-white mt-1'><span className='text-cards'>&#x2022;</span>&nbsp; Agility And Flexibility.</p>
            </div>
        </section>
        <section className='md:w-[50%] w-full'>
            <div>
                <div className='grid md:grid-cols-2 md:pl-12 mt-6 gap-4 '>
                    <div className='p-4 py-12 rounded-md z-20 bg-card1 '>
                        <h1 className='text-2xl text-white font-bold '>Speedy Hiring Process</h1>
                        <p className='text-white text-justify pt-4'>Our mission is to provide the best possible service to our clients and to help them achieve their goals.</p>
                    </div>
                    <div className='p-4 py-12 rounded-md z-20 bg-cards text-black hover:bg-cyan-400 hover:text-white duration-300'>
                        <h1 className='text-2xl font-bold text-justify'> ONLY THE BEST OF THE BEST</h1>
                        <p className=' text-justify pt-4'>Our vision is to be the best in the industry and to provide the best possible service to our clients.</p>
                    </div>
                    <div className='p-4 py-12 rounded-md z-20 text-black bg-cards hover:bg-cyan-400 hover:text-white duration-300'>
                        <h1 className='text-2xl  font-bold text-justify'>FUTURE-PROOFED TALENT                        </h1>
                        <p className=' text-justify pt-4'>Our mission is to provide the best possible service to our clients and to help them achieve their goals.</p>
                    </div>
                    <div className='p-4 py-12 rounded-md z-20 text-black bg-cards hover:bg-cyan-400 hover:text-white duration-300'>
                        <h1 className='text-2xl  font-bold text-justify'>EXCEPTIONAL PROFESSIONALISM                        </h1>
                        <p className=' text-justify pt-4'>Our vision is to be the best in the industry and to provide the best possible service to our clients.</p>
                    </div>
                </div>
                
            </div>
        </section>
    </div>
  )
}

export default WhyChooseUs