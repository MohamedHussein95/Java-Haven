import "./Footer.css";
import { FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
function Footer() {
  return (
    <div className="footer">
      <div className="block-con">
        <div className="footer-logo-con">
          <img
            src="../../java_logo_white.png"
            style={{ height: "80px", width: "80px" }}
            alt="logo"
          />
          <h2 className="footer-logo-text">
            Java haven
            <br />
            Roasters
          </h2>
        </div>
        <div className="block">
          <h3 className="block-title">About Us</h3>
          <ul>
            <li>
              <a href="#">Our heritage</a>
            </li>
            <li>
              <a href="#">Our company</a>
            </li>
            <li>
              <a href="#">Java Haven Roaster</a>
            </li>
          </ul>
        </div>
        <div className="block">
          <h3 className="block-title">Responsibility</h3>
          <ul>
            <li>
              <a href="#">Community</a>
            </li>
            <li>
              <a href="#">Ethical Sourcing</a>
            </li>
            <li>
              <a href="#">Environment</a>
            </li>
          </ul>
        </div>
        <div className="block">
          <h3 className="block-title">Quick Links</h3>
          <ul>
            <li>
              <a href="#">Candle & Scrub</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </ul>
        </div>
        <div className="block">
          <h3 className="block-title">Social Media</h3>
          <ul>
            <li>
              <a href="#">
                Instagram <FaInstagram size={25} />
              </a>
            </li>
            <li>
              <a href="#">
                Twitter <FaTwitter size={25} />
              </a>
            </li>
            <li>
              <a href="#">
                Tiktok <FaTiktok size={25} />.
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        style={{
          height: "1px",
          width: "80%",
          backgroundColor: "rgba(255,255,255,0.2",
        }}
      />
      <div className="footer-bott-content">
        <h6 className="copyright">
          &copy; 2023 JAVA HAVEN ROASTERS | powered by Javac electronics <br />
          All rights reserved
        </h6>
      </div>
    </div>
  );
}

export default Footer;
