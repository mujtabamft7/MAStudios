import React, { useState, useEffect } from 'react';
import '../App.css'; 

const FeaturedTVShows = () => {
  const [tvShows, setTVShows] = useState([]);

  useEffect(() => {
    fetch('https://json-server-render-j2c0.onrender.com/tvShows')
      .then(response => response.json())
      .then(data => setTVShows(data.slice(0, 12))) 
      .catch(error => console.error('Error fetching TV shows:', error));
  }, []);

  return (
    <section className="featured-tv-shows">
      <h2>Featured TV Shows</h2>
      <div className="tv-show-grid">
        {tvShows.map((show) => (
          <div className="tv-show-item" key={show.id}>
            <div className="cf">
              <img src={show.posterUrl} alt={show.title} className="bottom" />
              <div className="top">
                <p>{show.title}</p>
                <p>{show.plot}</p>
                <p>Genre: {show.genres ? show.genres.join(', ') : 'N/A'}</p>
                <p>Year: {show.year}</p>
                <p>Rating: {show.rating}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedTVShows;
