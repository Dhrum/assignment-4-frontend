// src/components/Home.js
import React from 'react';
import BannerCarousel from './BannerCarousel';
import ContactForm from './ContactForm';

const Home = () => {
  return (
    <div>
      <BannerCarousel />
      <section>
        <h2>How It Works</h2>
        <p>Guidelines on how to use the website...</p>
      </section>
      <section>
        <h2>About Us</h2>
        <p>Details about the website owner...</p>
      </section>
      <ContactForm />
    </div>
  );
};

export default Home;
