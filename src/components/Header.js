import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <h1>Bookstore CMS</h1>
    <nav className="navbar">
      <NavLink to="/" className="navitem">Books</NavLink>
      <NavLink to="/categories" className="navitem">Categories</NavLink>
    </nav>
  </header>
);

export default Header;
