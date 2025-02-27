import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <h3 className="navbar-brand" href="#">Campus Kids Shoes</h3>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mx-3">  
              <Link to='/Home' className="nav-link active" aria-current="page" href="#">Home</Link>
            </li>
            <li className="nav-item mx-3">  
              <Link to='/About' className="nav-link" href="#">About</Link>
            </li>
            <li className="nav-item mx-3">  
              <Link to='/Contact' className="nav-link" href="#">Contact</Link>   
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          <Link to="/Login" className="btn btn-primary mx-5">Login</Link>
          <Link to="/Portfolio" className="btn btn-primary mx-5">Portfolio</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
