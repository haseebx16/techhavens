import React from 'react'
import { font } from './fonts/font'

const Connect = () => {
  return (
    <section className={`${font.className} flex flex-col z-20 bg-white justify-center items-center p-12`}>
        <p className='text-cards text-xl md:text-3xl z-20 text-center font-bold'>Like what you've seen?</p>
        <p className='md:text-7xl text-5xl mt-6 font-bold z-20 max-w-5xl text-center text-customBlue'>We’d Love to Hear from You. Let’s Talk!</p>
        <button className='btn-primary mt-10 z-20 bg-cards text-black hover:text-white hover:bg-card1'>Let's Connect</button>
    </section>
  )
}

export default Connect