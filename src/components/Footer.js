import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-links">
      <div className="footer-column">
        <h4>Watch</h4>
        <ul>
          <li><a href="#">Spotlight</a></li>
          <li><a href="/movies">Movies</a></li>
          <li><a href="/tvshows">TV</a></li>
          <li><a href="#">Free</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>My Account</h4>
        <ul>
          <li><a href="#">My Vudu</a></li>
          <li><a href="#">Account</a></li>
          <li><a href="#">Settings</a></li>
          <li><a href="#">Manage Devices</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Features</h4>
        <ul>
          <li><a href="#">Lists</a></li>
          <li><a href="#">Family</a></li>
          <li><a href="#">Disc to Digital</a></li>
          <li><a href="#">InstaWatch</a></li>
          <li><a href="#">Movies Anywhere</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Help</h4>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Devices</a></li>
          <li><a href="#">Support</a></li>
          <li><a href="#">Forums</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Jobs</a></li>
        </ul>
      </div>
    </div>
    <div className="footer-social">
      <a href="https://www.linkedin.com/in/mujtabamft/"><i className="fab fa-linkedin"></i></a>
      <a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a>
      <a href="https://www.x.com"><i className="fab fa-twitter"></i></a>
      <a href="https://www.youtube.com"><i className="fab fa-youtube"></i></a>
    </div>
  </footer>
);

export default Footer;
