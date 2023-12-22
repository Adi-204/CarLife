import React from 'react';
import ReactDOM from 'react-dom/client';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = ()=>{
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

