import React from 'react';
import './Navbar.scss';
import {NavLink, Link} from 'react-router-dom';

function Navbar() {
  
  return (
    <nav className="navbar-container navbar navbar-expand-lg navbar-dark primary-background">
      <Link className="navbar-container__logo-link" to="/">
        <div className="navbar-brand d-flex align-items-center">
          <img src="https://static.thenounproject.com/png/40868-84.png" className="navbar-container__logo-img d-inline-block align-top" alt=""/>
          <div className="navbar-container__logo-text">
            <div className="navbar-container__logo-text-1">
              Little
            </div> 
            <div className="navbar-container__logo-text-2">
              Conquerors
            </div>
          </div>
        </div>
      </Link>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">

          <li className="nav-item">
            <NavLink activeClassName="selected-link"  exact to="/" className="nav-link"> Home </NavLink>
          </li>
          
          <li className="nav-item">
            <NavLink activeClassName="selected-link"  to="/gallery" className="nav-link"> Gallery </NavLink>
          </li>

          <li className="nav-item">
            <NavLink activeClassName="selected-link" to="/exercises" className="nav-link"> Exercises </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
