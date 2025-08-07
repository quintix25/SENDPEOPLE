import React from 'react';
import { Link } from 'react-router-dom';
// import './Header.css'; // optional for styling

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li><Link to="/">Homepage</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;