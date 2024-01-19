import { Link } from "react-router-dom";
import { IoLogoDropbox } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { AiFillLinkedin } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          {/* <Link to="/" className="logo">
            <IoLogoDropbox />
          </Link> */}

          <p>
            Explore the dynamic world of crypto trading, powered by blockchain
            technology
          </p>

          <div className="footer__socials">
            <a
              href="https://linkedin.com"
              target="blank"
              rel="noreferrerr noopener"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://facebook.com"
              target="blank"
              rel="noreferrerr noopener"
            >
              <FaFacebookSquare />
            </a>
            <a
              href="https://www.instagram.com/"
              target="blank"
              rel="noreferrerr noopener"
            >
              <GrInstagram />
            </a>
            <a
              href="https://twitter.com/home"
              target="blank"
              rel="noreferrerr noopener"
            >
              <RxCross2 />
            </a>
          </div>
        </article>

        <article>
          <h4>Permallinks</h4>
          <Link to="/#products">About</Link>
          <Link to="/#Build">Build</Link>
          <Link to="/careers">Career</Link>
        </article>

        <article>
          <h4>Insights</h4>
          <Link to="/$">Blog</Link>
          <Link to="/$">Case Studies</Link>
          <Link to="/$">Events</Link>
          <Link to="/$">Communities</Link>
          <Link to="/$">FAQs</Link>
        </article>

        <article>
          <h4>Get In Touch</h4>
          <Link to="/$">Contact Us</Link>
          <Link to="/$">Support</Link>
        </article>
      </div>
      <hr />

      <div className="footer__copyright">
        <small>2024 RAFFY TECH COMPANY &copy; All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
