import { useState } from 'react'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Tools from './pages/Tools'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Feed from './components/Feed'
import './css/App.css'

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY })
  }

  return (
    <>
      <Router>
        <div
          className="background"
          onMouseMove={handleMouseMove}
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.3), transparent 100%), linear-gradient(90deg, rgba(15,20,19,1) 0%, rgba(10,69,82,1) 45%, rgba(33,4,93,1) 100%)`,
          }}
        >
          <Navbar />
          <div className="page-flex">
            <Feed />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/proyectos" element={<Projects />} />
              <Route path="/herramientas" element={<Tools />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
