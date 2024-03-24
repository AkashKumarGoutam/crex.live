import React from 'react'
import WomenNavbar from '../../components/RankingComponent/WomenNavbar'
import { Outlet } from 'react-router-dom'

function Women() {
  return (
    <div>
      <WomenNavbar/>
      <Outlet/>
    </div>
  )
}

export default Women
