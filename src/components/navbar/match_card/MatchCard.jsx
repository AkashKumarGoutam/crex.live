import React from 'react'

function MatchCard() {
  return (
    <div className=' border-2 rounded-xl w-96'>
      <div className='flex bg-gray-200 h-10 items-center justify-between px-2'>
        <div className='flex gap-2'>
        <h1 className='text-red-800'>03:57m</h1> |
        <h1>WPL 2024</h1> 
        </div>
        <div>
            <img src='https://crex.live/assets/icon/rightArrow.svg' alt='img' className='w-2'/>
        </div>
      </div>
      <div className='p-4'>
        <h1 className='text-xs py-4'>19th Match , Arun Jaitley Stadium , Delhi</h1>
        <div>
            <div className=' flex items-center gap-1'>
                <img src='https://cricketvectors.akamaized.net/Teams/QK.png?impolicy=default_web' alt='img' className='w-10 h-10'/>
                <h1> Mumbai Indians Women</h1>
            </div>
            <div className='flex items-center gap-1'>
                <img src='https://cricketvectors.akamaized.net/Teams/QL.png?impolicy=default_web' alt='img' className='w-10 h-10'/>
                <h1>Royal Challengers Bangalore Women</h1>
            </div>
            <div>
                <h1 className='text-xs py-4'>GGW won by 8 runs</h1>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MatchCard
