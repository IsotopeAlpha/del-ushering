import React from 'react'
import one from '../assets/second.jpeg'
import two from '../assets/third.jpeg'

export default function About() {
  return (
    <section id="about" className='bg-white mb-10 sm:flex sm:flex-row flex flex-col  items-center gap-4 p-5 mt-2 justify-evenly text-black'>
        <img src={one} alt="First Image" className='sm:w-[30%] w-[50%]' />
        <span className='sm:text-2xl'>We are very <b>affordable</b> and <b>hospitable</b> <br/> Contact us today and you wont regret it.</span>
        <img src={two} alt="Last Image" className='sm:w-[20%] w-[50%]' />
    </section>
  )
}
