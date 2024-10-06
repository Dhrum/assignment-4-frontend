// src/components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext'; // Import Auth Context
import './Navbar.css'; // Import the Navbar CSS
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../assets/images/favicon.png';

const Navbar = () => {
  const { user, logout } = useAuth(); // Access the user and logout function from AuthContext
  const navigate = useNavigate(); // For navigation

  const handleLogout = async () => {
    try {
      await logout(); // Log the user out
      navigate('/'); // Redirect to home page after logout
      

    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo as a link to the home page without underline */}
        <h1 className="navbar-logo">
          <Link to="/" className="logo-link">
          <img src={logo} alt="Course Tutor Logo" className="logo-image" /> {/* Logo */}
          Course Tutor
          </Link>
        </h1>

        <ul className="navbar-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Products">Explore Courses</Link>
          </li>
          <li>
            <Link to="/Products">Online Degrees</Link>
          </li>
        </ul>

        <div className="navbar-search">
          <input type="text" placeholder="What do you want to learn?" className="search-input" />
          <button className="search-button">
            <i className="fa fa-search"></i>
          </button>
        </div>

        <div className="navbar-right">
          {user ? (
            <>
              {user.photoURL ? (
                <img src={user.photoURL} alt="Profile" className="user-image" />
              ) : ""}
              <span className='userDisplayName'>{user.displayName ? user.displayName : user.email}</span> 
              <button className="join-button" onClick={handleLogout}>
                Logout
              </button> {/* Logout button */}
            </>
          ) : (
            <>
              <Link to="/login">Log In</Link>
              <Link to="/signup" className="join-button">Join for Free</Link> {/* Signup button */}
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
