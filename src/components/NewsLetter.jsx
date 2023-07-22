import "./NewsLetter.css";
import { AiFillMail } from "react-icons/ai";
function NewsLetter() {
  return (
    <div className="news-container">
      <div className="news-card">
        <h2 className="news-title">SUBSCRIBE TO OUR NEWSLETTER</h2>
        <h1 className="news-content">
          Get special updates, recipes,promotion <br /> & offers
        </h1>
        <div className="email-bar-con">
          <div className="email-bar">
            <AiFillMail size={30} color="#AAACB4" />
            <input type="email" placeholder="Your Email" />
          </div>
          <button className="subscribe-btn">Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
