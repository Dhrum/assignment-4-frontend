import React from 'react';
import './Footer.css'; // Import the CSS for the footer
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext'; // Import Auth Context


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-about">
          <h2>About Course Tutor</h2>
          <p>
            Your destination for mastering new skills and exploring the world of online education. With hundreds of courses led by top industry experts, we help you stay ahead in a fast-changing world.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/products">Explore Courses</Link></li>
            <li><Link to="/degrees">Online Degrees</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-social">
          <h3>Connect with Us</h3>
          <div className="footer-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
        </div>

      
        {/* Subscription Section */}
        <div className="footer-subscribe">
          <h3>Subscribe to Our Newsletter</h3>
          <p>Stay updated with the latest courses, tips, and exclusive offers. No spam, just education!</p>
          <form className="footer-form">
            <input type="email" placeholder="Enter your email" className="footer-input" />
            <button type="submit" className="footer-btn">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; 2024 Course Tutor. All rights reserved. | Terms of Service | Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;