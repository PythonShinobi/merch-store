// client/src/Navbar/Navbar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoClose, IoMenu} from "react-icons/io5";

import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  // Function to toggle the visibility of the menu.
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  // Function to close the menu on mobile devices.
  const closeMenuOnMobile = () => {
    // Close the menu if the window width is less than or equal to 1150px.
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };

  return (
    <header>
      <div className="logo">My Fashion</div>
      <nav>
      <div className={`nav-menu ${showMenu ? "show-menu" : ""}`} id="nav-menu">
        <ul>
          <li>
            <Link to="/" className={`nav-link ${location.pathname === "/" ? "active-link" : ""}`} onClick={closeMenuOnMobile}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/collection" className={`nav-link ${location.pathname === "/collection" ? "active-link" : ""}`} onClick={closeMenuOnMobile}>
              Collection
            </Link>
          </li>
          <li>
            <Link to="/about-us" className={`nav-link ${location.pathname === "/about-us" ? "active-link" : ""}`} onClick={closeMenuOnMobile}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className={`nav-link ${location.pathname === "/contact" ? "active-link" : ""}`} onClick={closeMenuOnMobile}>
              Contact
            </Link>
          </li>
        </ul>
        <div className="nav-close" id="nav-close" onClick={toggleMenu}><IoClose /></div>
      </div>

      <div className="nav-toggle" id="nav-toggle" onClick={toggleMenu}><IoMenu /></div>  
      </nav>
    </header>
  );
};

export default Navbar;