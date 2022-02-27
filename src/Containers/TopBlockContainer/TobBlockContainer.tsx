import React from 'react'
import TopBlock from '../../Components/TopBlock/TopBlock'
import {useAppSelecor} from "../../Store/Hooks/redux";

interface TobBlockContainerI {

}

function TopBlockContainer({}: TobBlockContainerI) {
  const text = useAppSelecor((store) => store.calculatorReducer.expression)
  return <TopBlock text={text}/>
}

export default TopBlockContainer