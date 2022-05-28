import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../src/components/Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <NavLink
        to="/"
        /*   className={({ isActive }) => (isActive ? 'active' : 'noActive')} */
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        /*  className={({ isActive }) => (isActive ? 'active' : 'noActive')} */
      >
        About
      </NavLink>
    </nav>
  );
};

export default Navbar;
