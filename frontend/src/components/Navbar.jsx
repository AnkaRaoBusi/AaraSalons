import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoImg from "../assets/images/65.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLinkClick = (path) => {
    closeMenu();
    if (path.startsWith("#")) {
      // Handle hash navigation (scroll to section)
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(path);
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo" onClick={closeMenu}>
        <img src={logoImg} alt="AARA" className="logo-img" />
      </Link>

      <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            if (window.location.pathname !== "/") {
              navigate("/");
              setTimeout(() => handleLinkClick("#home"), 100);
            } else {
              handleLinkClick("#home");
            }
          }}
        >
          Home
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            if (window.location.pathname !== "/") {
              navigate("/");
              setTimeout(() => handleLinkClick("#about"), 100);
            } else {
              handleLinkClick("#about");
            }
          }}
        >
          About
        </a>
        <Link to="/services" onClick={closeMenu}>
          Services
        </Link>
        <Link to="/blog" onClick={closeMenu}>
          Blog
        </Link>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            if (window.location.pathname !== "/") {
              navigate("/");
              setTimeout(() => handleLinkClick("#locations"), 100);
            } else {
              handleLinkClick("#locations");
            }
          }}
        >
          Find us
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            if (window.location.pathname !== "/") {
              navigate("/");
              setTimeout(() => handleLinkClick("#booking"), 100);
            } else {
              handleLinkClick("#booking");
            }
          }}
          className="nav-cta"
        >
          Book Now
        </a>
      </div>
      <button
        className="menu-toggle"
        aria-label="Toggle navigation"
        onClick={toggleMenu}
      >
        <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
      </button>
    </nav>
  );
};

export default Navbar;