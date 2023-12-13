import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from './Home';
import { About } from './About';
import { Navbar } from './Navbar';
import { Vans } from './Vans';
import { VanDetail } from './VanDetail';

export const App =()=>{
  return(
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/about' element = {<About />} />
        <Route path='/vans' element = {<Vans />} />
        <Route path='/vans/:id' element = {<VanDetail />} />
      </Routes>
    </BrowserRouter>
  )
}


