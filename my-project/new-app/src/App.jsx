import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setconter] = useState(0);
  function update() {
  setconter(counter + 1)
    }

  function remove() {
    if (counter > 0) {
        setconter(prev => Math.max(prev - 1,0))
      
    }
  }

  function reset() {
    setconter(0)
  }
  return (
    <>
      <h1>Conter  {counter}</h1>
      <button onClick={update}>Add counter</button>
      <button onClick={remove} disabled={counter === 0}>Remove counter</button>
      <button onClick={reset}>Reset </button>
    </>
  )
}

export default App

// Key point: In React, state drives the UI. You don’t touch the DOM manually; you change the data, and React handles the rest.