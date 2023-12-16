import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Vans } from './pages/vans/Vans';
import { VanDetail } from './pages/vans/VanDetail';
import { Layout } from './components/Layout';
import { HostLayout } from './components/HostLayout';
import { Dashboard } from './pages/host/Dashboard';
import { Income } from './pages/host/Income';
import { Review } from './pages/host/Review';
import { HostVans } from './pages/host/HostVans';
import { HostVanDetail } from './pages/host/HostVanDetail';
import { HostVanInfo } from './pages/host/HostVanInfo';
import { HostVanPrice } from './pages/host/HostVanPrice';
import { HostVanPhoto } from './pages/host/HostVanPhoto';

export const App =()=>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Layout />}>
          <Route index element = {<Home />} />
          <Route path='about' element = {<About />} />
          <Route path='vans' element = {<Vans />} />
          <Route path='vans/:id' element = {<VanDetail />} />

          <Route path='/host' element = {<HostLayout />} >
            <Route index element = {<Dashboard />} />
            <Route path='income' element = {<Income />} />
            <Route path='reviews' element = {<Review />} />
            <Route path='vans' element={<HostVans />} />

            <Route path='vans/:id' element={<HostVanDetail />} >
                <Route index element = {<HostVanInfo />} />
                <Route path='pricing' element = {<HostVanPrice />} />
                <Route path='photos' element = {<HostVanPhoto />} />
            </Route>

          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}
