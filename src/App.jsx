import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      {/* <Route path='*' element={<NotFound />} /> */}
    </Routes>
  )
}

export default App
