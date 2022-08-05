import React from 'react'
import service from '../assets/fourth.jpeg'

export default function Services() {
  return (
    <section id='services' className='bg-white p-10 mt-10 gap-8 w-full text-black sm:flex sm:flex-row flex  flex-col items-center'>
        <img src={service} alt="Sevive Image" className='sm:w-[40%] w-[70%] sm:mb-0 mb-4' />
        <div className='sm:text-xl sm:font-bold'>
            <span className='sm:text-3xl uppercase'>We offer ushering services at your events.</span> 
            <ul  className='mt-[50px] sm:font-mono gap-4 flex flex-col'>
                <li>Serve your occasion attendees with foods</li>
                <li>Serve your occasion attendees with drinks</li>
                <li>Serve your occasion attendees with water</li>
                <li>Make them feel comfortable and relax where they are seated</li>
            </ul>
        </div>
    </section>
  )
}
