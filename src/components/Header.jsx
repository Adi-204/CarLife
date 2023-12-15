import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleClose = () =>{
    setMobileMenuOpen(false);
  };

  return (
    <header>
      <Link to="/" className={`${isMobileMenuOpen ? 'mobile-logo' : 'logo'}`} 
      onClick={toggleClose}>
        #VANLIFE
      </Link>
      <button className="menu-toggle" onClick={toggleMobileMenu}>
        &#9776; Menu 
      </button>
      <nav>
        <ul className={isMobileMenuOpen ? 'mobile-nav nav-open mobile-nav-open' : ''}>
          <li>
            <Link to="/host" className="nav-item" onClick={toggleClose}>
              Host
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-item" onClick={toggleClose}>
              About
            </Link>
          </li>
          <li>
            <Link to="/vans" className="nav-item" onClick={toggleClose}>
              Vans
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
