// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import Login from './components/Login';
import Signup from './components/Signup';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute'; // Import the ProtectedRoute
import WelcomePage from './components/WelcomePage';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: '70px' }}> {/* Add padding here to avoid overlap */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* Protect the products and product-details routes */}
        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          }
        />
        <Route
          path="/degrees"
          element={
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          }
        />
        <Route
          path="/product-details/:id"
          element={
            <ProtectedRoute>
              <ProductDetails />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
        <Route path="/welcome" element={<WelcomePage/>}/>
        <Route path="/about" element={<AboutUs />}/>
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
