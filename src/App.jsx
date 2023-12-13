import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from './Home';
import { About } from './About';
import { Navbar } from './Navbar';
import { Vans } from './Vans';

export const App =()=>{
  return(
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/about' element = {<About />} />
        <Route path='/vans' element = {<Vans />} />
      </Routes>
    </BrowserRouter>
  )
}


