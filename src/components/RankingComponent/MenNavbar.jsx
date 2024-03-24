import React from 'react'
import { Link } from 'react-router-dom'

function MenNavbar() {
  return (
    <div className='flex justify-center'>
      <div className='flex gap-4 p-4 w-[80%] '>
        <Link to='/rankings/rankings_category_men/team' className='border-2 p-1 rounded-sm cursor-pointer'>Team</Link>
        <Link to='/rankings/rankings_category_men/batter' className='border-2 p-1 rounded-sm cursor-pointer'>Batter</Link>
        <Link to='/rankings/rankings_category_men/bowler' className='border-2 p-1 rounded-sm cursor-pointer'>Bowler</Link>
        <Link to='/rankings/rankings_category_men/all_rounder' className='border-2 p-1 rounded-sm cursor-pointer'>All Rounder</Link>
      </div>
    </div>
  )
}

export default MenNavbar
