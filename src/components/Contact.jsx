import React from 'react'

export default function Contact() {
  return (
    <div className='bg-green-800 text-white h-[40vh] p-4'>
        <span className='text-[50px] font-bold'>Contact Us</span>
        <div className='text-xl flex flex-col font-light justify-center items-center'>
            <span>Email: delsusheringconsult@gmail.com</span> 
            <span>Mobile: 0244624902</span>
            <span>Facebook: <a className='text-blue-500' href='http://www.facebook.com/delsusheringconsult/'>http://www.facebook.com/delsusheringconsult/</a> </span>
        </div>
    </div>
  )
}
