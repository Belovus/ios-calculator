import React from 'react'
import ElementContainer from "../ElementContainer/ElementContainer";

import './BottomBlock.sass'

function BottomBlock () {
  return (
    <div className="BottomBlock">
      <div className="BottomBlock__block1">
        <ElementContainer text="C"/>
        <ElementContainer text="÷"/>
      </div>
      <div className="BottomBlock__block2">
        <ElementContainer text="7"/>
        <ElementContainer text="8"/>
        <ElementContainer text="9"/>
        <ElementContainer text="×"/>
        <ElementContainer text="4"/>
        <ElementContainer text="5"/>
        <ElementContainer text="6"/>
        <ElementContainer text="-"/>
        <ElementContainer text="1"/>
        <ElementContainer text="2"/>
        <ElementContainer text="3"/>
        <ElementContainer text="+"/>
      </div>
      <div className="BottomBlock__block1">
        <ElementContainer text="0"/>
        <ElementContainer text="."/>
        <ElementContainer text="="/>
      </div>
    </div>
  )
}

export default BottomBlock