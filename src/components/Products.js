import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Products.css'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://course-tutor-be.vercel.app/api/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
  };

  const handleAddToCart = (product) => {
    toast.success(`Added ${product.title} to your cart!`);
  };

  const handleEnroll = (product) => {
    toast.success(`Enrolled in ${product.title} Course!`);
  };

  const toggleFavorite = (productId) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [productId]: !prevFavorites[productId],
    }));
    toast(favorites[productId]
      ? `${productId} removed from favorites!`
      : `${productId} added to favorites!`);
  };

  const truncateText = (text, limit) => {
    return text.length > limit ? text.substring(0, limit) + '...' : text;
  };

  if (error) {
    return <p>Error: {error}</p>;
  }

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm) ||
      product.details.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="container">
      <ToastContainer />
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product._id} className="product-card animate-card">
            <img src={product.img_url} alt={product.title} className="product-image" />
            <div className="product-info">
              <h3>{product.title}</h3>
              <p>{truncateText(product.details, 150)}</p>
              <p><strong>Author:</strong> {product.author}</p>
              <p><strong>Price:</strong> ${product.price}</p>
              <p><strong>Duration:</strong> {product.duration}</p>

              <div className="product-actions">
                <button className="btn enroll-btn" onClick={() => handleEnroll(product)}>
                  Enroll Now
                </button>
                <button className="btn cart-btn" onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
                <button className="btn favorite-btn" onClick={() => toggleFavorite(product._id)}>
                  {favorites[product._id] ? '❤️' : '🤍'}
                </button>
              </div>
              <Link to={`/product-details/${product._id}`} className="details-link">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
