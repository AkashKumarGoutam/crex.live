import React from 'react'
import Match from '../menTeamsComponent/Match'

function MenBatter() {
  return (
    <div className="flex justify-center">
      <div className="w-[80%]">
        <h1 className="text-xl font-semibold pt-4">Men's Batter Ranking</h1>
       <div className="flex justify-between gap-10 py-6">
        <Match/>
        <Match/>
        <Match/>
       </div>

      </div>
    </div>
  )
}

export default MenBatter
