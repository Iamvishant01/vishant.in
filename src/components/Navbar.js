import React from 'react'


const handleAlert = (event) => {
    event.preventDefault(); // Prevent default navigation
    alert("Under construction!");
  };

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">iamvishant.in</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link " aria-current="page" href="/" onClick={handleAlert}>About</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categories
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/" onClick={handleAlert}>Philosophy</a></li>
                        <li><a className="dropdown-item" href="/" onClick={handleAlert}>Astrology</a></li>
                        <li><a className="dropdown-item" href="/" onClick={handleAlert}>The Learnings</a></li>
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
    </div>
  )
}
