// src/components/ProductDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css'; // Add your CSS for details page

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://course-tutor-be.vercel.app/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className='container'>
    <div className="product-details">
      <img src={product.img_url} alt={product.title} className="product-details-image" />
      <div className="product-details-info">
        <h1>{product.title}</h1>
        <p>{product.details}</p>
        <p><strong>Author:</strong> {product.author}</p>
        <p><strong>Duration:</strong> {product.duration}</p>
        <p><strong>Price:</strong> ${product.price}</p>
        <button className="btn enroll-btn">Enroll Now</button>
        <button className="btn cart-btn">Add to Cart</button>
      </div>
    </div>
    </div>
  );
};

export default ProductDetails;
