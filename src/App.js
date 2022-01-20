import React from 'react';
import {incNumber, decNumber} from "./Action/index"
import { useSelector, useDispatch } from 'react-redux'
const App = () => {
  const myState = useSelector(state => state.changeNumber)
  const dispatch = useDispatch()
  return (
    <div>
    <button onClick={()=>dispatch(decNumber())}>-</button>
    <span>{myState}</span>
    <button onClick={()=> dispatch(incNumber(5))}>+</button>
    </div>
  )
}

export default App
