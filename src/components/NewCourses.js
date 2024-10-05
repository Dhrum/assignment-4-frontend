import React from 'react';
import './NewCourses.css';

const NewCourses = () => {
  const courses = [
    { title: "ReactJS Basics", image: "/path/to/img1.jpg", description: "Learn React from scratch." },
    { title: "Advanced JavaScript", image: "/path/to/img2.jpg", description: "Master advanced JS topics." },
    { title: "Web Design 101", image: "/path/to/img3.jpg", description: "Design professional websites." }
  ];

  return (
    <section className="new-courses">
      <h2>New Courses <a href="/new-courses">Select All</a></h2>
      <div className="courses-container">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <img src={course.image} alt={course.title} />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewCourses;
