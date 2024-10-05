import React from 'react';
import './PartnerSection.css';

const PartnersSection = () => {
  const partners = [
    { name: "Company A", logo: "/path/to/logo1.png" },
    { name: "Company B", logo: "/path/to/logo2.png" },
    { name: "Company C", logo: "/path/to/logo3.png" },
    { name: "Company D", logo: "/path/to/logo4.png" }
  ];

  return (
    <section className="partners-section">
      <h2>Our Partners</h2>
      <div className="partners-container">
        {partners.map((partner, index) => (
          <div className="partner-card" key={index}>
            <img src={partner.logo} alt={partner.name} />
            <p>{partner.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;
