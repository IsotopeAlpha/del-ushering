import React from 'react'
import service from '../assets/fourth.jpeg'

export default function Services() {
  return (
    <div className='bg-white p-10 mt-10 gap-8 w-full text-black flex items-center'>
        <img src={service} alt="Sevive Image" className='w-[40%]' />
        <div className='text-xl font-bold'>
            <span className='text-3xl uppercase'>We offer ushering services at your events.</span> 
            <ul  className='mt-[50px] font-mono gap-4 flex flex-col'>
                <li>Serve your occasion attendees with foods</li>
                <li>Serve your occasion attendees with drinks</li>
                <li>Serve your occasion attendees with water</li>
                <li>Make them feel comfortable and relax where they are seated</li>
            </ul>
        </div>
    </div>
  )
}
