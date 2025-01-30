import { useState } from 'react'
import { MainPage } from './component/MainPage'
import { Navbar } from './component/Navbar'
import { TestPage } from './component/TestPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <MainPage/>
    {/* <TestPage/> */}
   
    </>
  )
}

export default App
