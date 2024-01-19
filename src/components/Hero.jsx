import React from "react";
import { FaFacebookSquare, FaTelegramPlane } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import hero from "./../assets/original.jpg";
import { FaSearch } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="hero-section-container">
      <div className="hero-info-wrapper">
        <div className="hero-info-text">
          <h1>
            The <span className="highlighted">Decentralized</span> Cross-Chain
            Exchange
          </h1>
          <p className="hero-info-description">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <div className="search-container">
            <div className="search-input-wrapper">
              <FaSearch className="search" />
              <input
                className="search-input"
                placeholder="Search 5000+ tokens across 9 Chains..."
              ></input>
            </div>
            <button className="search-btn primary">
              <span className="start-swapping">Start Swapping</span>
            </button>
          </div>
          <div className="social-links-container">
            <div className="social-links">
              <a href="https://www.facebook.com" target="blank">
                <FaFacebookSquare />
              </a>
              <a href="https://web.telegram.org" target="blank">
                <FaTelegramPlane />
              </a>
              <a href="https://twitter.com" target="blank">
                <RxCross1 />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-image-container">
        <img src={hero} alt="hero-img" className="hero-img" />
      </div>
    </div>
  );
};

export default HeroSection;
