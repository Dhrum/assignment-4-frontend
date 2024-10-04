// src/components/Products.js
import React, { useEffect, useState } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://course-tutor-be.vercel.app/api/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product._id} className="product-card">
          <h3>{product.title}</h3>
          <p>{product.details}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
