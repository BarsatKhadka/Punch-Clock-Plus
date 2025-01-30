import { useState } from 'react'
import { MainPage } from './component/MainPage'
import { Navbar } from './component/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <MainPage/>
   
    </>
  )
}

export default App
