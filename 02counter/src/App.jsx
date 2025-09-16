import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)    //setCounter is a function(kuch bhi naam sakh sakte ho)


  // let counter = 5
  function addValue() {
    if (counter < 20){
      counter += 1
      setCounter(counter)
      // setCounter(counter + 1)                //Will work
      console.log(`Added value ${counter}`)
      
    }
  }

  function removeValue() {
    if(counter > 0 ){
      setCounter(counter - 1)
      console.log(`remove value${counter}`)

    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>

      <p>Paragraph with counter:{counter}</p>
    </>
  )
}

export default App
