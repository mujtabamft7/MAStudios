import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-links">
      <div className="footer-column">
        <h4>Watch</h4>
        <ul>
          <li><a href="https://www.example.com/spotlight">Spotlight</a></li>
          <li><a href="/movies">Movies</a></li>
          <li><a href="/tvshows">TV</a></li>
          <li><a href="https://www.example.com/free">Free</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>My Account</h4>
        <ul>
          <li><a href="https://www.example.com/my-vudu">My Vudu</a></li>
          <li><a href="https://www.example.com/account">Account</a></li>
          <li><a href="https://www.example.com/settings">Settings</a></li>
          <li><a href="https://www.example.com/manage-devices">Manage Devices</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Features</h4>
        <ul>
          <li><a href="https://www.example.com/lists">Lists</a></li>
          <li><a href="https://www.example.com/family">Family</a></li>
          <li><a href="https://www.example.com/disc-to-digital">Disc to Digital</a></li>
          <li><a href="https://www.example.com/instawatch">InstaWatch</a></li>
          <li><a href="https://www.example.com/movies-anywhere">Movies Anywhere</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Help</h4>
        <ul>
          <li><a href="https://www.example.com/about-us">About Us</a></li>
          <li><a href="https://www.example.com/devices">Devices</a></li>
          <li><a href="https://www.example.com/support">Support</a></li>
          <li><a href="https://www.example.com/forums">Forums</a></li>
          <li><a href="https://www.example.com/contact-us">Contact Us</a></li>
          <li><a href="https://www.example.com/jobs">Jobs</a></li>
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
