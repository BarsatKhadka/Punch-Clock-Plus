import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MainPage } from './component/MainPage'
import { Navbar } from './component/Navbar'
import { Employees } from './component/Employees/Employees'
import { Shift } from './component/Shift/Shft'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/shift" element={<Shift/>}/>
      </Routes>
    </Router>
  )
}

export default App
