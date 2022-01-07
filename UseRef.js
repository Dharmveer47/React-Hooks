import React, {useState, useRef, useEffect} from 'react'
import Test from './Components/Test'


const App = () => {
  const [state, setState] = useState("");
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current+ 1;
  });

  return (
    <div>
        <input type="text" value={state} onChange={e=> setState(e.target.value)}/>
        <div>My name is {renderCount.current}</div>
    </div>
  )
}

export default App
