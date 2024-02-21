
import React from 'react';
import '../assets/nav.css';

function Navbar() {
  return (
    <div id="top">
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">About</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Contact</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Enquiries</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Report</a>
        </li>
        <li className="nav-item search">
          <input type="text" placeholder="Search..." className="search-box" />
        </li>
      </ul>
    </nav>
    </div>
  );
}

export default Navbar;
