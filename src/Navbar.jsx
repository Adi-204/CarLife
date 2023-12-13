import React from 'react';
import ReactDOM from 'react-dom/client';
import { Link } from "react-router-dom";

export const Navbar = ()=>{
    return (
        <nav>
            <Link to='/' className='logo'>#VANLIFE</Link>
            <li>
                <ul><Link to='/about' className='nav-item'>About</Link></ul>
                <ul><Link to='/vans' className='nav-item'>Vans</Link></ul>
            </li>
        </nav>
    )
}

