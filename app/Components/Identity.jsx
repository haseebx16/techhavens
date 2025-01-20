import React from 'react'
import { font } from './fonts/font'

const Identity = () => {
  return (
    <div className={`${font.className} md:p-16 p-8 flex flex-col md:flex-row md:justify-center md:items-center`}>
        <section className='w-[50%]'>
            <div>
                <img src='/laptop.png'/>
            </div>
        </section>
        <section className='md:w-[50%] w-full'>
            <div>
                <p className='md:text-3xl text-2xl uppercase text-cyan-500'>Tech Haven PVT LTD--</p>
                <h1 className='md:text-5xl text-3xl font-bold text-black mt-6'>To Be The Blueprint for Your Digital Identity</h1>
                <p className='text-md text-gray-600 mt-6'>At Codified Digital, build the perfect team for your project whenever needed! This enables you to save time, focus on your project, and ensure successful completion.</p>
                <button className='btn-primary mt-6'>Let's Connect</button>
            </div>
        </section>
    </div>
  )
}

export default Identity