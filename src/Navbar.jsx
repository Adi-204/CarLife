import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from "react-router-dom";

export const Navbar = ()=>{
    return (
        <nav>
            <Link to='/' className='logo'>#CARLIFE</Link>
            <li>
                <ul><Link to='/about' className='nav-item'>About</Link></ul>
                <ul><Link to='/cars' className='nav-item'>Cars</Link></ul>
            </li>
        </nav>
    )
}

