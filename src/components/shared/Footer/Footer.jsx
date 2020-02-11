import React from "react";
import './Footer.scss'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-container d-flex flex-column justify-content-center navbar-dark primary-background">
       <div className="footer-container__link d-flex justify-content-center">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/gallery" className="nav-link">Gallery</Link>
        <Link to="/exercises" className="nav-link">Exercises</Link>
      </div>
      <div className="footer-container__icons d-flex justify-content-center">

        <a 
          target="_blank"
          rel="noopener noreferrer" 
          href="https://www.facebook.com/alexa.duarte.319" 
          className="footer-container__icon navbar-brand">
            <i className="fab fa-facebook-f"></i>
        </a>

        <a 
        target="_blank"
        rel="noopener noreferrer"  
        href="https://www.twitter.com/a_duarte95?s=08"
        className="footer-container__icon navbar-brand">
          <i className="fab fa-twitter"></i>
        </a>

        <a 
        target="_blank"
        rel="noopener noreferrer"  
        href=" https://www.instagram.com/alecsa95/?hl=es-la"
        className="footer-container__icon navbar-brand">
          <i className="fab fa-instagram"></i>
        </a>

      </div>
    </footer>
  );
}

export default Footer;
