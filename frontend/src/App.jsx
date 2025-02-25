import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MainPage } from './component/MainPage'
import { Navbar } from './component/Navbar'
import { Employees } from './component/Employees/Employees'
import { Shift } from './component/Shift/Shft'
import { useStore } from './store/store'

function App() {
  const { setAuthenticated } = useStore()
  
  useEffect(() => {
    // Check if JWT exists in localStorage on app initialization
    const token = localStorage.getItem("jwt")
    if (token) {
      setAuthenticated(true)
    }
  }, [setAuthenticated])

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
