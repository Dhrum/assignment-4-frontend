import React from 'react';
import './PopularCourse.css';

const PopularCourses = () => {
  const courses = [
    { title: "Full-Stack Development", image: "/path/to/img4.jpg", description: "Master both frontend and backend development." },
    { title: "Digital Marketing Pro", image: "/path/to/img5.jpg", description: "Become a pro in digital marketing strategies." },
    { title: "Graphic Design Mastery", image: "/path/to/img6.jpg", description: "Design stunning visuals and graphics." }
  ];

  return (
    <section className="popular-courses">
      <h2>Popular Courses <a href="/popular-courses">Select All</a></h2>
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

export default PopularCourses;
