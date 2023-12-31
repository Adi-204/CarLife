import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider 
} from "react-router-dom";
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Vans , loader as vanLoader } from './pages/vans/Vans';
import { VanDetail, loader as vanDetailLoader } from './pages/vans/VanDetail';
import { Layout } from './components/Layout';
import { HostLayout } from './components/HostLayout';
import { Dashboard , loader as dashboardLoader } from './pages/host/Dashboard';
import { Income } from './pages/host/Income';
import { Review } from './pages/host/Review';
import { HostVans, loader as hostVanLoader } from './pages/host/HostVans';
import { HostVanDetail, loader as hostVanDetailLoader } from './pages/host/HostVanDetail';
import { HostVanInfo } from './pages/host/HostVanInfo';
import { HostVanPrice } from './pages/host/HostVanPrice';
import { HostVanPhoto } from './pages/host/HostVanPhoto';
import { NotFound } from './pages/NotFound';
import { Error } from './components/Error';



const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element = {<Layout />}>
    <Route index element = {<Home />} />
    <Route path='about' element = {<About />} />
    <Route 
        path='vans' 
        element = {<Vans />}  
        loader={vanLoader} 
        errorElement={<Error />}
    />
    <Route 
        path='vans/:id' 
        element = {<VanDetail />} 
        loader={vanDetailLoader}
    />

    <Route path='host' element = {<HostLayout />} >
      <Route 
        index 
        element = {<Dashboard />}
        loader={dashboardLoader} 
      />
      <Route 
        path='income' 
        element = {<Income />}
      />
      <Route 
        path='reviews'
        element = {<Review />}
      />
      <Route 
          path='vans' 
          element={<HostVans />} 
          loader={hostVanLoader}
      />

      <Route 
        path='vans/:id' 
        element={<HostVanDetail />} 
        loader={hostVanDetailLoader}
      >
          <Route 
            index 
            element = {<HostVanInfo />}
            
          />
          <Route 
            path='pricing' 
            element = {<HostVanPrice />}
            
          />
          <Route 
            path='photos' 
            element = {<HostVanPhoto />}
            
          />
      </Route>

    </Route>
    <Route path='*' element = {<NotFound />} />
  </Route>
))

export const App =()=>{
  return(
    <RouterProvider router={router} />
  )
}

