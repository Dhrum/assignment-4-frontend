import React from 'react';
import Navbar from './components/Navbar'; // Default import
import BannerCarousel from './components/BannerCarousel'; // Default import
import NewCourses from './components/NewCourses'; // Default import
import PopularCourses from './components/PopularCourses'; // Default import
import PartnersSection from './components/PartnerSection'; // Default import
//import ReviewsSection from './components/review'; // Default import
import ReviewSubmissionForm from './components/ReviewSubmissionForm'; // Default import
import Footer from './components/Footer'; // Default import
import './App.css'; // Global CSS

function App() {
  return (
    <div>
      <Navbar />
      <BannerCarousel />
      <NewCourses />
      <PopularCourses />
      <PartnersSection />
      {/* <ReviewsSection /> */}
      <ReviewSubmissionForm />
      <Footer />
    </div>
  );
}

export default App;
