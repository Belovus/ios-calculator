import React from 'react'
import Element from "../../Components/Element/Element";
import {styleSelection} from "../../Adapters/Adapters";
import {useAppDispatch, useAppSelecor} from "../../Store/Hooks/redux";
import {calculatorSlice} from "../../Store/reducers/calculatorSlice";

interface ElementContainerI {
  text: string
}

function ElementContainer({text}: ElementContainerI) {
  const dispatch = useAppDispatch()
  const {addExpression, removeExpression, addSign} = calculatorSlice.actions
  const selectedSign = useAppSelecor((store) => store.calculatorReducer.sign)
  const elementStyle = styleSelection(text, selectedSign)

  function handleOnClick() {
    const charCode: number = text.charCodeAt(0)
    console.log(charCode)
    switch (true) {
      case charCode === 46 || (charCode >= 48 && charCode <= 57):
        dispatch(addExpression(text))
        break
      case charCode === 67:
        dispatch(removeExpression())
        dispatch(addSign(text))
        break
      case [215, 45, 43, 247, 61].indexOf(charCode) != -1:
        dispatch(addSign(text))
        break
    }
  }

  return (
    <Element
      text={text}
      elementStyle={elementStyle}
      handleOnClick={handleOnClick}
    />
  )
}

export default ElementContainer