// client/src/Navbar/Navbar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <header>
      <div className="logo">My Fashion</div>
      <nav>
        <ul>
          <li className="nav-item">
            <Link to="/" className={`nav-link ${location.pathname === "/" ? "active-link" : ""}`}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/collection" className={`nav-link ${location.pathname === "/collection" ? "active-link" : ""}`}>
              Collection
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about-us" className={`nav-link ${location.pathname === "/about-us" ? "active-link" : ""}`}>
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className={`nav-link ${location.pathname === "/contact" ? "active-link" : ""}`}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;