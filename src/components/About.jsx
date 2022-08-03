import React from 'react'
import one from '../assets/second.jpeg'
import two from '../assets/third.jpeg'

export default function About() {
  return (
    <section id="about" className='bg-white mb-10 flex items-center gap-4 p-5 mt-2 justify-evenly text-black'>
        <img src={one} alt="First Image" className='w-[30%] ' />
        <span className='text-2xl'>We are very <b>affordable</b> and <b>hospitable</b> <br/> Contact us today and you wont regret it.</span>
        <img src={two} alt="Last Image" className='w-[20%] ' />
    </section>
  )
}
