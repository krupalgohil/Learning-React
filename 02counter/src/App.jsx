import { useState } from 'react'
import './App.css'

function App() {
  let[counter,setCounter] = useState(5)

  // let counter = 5

  const addvalue = () => {
    console.log("value add",counter);
    counter = counter + 1;
    setCounter(counter)
  }

  const removevalue = () => {
    counter = counter - 1;
    setCounter(counter)
  }


  return (
  <>
  <h1>CODE</h1>
  <h2>counter value : {counter}</h2>
  <button
  onClick={addvalue}>Add value {counter}</button>
  <br />
  <button 
  onClick={removevalue}>Remove value {counter}</button>
  </>
  )
}

export default App
