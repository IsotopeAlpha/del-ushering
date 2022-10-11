import React from 'react'
import home from '../assets/first.jpeg'

export default function Home() {
  return (
    <section id='home' className='w-[100vw] m-auto mt-[80px]'>
        <img src={home} alt="Home Pic" className='w-[100vw] ' />
        <div className='bg-black  md:p-[80px] flex justify-center opacity-80 w-[100vw] absolute sm:bottom-[120px] md:bottom-10 xl:bottom-0'>
            <h1 className='font-bold text-xl md:text-[80px]'>Meet Our Team</h1>
        </div>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3355231301514583"
     crossorigin="anonymous"></script>
    </section>
  )
}
 