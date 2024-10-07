// src/components/Home.js
import React from 'react';
import BannerCarousel from './BannerCarousel';
import NewCourses from './NewCourses'; 
import PopularCourses from './PopularCourses'; 
import HowItWorks from './HowItWorks';

import ReviewSubmissionForm from './ReviewSubmissionForm'; 
import AboutUs from './AboutUs';

const Home = () => {
  return (
    <div className="container">
      <BannerCarousel />
      <HowItWorks/>
      <NewCourses />
      <PopularCourses />
      
      <ReviewSubmissionForm />
      <AboutUs/>
    </div>
  );
};

export default Home;
