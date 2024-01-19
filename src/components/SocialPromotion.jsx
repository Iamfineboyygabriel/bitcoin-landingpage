import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import { FaYoutubeSquare } from "react-icons/fa";
import { RiDiscordLine } from "react-icons/ri";
import { FaBlog } from "react-icons/fa";
import { RiFilePaper2Line } from "react-icons/ri";

export default function SocialPromotion() {
  return (
    <div className="social-media-promotion-container">
      <Card>
        <>
          <div className="social-media-promotion-text">
            <h2>
              <span className="higlighted">Join</span> our community
            </h2>
          </div>
          <div className="social-media-promotion-icons">
            <Link to="https://www.youtube.com" target="blank">
              <FaYoutubeSquare />
            </Link>
            <Link to="https://discord.com/">
              <RiDiscordLine />
            </Link>
            <Link>
              <FaBlog />
            </Link>
            <Link>
              <RiFilePaper2Line />
            </Link>
          </div>
        </>
      </Card>
    </div>
  );
}
