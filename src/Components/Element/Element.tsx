import React from 'react'

import './Element.sass'

import {useSpring} from 'react-spring'

interface ElementI {
  text: string
  elementStyle: {
    background: string
    width: string
    height: string
    color?: string
  }
  handleOnClick: () => void
}

const Element = function ({text, elementStyle, handleOnClick}: ElementI) {
  return (
    <div
      className="Element"
      style={elementStyle}
      onClick={handleOnClick}
    >
      {text}
    </div>
  )
}

export default Element