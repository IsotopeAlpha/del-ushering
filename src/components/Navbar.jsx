import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='sm:hidden md:flex fixed top-0 bg-white text-black  w-[100vw] h-[80px] p-2'>
      <div className='text-green-800 text-2xl font-bold flex font-mono uppercase text-center'>Del's Ushering Consuslt</div>
        <ul className='flex gap-8 justify-end w-full pr-4 items-center font-bold'>
            <li ><a href='/#home'>Home</a></li>
            <li ><a href='/#services'>Services</a></li>
            <li ><a href='/#about'>About</a></li>
            <li ><a href='/#contact'>Contact</a></li>
        </ul>
    </div>
  )
}
