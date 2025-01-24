import React from 'react'
import { font } from './fonts/font'

const Client = () => {
  return (  
    <div className={`${font.className} py-8 md:p-16 p-8 flex flex-col md:flex-row bg-black w-full`}>
        <section className='md:w-[50%] w-full flex flex-col justify-start items-start'>
            <h1 className='md:text-3xl text-2xl text-cards font-extrabold'>Our Client</h1>
            <h1 className='md:text-5xl text-white text-3xl pt-4  font-extrabold'>We Work With An Extensive Clientele</h1>
            <p className='md:text-xl text-white text-lg pt-4 md:max-w-xl'>Through solutions, we have established relations around trust. Our clientele is winding and extending. We hope to wrap you in our trust too.</p>
        </section>
        <section className='md:w-[50%] md:ml-8 flex flex-col justify-center items-start w-full'>
            <p className='md:text-xl text-white text-lg pt-4 md:max-w-xl'>Complex products excite us! Our team integrate value-added solutions to enhance applications or any software projects that need further improvement. Get in touch with us to learn more how we can bring value to your project!</p>
            <button className='btn-primary bg-opacity-100 hover:bg-opacity-100 bg-cards text-black hover:text-white hover:bg-card1 mt-6'>Get In Touch</button>
        </section>
    </div>
  )
}

export default Client