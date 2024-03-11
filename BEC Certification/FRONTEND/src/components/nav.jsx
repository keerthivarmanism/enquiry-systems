

import React from 'react';
import '../assets/nav.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div id="top">
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/home" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
          {/* <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li> */}
          <li className="nav-item">
            <Link to="/enquiry" className="nav-link">Enquiries</Link>
          </li>
          <li className="nav-item">
            <Link to="/report" className="nav-link">Report</Link>
          </li>
          <li className="nav-item">
            <Link to="/course" className="nav-link">Course</Link>
          </li>


          <li className="nav-item profile">
            <Link to="/profile" className="nav-link">Profile</Link>
          </li>

          <li className="nav-item profile">
            <Link to="/applied" className="nav-link">AppliedCourse</Link>
          </li>
          

          <li className="nav-item search">
            <input type="text" placeholder="Search..." className="search-box" />
          </li>

          <Link to="/"><button className="btn btn-sm">Logout</button></Link>

          

        </ul>
      </nav>
    </div>
  );
}

export default Navbar;


