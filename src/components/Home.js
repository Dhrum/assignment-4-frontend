// src/components/Home.js
import React from 'react';
import ContactForm from './ContactForm';
import BannerCarousel from './BannerCarousel';

const Home = () => {
  return (
    <div className="container">
      <section className="carousel">
        <BannerCarousel />
      </section>

      <section>
        <h2>How It Works</h2>
        <p>Guidelines on how to use the website...</p>
      </section>

      <section>
        <h2>About Us</h2>
        <p>Details about the website owner...</p>
      </section>

      <ContactForm />

      <footer>
        <p>Address: 1234 Tutor Lane</p>
        <p>Contact: contact@tutor.com</p>
        <p>Social Links: [Social Media Links]</p>
      </footer>
    </div>
  );
};

export default Home;
