import React, { useState, useEffect } from 'react';
import '../App.css'; // Ensure this is pointing to your global CSS

const FeaturedMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5001/movies')
      .then(response => response.json())
      .then(data => setMovies(data.slice(0, 12))) // Limit to 10 movies
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
