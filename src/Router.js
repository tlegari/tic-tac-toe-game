import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Details from './Pages/Details/Details';
import { Game } from './Pages/Game/Game';

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='' element={Home}></Route>
        <Route path='/details' element={Details}></Route>
        <Route path='/game-on' element={Game}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Router