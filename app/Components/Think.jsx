import React from 'react'
import { font } from './fonts/font'

const Think = () => {
  return (
    <div className={`${font.className} md:p-16 p-8 flex flex-col md:flex-row md:justify-center md:items-center`}>
        <section className='w-[50%] mr-12'>
            <img src='asian-about.jpg' alt='img'/>
           
        </section>
        <section className='md:w-[50%] w-full'>
            <div>
                <p className='md:text-3xl text-2xl text-cyan-500'>Think, Hire, Develop</p>
                <h1 className='md:text-5xl text-3xl font-bold text-black mt-6'>Improving The Code Base, Frameworks, Languages, And Designs.</h1>
                <p className='text-md text-gray-600 mt-6'>At Tech Haven, our agile and multi-disciplinary development teams have a well-defined methodology to deliver high-quality results. Our expertise spans a wide range of developmental projects, from UI/UX design to web or mobile development.</p>
                <button className='btn-primary mt-6'>Let's Connect</button>
            </div>
        </section>
    </div>
  )
}

export default Think