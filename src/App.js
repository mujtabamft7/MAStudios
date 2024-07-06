import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import MoviesListingPage from './Pages/MoviesListingPage';
import TvShowsListing from './Pages/TvShowsListing';
import RegistrationPage from './Pages/RegistrationPage';
import LoginPage from './Pages/LoginPage';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div
        style={{
          backgroundColor: 'black',
          minHeight: '100vh',
          width: '100%',
        }}
      >
        <nav className="navbar">
          <div className="nav-left">
            <img src={`${process.env.PUBLIC_URL}/studio.jpeg`} alt="Studio Icon" style={{ marginRight: '10px' }} />
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/tvshows">TV Shows</Link>
          </div>
          <div className="nav-right">
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </div>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesListingPage />} />
            <Route path="/tvshows" element={<TvShowsListing />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
