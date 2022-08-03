import React from 'react'
import home from '../assets/first.jpeg'

export default function Home() {
  return (
    <div className='w-[100vw] m-auto mt-[80px]'>
        <img src={home} alt="Home Pic" className='w-[100vw] ' />
        <div className='bg-black p-[100px] flex justify-center opacity-80 w-[100vw] absolute bottom-0'>
            <h1 className='font-bold text-[80px]'>Meet Our Team</h1>
        </div>
    </div>
  )
}
