import React, { useState, useEffect } from 'react';
import '../App.css'; 
import { getAllTVShows } from '../Axios'; // Import Axios function

const FeaturedTVShows = () => {
  const [tvShows, setTVShows] = useState([]);

  useEffect(() => {
    getAllTVShows()
      .then(response => setTVShows(response.data.slice(0, 12))) 
      .catch(error => console.error('Error fetching TV shows:', error));
  }, []);

  return (
    <section className="featured-tv-shows">
      <h2>Featured TV Shows</h2>
      <div className="tv-show-grid">
        {tvShows.map((show) => (
          <div className="tv-show-item" key={show.showId}>
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
