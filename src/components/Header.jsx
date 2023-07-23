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
            <Link to={"/"}>HOME</Link>
            <Link to={"/coffee"}>SHOP</Link>
            <Link to={"/menu"}>MENU</Link>
            <Link to={"/contact"}>NEWS</Link>
            <Link to={"/contact"}>CONTACT US</Link>
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
    </div>
  );
}

export default Header;
