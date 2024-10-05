import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Company</h3>
          <p>About Us</p>
          <p>Contact</p>
          <p>Careers</p>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <p>New Courses</p>
          <p>Popular Courses</p>
          <p>Partners</p>
        </div>
        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
            <a href="#"><i className="fa fa-instagram"></i></a>
            <a href="#"><i className="fa fa-linkedin"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Course Tutor. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
