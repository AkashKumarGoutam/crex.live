import React from 'react'

function HeroSection() {
  return (
    <div className=' bg-gray-800 flex justify-center h-56'>
      <div className='w-[80%] flex justify-between p-20'>
      <div className=''>
        <h1 className='text-3xl text-white font-semibold pb-6'>Most Runs in World Cup 2023</h1>
        <h1 className='border-2 w-32 border-blue-400 text-blue-400 font-semibold rounded-md p-2 flex justify-center text-white'>Apply Filters</h1>
      </div>
     <div className='flex'>
     <div className='flex flex-col relative'>
        <img src='https://cricketvectors.akamaized.net/players/org/2X.png?impolicy=default_web' className='w-32'/>
       <div className='absolute pt-24'>
       <img src='https://cricketvectors.akamaized.net/jersey/limited/org/O.png?impolicy=default_web' className='w-32' />
       </div>
      </div>
      <div className='flex flex-col relative'>
        <img src='https://cricketvectors.akamaized.net/players/org/4I.png?impolicy=default_web' className='w-32'/>
       <div className='absolute pt-24'>
       <img src='https://cricketvectors.akamaized.net/jersey/limited/org/O.png?impolicy=default_web' className='w-32' />
       </div>
      </div>
      <div className='flex flex-col relative'>
        <img src='https://cricketvectors.akamaized.net/players/org/92.png?impolicy=default_web' className='w-32'/>
       <div className='absolute pt-24'>
       <img src='https://cricketvectors.akamaized.net/jersey/limited/org/P.png?impolicy=default_web' className='w-32' />
       </div>
      </div>
     </div>
     </div>
    </div>
  )
}

export default HeroSection
