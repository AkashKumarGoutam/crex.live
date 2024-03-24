import React from 'react'

function AdsSection() {
  return (
    <div className='bg-black p-4'>
      <h1 className='text-3xl text-white py-10 pl-24'>Top Cricket Tournaments</h1>
      <div className='flex gap-4 justify-center'>
        <div className='flex flex-col gap-4 items-center'>
            <img src='https://cricketvectors.akamaized.net/Series/19W.png?impolicy=default_web' className='w-32'/>
            <h1 className='text-md text-gray-600 font-semibold'>IPL 2023</h1>
        </div>
        <div className='flex flex-col gap-4 items-center'>
            <img src='https://cricketvectors.akamaized.net/Series/1A0.png?impolicy=default_web' className='w-32'/>
            <h1 className='text-md text-gray-600 font-semibold'>T20 Blast 2023</h1>
        </div>        
        <div className='flex flex-col gap-4 items-center'>
            <img src='https://cricketvectors.akamaized.net/Series/1BU.png?impolicy=default_web' className='w-32'/>
            <h1 className='text-md text-gray-600 font-semibold'>TNPL 2023 </h1>
        </div>
        <div className='flex flex-col gap-4 items-center'>
            <img src='https://cricketvectors.akamaized.net/Series/178.png?impolicy=default_web' className='w-32'/>
            <h1 className='text-md text-gray-600 font-semibold'>The Ashes 2023</h1>
        </div>
        <div className='flex flex-col gap-4 items-center'>
            <img src='https://cricketvectors.akamaized.net/Series/1DG.png?impolicy=default_web' className='w-32'/>
            <h1 className='text-md text-gray-600 font-semibold'>CPL 2023</h1>
        </div>
        <div className='flex flex-col gap-4 items-center'>
            <img src='https://cricketvectors.akamaized.net/Series/1FZ.png?impolicy=default_web' className='w-32'/>
            <h1 className='text-md text-gray-600 font-semibold'>Asia Cup 2023</h1>
        </div>
        <div className='flex flex-col gap-4 items-center'>
            <img src='https://cricketvectors.akamaized.net/Series/1CO.png?impolicy=default_web' className='w-32'/>
            <h1 className='text-md text-gray-600 font-semibold'>World Cup 2023</h1>
        </div>
        <div className='flex flex-col gap-4 items-center'>
            <img src='https://cricketvectors.akamaized.net/Series/1ID.png?impolicy=default_web' className='w-32'/>
            <h1 className='text-md text-gray-600 font-semibold'>BBL 2023-24</h1>
        </div>
        <div className='flex flex-col gap-4 items-center'>
            <img src='https://cricketvectors.akamaized.net/Series/1FN.png?impolicy=default_web' className='w-32'/>
            <h1 className='text-md text-gray-600 font-semibold'>PSL 2024</h1>
        </div>
      </div>

      <div className='text-white flex gap-20 py-12 w-[80%] mx-auto text-xl '>
        <div>
            <h1 className='border-b border-gray-800 py-6'>Most Runs <span className='text-gray-500 text-lg'> in PSL 2024 </span></h1>
            <h1 className='border-b border-gray-800 py-6'>Most Wickets <span className='text-gray-500 text-lg'>in PSL 2024PSL 2024</span></h1>
            <h1 className='border-b border-gray-800 py-6'>Highest Strike Rate <span className='text-gray-500 text-lg'>in PSL 2024PSL 2024</span></h1>
            <h1 className='border-b border-gray-800 py-6'>Most Hundreds <span className='text-gray-500 text-lg'>in PSL 2024PSL 2024</span></h1>
        </div>
        <div>
            <h1 className='border-b border-gray-800 py-6'>Most Sixes<span className='text-gray-500 text-lg'> in PSL 2024</span></h1>
            <h1 className='border-b border-gray-800 py-6'>Most Fours<span className='text-gray-500 text-lg'> in PSL 2024</span></h1>
            <h1 className='border-b border-gray-800 py-6'>Most Fifties <span className='text-gray-500 text-lg'>in PSL 2024PSL 2024</span></h1>
        </div>
      </div>
    </div>
  )
}

export default AdsSection
