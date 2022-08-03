import React from 'react'

export default function Navbar() {
  return (
    <div className='sm:hidden md:flex fixed top-0 bg-white text-black w-[100vw] h-[80px] p-2'>
        <ul className='flex gap-8 justify-end w-full pr-4 items-center font-bold'>
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}