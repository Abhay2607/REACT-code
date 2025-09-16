import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-10 rounded-xl mb-4'>TAILWIND TEST</h1>

      <Card username="Abhay" btnText="FIND ME"/>
      <Card username="Jassu" btnText="VISIT ME"/>
      <Card username="Ayush" btnText="TEXT ME"/>
    </>
  )
}

export default App
