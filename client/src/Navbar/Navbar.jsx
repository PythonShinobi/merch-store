// client/src/Navbar/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import { IoClose, IoMenu} from "react-icons/io5";

import "./Navbar.css";

const Navbar = () => {  
  const navRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("");

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

  useEffect(() => {
    // Select all sections in the document
    const sections = document.querySelectorAll("section");
  
    // Define options for the IntersectionObserver
    const options = {
      root: null, // Use the viewport as the container
      rootMargin: "0px", // No margin around the root
      threshold: 0.6, // Trigger callback when 60% of the section is visible
    };
  
    // Create a new IntersectionObserver instance
    const observer = new IntersectionObserver((entries) => {
      // Iterate over each entry (section) being observed
      entries.forEach((entry) => {
        // Check if the section is currently intersecting (visible)
        if (entry.isIntersecting) {
          // Update the active section state with the current section's ID
          setActiveSection(entry.target.id);
        }
      });
    }, options);
  
    // Observe each section
    sections.forEach((section) => {
      observer.observe(section);
    });
  
    // Cleanup function to unobserve sections when component unmounts
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);  

  // An event listener to detect clicks outside of the navigation menu.
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If the click event target is not within the navigation menu 
			//  set showMenu state to false.
      if (navRef.current && !navRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header>
      <div className="logo">My Fashion</div>
      <nav ref={navRef}>
        <div className={`nav-menu ${showMenu ? "show-menu" : ""}`} id="nav-menu">
          <ul>
            <li>
              <a href="#hero" className={`nav-link ${activeSection === "hero" ? "active-link" : ""}`} onClick={closeMenuOnMobile}>
                Home
              </a>
            </li>
            <li>
              <a href="#t-shirts" className={`nav-link ${activeSection === "t-shirts" ? "active-link" : ""}`} onClick={closeMenuOnMobile}>
                Merch
              </a>
            </li>
            <li>
              <a href="#about" className={`nav-link ${activeSection === "about" ? "active-link" : ""}`} onClick={closeMenuOnMobile}>
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className={`nav-link ${activeSection === "contact" ? "active-link" : ""}`} onClick={closeMenuOnMobile}>
                Contact
              </a>
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