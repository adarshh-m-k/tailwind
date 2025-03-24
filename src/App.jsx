import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Tailwind from './components/tailwind/Tailwind'
import './index.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Tailwind />}></Route></Routes>
      </BrowserRouter>
    </div>
  )
}

export default App