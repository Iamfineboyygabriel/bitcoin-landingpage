import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";

export default function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded((prevIsExpanded) => !prevIsExpanded);
  };

  // Function to close the menu when a link is clicked
  const closeMenu = () => {
    setIsExpanded(false);
  };

  return (
    <div className="header-container">
      <Link to="/" className="logo">
        Gabriel
      </Link>
      <div className="menu">
        <div className="menu-links">
          {/* Add onClick to close menu */}
          <Link to="/#" onClick={closeMenu}>
            App
          </Link>
          <Link to="/products" onClick={closeMenu}>
            Products
          </Link>
          <Link to="/#Build" onClick={closeMenu}>
            Build
          </Link>
          <Link to="/#careers" onClick={closeMenu}>
            Careers
          </Link>
          <Link to="/#About" onClick={closeMenu}>
            About
          </Link>
        </div>
      </div>
      <div className="wallet-btn">
        <button className="primary">Enter App</button>
      </div>
      <button className="hamburger" onClick={toggleExpanded}>
        <IoMdMenu />
      </button>
      {isExpanded && (
        <div className="menu-overlay">
          <div className="menu-links">
            {/* Add onClick to close menu */}
            <Link to="/#" onClick={closeMenu}>
              App
            </Link>
            <Link to="/products" onClick={closeMenu}>
              Products
            </Link>
            <Link to="/build" onClick={closeMenu}>
              Build
            </Link>
            <Link to="/#careers" onClick={closeMenu}>
              Careers
            </Link>
            <Link to="/#About" onClick={closeMenu}>
              About
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
