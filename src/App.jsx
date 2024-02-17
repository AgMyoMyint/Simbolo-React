import { useState } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Dashboard />
      <Contact />
    </>
  )
}

export default App
