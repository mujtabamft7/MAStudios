import React, { useState, useEffect } from 'react';
import '../App.css'; 

const FeaturedMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://json-server-render-j2c0.onrender.com/movies')
      .then(response => response.json())
      .then(data => setMovies(data.slice(0, 12)))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  return (
    <section className="featured-movies">
      <h2>Featured Movies</h2>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div className="movie-item" key={movie.id}>
            <div className="cf">
              <img src={movie.posterUrl} alt={movie.title} className="bottom" />
              <div className="top">
                <p>{movie.title}</p>
                <p>{movie.plot}</p>
                <p>Genre: {movie.genres ? movie.genres.join(', ') : 'N/A'}</p>
                <p>Year: {movie.year}</p>
                <p>Rating: {movie.rating}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedMovies;
