import React, { useState, useEffect } from 'react';
import '../App.css';

const HeroSection = () => {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 2;

  useEffect(() => {
    fetch('https://json-server-render-j2c0.onrender.com/movies')
      .then(response => response.json())
      .then(data => setMovies(data.slice(0, 102)))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + itemsPerSlide) % movies.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, [movies.length]);

  const getCurrentSlides = () => {
    let slides = [];
    for (let i = 0; i < itemsPerSlide; i++) {
      slides.push(movies[(currentIndex + i) % movies.length]);
    }
    return slides;
  };

  return (
    <section className="hero-section">
      <div className="hero-slider">
        {getCurrentSlides().map((movie, index) => (
          movie && movie.posterUrl && (
            <div className="slide" key={index}>
              <img src={movie.posterUrl} alt={movie.title} />
            </div>
          )
        ))}
      </div>
      <div className="hero-text">
        <h1>BLACK & WHITE CINEMA</h1>
        <p>Mix & Match 2 for $9.99</p>
      </div>
    </section>
  );
};

export default HeroSection;
