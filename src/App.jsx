import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Applyjob from './pages/Applyjob'
import Application from './pages/Application'

function App() {
  return (
    <div className="text-center mt-10">
      
      <Routes>
        <Route path='' element={<Home></Home>}></Route>
        <Route path='/Application' element={<Application></Application>}></Route>
        <Route path='/Applyjob' element={<Applyjob></Applyjob>}></Route>

      </Routes>


    </div>
  )
}

export default App
