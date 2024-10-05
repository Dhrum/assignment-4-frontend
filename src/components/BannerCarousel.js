// src/components/BannerCarousel.js
import React from 'react';
import { Carousel } from 'react-bootstrap';

// Import images directly
import img1 from '../assets/images/img1.jpeg';
import img2 from '../assets/images/img2.jpeg';
import img3 from '../assets/images/img3.jpg';

const BannerCarousel = () => {
  const slides = [
    {
      img: img1,
      title: 'Learn Web Development',
      description: 'Start your journey to becoming a web developer with our curated courses.',
      buttonText: 'Start Now',
    },
    {
      img: img2,
      title: 'Become a Digital Marketer',
      description: 'Master the art of digital marketing with real-world projects and certifications.',
      buttonText: 'Start Now',
    },
    {
      img: img3,
      title: 'Master Graphic Design',
      description: 'Enhance your creativity by learning graphic design from top industry experts.',
      buttonText: 'Start Now',
    },
  ];

  return (
    <Carousel>
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100 carousel-img" src={slide.img} alt={slide.title} />
          <Carousel.Caption>
            <h2 className="carousel-title">{slide.title}</h2>
            <p className="carousel-description">{slide.description}</p>
            <a href="#courses" className="btn btn-primary">{slide.buttonText}</a>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default BannerCarousel;
