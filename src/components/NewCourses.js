// src/components/NewCourses.js
import React, { useEffect, useState } from 'react';
import CourseCard from './CourseCard'; // Import the reusable CourseCard component
import './NewCourses.css';

const NewCourses = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://course-tutor-be.vercel.app/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        const shuffled = data.sort(() => 0.5 - Math.random());
        setProducts(shuffled.slice(0, 3)); // Select 3 random products
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="new-courses">
      <h2>New Courses</h2>
      <div className="course-list">
        {products.map((product) => (
          <CourseCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default NewCourses;
