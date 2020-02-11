import React from "react";
import './Footer.scss'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-container d-flex justify-content-center navbar-dark">
      <div className="footer-container__icons d-flex justify-content-center">
        <Link to="/" className="navbar-brand"><i className="fab fa-facebook-f"></i></Link>
        <Link to="/" className="navbar-brand"><i className="fab fa-twitter"></i></Link>
        <Link to="/" className="navbar-brand"><i className="fab fa-instagram"></i></Link>
      </div>
    </footer>
  );
}

export default Footer;
