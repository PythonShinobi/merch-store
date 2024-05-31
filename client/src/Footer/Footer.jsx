// client/src/Footer/Footer.jsx
import React from "react";
import { FaTiktok, FaTwitter, FaReddit } from 'react-icons/fa';

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="social-icons">
        <a href="https://www.tiktok.com/@_mangapanels" target="_blank" rel="noopener noreferrer">
          <FaTiktok size={20} />
        </a>
        <a href="https://twitter.com/PythonShinobi" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={20} />
        </a>
        <a href="https://www.reddit.com/user/thebadestuchiha1234/" target="_blank" rel="noopener noreferrer">
          <FaReddit size={20} />
        </a>
      </div>
      <p>&copy; 2024 My Fashion. All rights reserved.</p>
    </footer>
  );
};

export default Footer;