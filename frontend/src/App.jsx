import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Navbar } from './component/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </>
  )
}

export default App
