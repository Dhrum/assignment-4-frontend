// src/components/BannerCarousel.js
import React from 'react';
import { Carousel } from 'react-bootstrap';

const BannerCarousel = () => {
  const images = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg',
  ];

  return (
    <Carousel>
      {images.map((img, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={img} alt={`Slide ${index + 1}`} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default BannerCarousel;
