// src/components/CourseCard.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './CourseCard.css'; // CSS for card design

const CourseCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  // Toggle the favorite status and show toast
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    if (!isFavorite) {
      toast.success(`${product.title} is added to favorites!`);
    } else {
      toast.info(`${product.title} is removed from favorites!`);
    }
  };

  // Truncate text to 100 characters
  const truncateText = (text, limit) => {
    if (text.length > limit) {
      return text.substring(0, limit) + '...';
    }
    return text;
  };

  return (
    <div className="course-card">
      <img src={product.img_url} alt={product.title} className="course-image" />
      <div className="course-info">
        <h3>{product.title}</h3>
        <p>
          {truncateText(product.details, 100)}{' '}
          <Link to={`/product-details/${product._id}`} className="see-details-link">
            See Details
          </Link>
        </p>
        <div className="course-actions">
          <button className="btn enroll-btn">Enroll Now</button>
          <button className="btn cart-btn">Add to Cart</button>
          <button className="favorite-btn" onClick={toggleFavorite}>
            {isFavorite ? '❤️' : '🤍'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
