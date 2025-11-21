import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Applyjob from './pages/Applyjob'
import Application from './pages/Application'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/application" element={<Application />} />
        <Route path="/applyjob" element={<Applyjob />} />
      </Routes>
    </>
  )
}

export default App
