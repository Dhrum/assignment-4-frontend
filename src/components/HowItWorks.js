import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="container">
        <h2 className="how-it-works-title">How It Works</h2>

        <div className="steps-grid">
          {/* Step 1: Explore Courses */}
          <div className="step-card">
            <div className="icon-box">
              <i className="fa fa-book icon"></i>
            </div>
            <h3>Explore Courses</h3>
            <p>Browse our wide selection of courses and find what fits your goals.</p>
          </div>

          {/* Step 2: Sign Up */}
          <div className="step-card">
            <div className="icon-box">
              <i className="fa fa-user-plus icon"></i>
            </div>
            <h3>Sign Up</h3>
            <p>Create an account to get started with your learning journey.</p>
          </div>

          {/* Step 3: Log In */}
          <div className="step-card">
            <div className="icon-box">
              <i className="fa fa-sign-in icon"></i>
            </div>
            <h3>Log In</h3>
            <p>Already have an account? Log in to access your dashboard and courses.</p>
          </div>

          {/* Step 4: Enroll in a Course */}
          <div className="step-card">
            <div className="icon-box">
              <i className="fa fa-graduation-cap icon"></i>
            </div>
            <h3>Enroll in a Course</h3>
            <p>Select a course, enroll, and start learning at your own pace.</p>
          </div>

          {/* Step 5: Start Learning */}
          <div className="step-card">
            <div className="icon-box">
              <i className="fa fa-laptop icon"></i>
            </div>
            <h3>Start Learning</h3>
            <p>Access course materials, track your progress, and enjoy learning.</p>
          </div>

          {/* Step 6: Get Certified */}
          <div className="step-card">
            <div className="icon-box">
              <i className="fa fa-certificate icon"></i>
            </div>
            <h3>Get Certified</h3>
            <p>Complete your course and receive a certification to boost your career.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
