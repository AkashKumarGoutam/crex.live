import React from 'react'
import { Link } from 'react-router-dom'

function WomenNavbar() {
  return (
    <div className='flex justify-center'>
    <div className='flex gap-4 p-4 w-[80%] '>
      <Link to='/rankings/rankings_category_women/team1' className='border-2 p-1 rounded-sm cursor-pointer'>Team</Link>
      <Link to='/rankings/rankings_category_women/batter1' className='border-2 p-1 rounded-sm cursor-pointer'>Batter</Link>
      <Link to='/rankings/rankings_category_women/bowler1' className='border-2 p-1 rounded-sm cursor-pointer'>Bowler</Link>
      <Link to='/rankings/rankings_category_women/all_rounder1' className='border-2 p-1 rounded-sm cursor-pointer'>All Rounder</Link>
    </div>
  </div>
  )
}

export default WomenNavbar
