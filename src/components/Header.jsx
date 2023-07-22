import "./Header.css";
import { FaUserAlt, FaCartPlus, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="container">
      <div className="header">
        <div className="navbar">
          <img src="/java_logo.png" alt="logo" className="logo" />
          <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/coffee"}>Coffee</Link>
            <Link to={"/merchandize"}>Merchandise</Link>
            <Link to={"/menu"}>Menu</Link>
            <Link to={"/contact"}>Contact</Link>
          </nav>
        </div>
        <div className="searchContainer">
          <div className="searchbar">
            <FaSearch size={20} color="#f3ebe8" />
            <input type="text" placeholder="Search here..." />
          </div>
          <button className="nav-button">
            <FaUserAlt size={20} />
          </button>
          <button className="nav-button">
            <FaCartPlus size={20} />
          </button>
        </div>
      </div>
      <div className="hero">
        <h1 className="heroTitle">
          Fresh & happy <br /> One bean at a time
        </h1>
        {/**<h3 className="hero-body">
        Welcome to Java Haven, where we believe in bringing you the freshest and
        happiest coffee experience, one bean at a time. Our handpicked coffee
        beans from around the world are carefully roasted to perfection,
        ensuring a delightful cup in every sip. Come and join us on this journey
        of discovering the perfect cup of coffee that brings joy and warmth to
        your day.
      </h3> */}
        <button className="order-btn">Order Now</button>
      </div>
    </div>
  );
}

export default Header;
