import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Tailwind from './components/tailwind/Tailwind'
import './index.css'
import Login from './components/login/Login'
import TicTag from './components/tictac/TicTag'
import Game from './components/games/Game'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Tailwind />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/tictag' element={<TicTag />}></Route>
          <Route path='/game' element={<Game />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App