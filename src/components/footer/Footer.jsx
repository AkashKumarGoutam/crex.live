import React from 'react'

function Footer() {
  return (
    <div className='bg-gray-800 text-white flex items-center justify-center'>
      <div className='w-[80%] p-6'>
        <div className='flex gap-2 py-4'>
        <img
              src="https://crex.live/assets/logo/logo2.webp"
              alt="img"
              className="w-6"
            />
            <h1 className='text-xl text-gray-300 font-semibold'>
                CREX
            </h1>
        </div>
        <hr/>
        <div className='flex justify-between items-center py-6 font-semibold text-lg'>
            <div className='flex flex-col gap-8'>
                <h1>About</h1>
                <h1>Grievance</h1>
                <h1>Refund Policy</h1>
            </div>
            <div className='flex flex-col gap-8'>
                <h1>Privacy Policy</h1>
                <h1>Terms and Conditions</h1>
                <h1>Contact Us</h1>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
