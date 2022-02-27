import React from 'react'

import './TopBlock.sass'

interface TopBlockI {
  text: string
}

function TopBlock ({ text }: TopBlockI) {
  return (
    <div className="TopBlock">
      {text}
    </div>
  )
}

export default TopBlock