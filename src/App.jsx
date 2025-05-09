import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Tailwind from './components/tailwind/Tailwind'
import './index.css'
import Login from './components/login/Login'
import TicTag from './components/tictac/TicTag'
import Game from './components/games/Game'
import Pagination from './components/pagination/Pagination'
import Sample from './components/sample/Sample'
import SingleDish from './components/singleDish/SingleDish'
import Sample2 from './components/sample2/Sample2'
import Inputs from './components/inputs/Inputs'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Tailwind />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/tictag' element={<TicTag />}></Route>
          <Route path='/game' element={<Game />}></Route>
          <Route path='/pagination' element={<Pagination />}></Route>
          <Route path='/sample' element={<Sample />}></Route>
          <Route path='/sample2' element={<Sample2 />}></Route>
          <Route path='/input' element={<Inputs />}></Route>
          <Route path='/dish/:id' element={<SingleDish />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App