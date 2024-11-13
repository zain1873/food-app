// header.js
import React from 'react';
import "../../styles/header.css";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
      <Link to="/" className="navbar-brand d-flex align-items-center p-0">
        <i className="fa-solid fa-utensils me-3"></i>
        <h1 className="m-0">Restoran</h1>
      </Link>
      <button 
        className="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarCollapse"
      >
        <span className="fa fa-bars"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0 pe-4">
          <Link to="/" className="nav-item nav-link active">Home</Link>
          <Link to="/about" className="nav-item nav-link">About</Link>
          <Link to="/service" className="nav-item nav-link">Service</Link>
          <Link to="/menu" className="nav-item nav-link">Menu</Link>
          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Pages</a>
            <div className="dropdown-menu m-0">
              <Link to="/booking" className="dropdown-item">Booking</Link>
              <Link to="/our-team" className="dropdown-item">Our Team</Link>
              <Link to="/testimonial" className="dropdown-item">Testimonial</Link>
            </div>
          </div>
          <Link to="/contact" className="nav-item nav-link">Contact</Link>
        </div>
        <Link to="/booking" className="btn order_now py-2 px-4">Book A Table</Link>
      </div>
    </nav>
  );
}

export default Header;
