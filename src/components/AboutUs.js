import React from 'react';
import './AboutUs.css';
import ownerImage from '../assets/images/Owner.jpg'; // Import the owner's image

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="container">
        <div className="about-content">
          <div className="owner-image-container">
            <img src={ownerImage} alt="Abdur Rahim" className="owner-image" />
          </div>
          <div className="owner-details">
            <h2 className="owner-name">Abdur Rahim</h2>
            <p className="owner-title">Upazila ICT Officer, Sitakunda, Chattogram</p>
            <p className="owner-contact">
              <strong>Phone:</strong> +88 01711 152414<br />
              <strong>Email:</strong> <a href="mailto:rahim.c4d@gmail.com">rahim.c4d@gmail.com</a>
            </p>
            <p className="owner-description">
              Abdur Rahim is a dedicated ICT professional with years of experience in managing ICT infrastructure, supporting educational and governmental institutions, and fostering technological growth in the region. His passion for technology and education drives his continuous efforts to modernize digital learning and empower communities through IT solutions. With a deep understanding of the challenges and opportunities in the ICT sector, he is committed to advancing the digital landscape in Bangladesh.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
