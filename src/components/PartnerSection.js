// src/components/PartnersSection.js
import React from 'react';
import './PartnerSection'; // Import the CSS for styling

const PartnersSection = () => {
  const logos = [
    'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg', // Microsoft
    'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', // React
    'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg', // Google
    'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png', // Facebook
    'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg', // ChatGPT
    'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg', // IBM
    'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg', // SAP
    'https://upload.wikimedia.org/wikipedia/commons/c/cb/Oracle_logo.svg', // Oracle
    'https://upload.wikimedia.org/wikipedia/commons/d/d5/Adobe_Systems_logo_and_wordmark.svg', // Adobe
    'https://upload.wikimedia.org/wikipedia/commons/5/5a/Intel_logo_%282020%29.svg', // Intel
    'https://upload.wikimedia.org/wikipedia/commons/6/6a/Slack_Icon.png', // Slack
    'https://upload.wikimedia.org/wikipedia/commons/a/a1/Amazon_Web_Services_Logo.svg' // AWS
  ];

  return (
    <div className="partners-section">
      <h2>Our Partners</h2>
      <div className="partners-grid">
        {logos.map((logo, index) => (
          <div key={index} className="partner-card">
            <img src={logo} alt={`Partner ${index + 1}`} className="partner-logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersSection;
