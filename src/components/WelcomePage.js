// src/components/WelcomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage.css'; // Import your CSS for the page

const WelcomePage = () => {
  return (
    <div className="welcome-container">
      <h1>Welcome to Course Tutor!</h1>
      <p>Thank you for signing up. We are excited to have you onboard.</p>
      <Link to="/products" className="explore-button">Start Exploring Courses</Link>
    </div>
  );
};

export default WelcomePage;
