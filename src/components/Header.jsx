import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleClose = () =>{
    setMobileMenuOpen(false);
  };

  const styles = {
      fontWeight: "bold",
      textDecoration: "underline",
      color: "#161616"
  }

  return (
    <header>
      <NavLink to="/" className={`${isMobileMenuOpen ? 'mobile-logo' : 'logo'}`} 
      onClick={toggleClose}>
        #VANLIFE
      </NavLink>
      <button className="menu-toggle" onClick={toggleMobileMenu}>
        &#9776; Menu 
      </button>
      <nav>
        <ul className={isMobileMenuOpen ? 'mobile-nav nav-open mobile-nav-open' : ''}>
          <li>
            <NavLink 
            to="/host" 
            className="nav-item" 
            onClick={toggleClose}
            style={({isActive})=> isActive ? styles : null}
            >
              Host
            </NavLink>
          </li>
          <li>
            <NavLink 
            to="/about" 
            className="nav-item" 
            onClick={toggleClose}
            style={({isActive})=> isActive ? styles : null}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
            to="/vans" 
            className="nav-item" 
            onClick={toggleClose}
            style={({isActive})=> isActive ? styles : null}
            >
              Vans
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
