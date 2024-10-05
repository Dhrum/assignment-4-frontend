// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="navbar-logo">Course Tutor</h1>

        <ul className="navbar-menu">
          <li>
            <Link to="/explore">Explore</Link>
          </li>
          <li>
            <Link to="/career">Find your New Career</Link>
          </li>
          <li>
            <Link to="/degrees">Online Degrees</Link>
          </li>
        </ul>

        <div className="navbar-search">
          <input type="text" placeholder="What do you want to learn?" className="search-input" />
          <button className="search-button">
            <i className="fa fa-search"></i>
          </button>
        </div>

        <div className="navbar-right">
          <Link to="/login">Log In</Link>
          <button className="join-button">Join for Free</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
