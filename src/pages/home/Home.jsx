import React from 'react'
import MatchCard from '../../components/navbar/match_card/MatchCard'
import Items from '../../components/itemsLatestMatchUpdate/Items'

function Home() {
  return (
    <div>
        <h1 className='text-xl font-semibold p-6 pl-40 '>Matches for you</h1>
        <div className='flex gap-4 px-8 justify-center'>
        <MatchCard/>
        <MatchCard/>
        <MatchCard/>
        <MatchCard/>
        </div>
        <div className=' container mx-auto w-[80%] flex flex-col justify-center items-center'>
        <Items/>
        <Items/>
        <Items/>
        <Items/>
        <Items/>
        <Items/>
        <Items/>
        
        </div>
      
    </div>
  )
}

export default Home
