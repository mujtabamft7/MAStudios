import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturedMovies from '../components/FeaturedMovies';
import FeaturedTVShows from '../components/FeaturedTVShows';
import ContentSection from '../components/ContentSection';


const HomePage = () => (
  <div>
    <Header />
    <HeroSection />
    <FeaturedMovies />
    <FeaturedTVShows />
    <ContentSection />
  </div>
);

export default HomePage;
