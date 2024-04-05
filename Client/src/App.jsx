import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Createdashboard from './pages/Createdashboard'


const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/create" element={<Createdashboard/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App