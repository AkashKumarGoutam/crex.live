import React from 'react'
import MenNavbar from '../../components/RankingComponent/MenNavbar'
import { Outlet } from 'react-router-dom'

function Men() {
  return (
    <div>
      <MenNavbar/>
      <Outlet />
    </div>
  )
}

export default Men
