import React from 'react';
import './Navbar.css';


const Navbar = () => {


  return(
    <nav>
      <div className="menu-icon">
          <i className="fa fa-bars fa-2x"></i>
      </div>
      <div className="logo">
        <i className="fas fa-dollar-sign fa-lg"></i>
        <span>Currency Exchange</span>
      </div>
      <div className="menu">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">Currencies</a></li>
          <li><a href="/">Convert</a></li>
        </ul>
      </div>
    </nav>
  )
}


export default Navbar