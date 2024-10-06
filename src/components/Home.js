// src/components/Home.js
import React from 'react';
import BannerCarousel from './BannerCarousel';
import NewCourses from './NewCourses'; 
import PopularCourses from './PopularCourses'; 

import ReviewSubmissionForm from './ReviewSubmissionForm'; 

const Home = () => {
  return (
    <div className="container">
      <BannerCarousel />
      <NewCourses />
      <PopularCourses />
      {/* <PartnersSection /> */}
      <ReviewSubmissionForm />
    </div>
  );
};

export default Home;
