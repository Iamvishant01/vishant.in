import React from 'react';
import { Link } from 'react-router-dom';

const handleAlert = (event) => {
  event.preventDefault(); // Prevent default navigation
  alert("Under construction!");
};

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">iamvishant.in</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={handleAlert}>About</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categories
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/astrology">Astrology</Link></li>
                <li><Link className="dropdown-item" to="#" onClick={handleAlert}>Philosophy</Link></li>
                <li><Link className="dropdown-item" to="#" onClick={handleAlert}>The Learnings</Link></li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-dark" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}