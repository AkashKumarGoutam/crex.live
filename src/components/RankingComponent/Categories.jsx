import React from 'react'
import { Link } from 'react-router-dom'

function Categories() {
  return (
    <div className='bg-gray-800 flex justify-center pb-6'>
      <nav className='w-[80%] pl-20 flex items-center text-gray-300 gap-20'>
        <div>
            <h1>Category</h1>
        </div>
        <div className='flex gap-6'>
            <Link to='/rankings/rankings_category_men'>Men</Link>
            <Link to="/rankings/rankings_category_women">Women</Link>
        </div>
      </nav>
    </div>
  )
}

export default Categories
