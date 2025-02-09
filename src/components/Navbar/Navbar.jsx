import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import logo from "../../assets/mehak.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ThemeContext } from "../Toggle/Toggle";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
    
      <img src={logo} alt="Company Logo" className="nav-logo" />

      
      <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
        <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} size="2x" />
      </button>

      
      <button onClick={handleMenuToggle} className="nav-toggle-btn" aria-label="Toggle Menu">
        <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} size="2x" />
      </button>

    
      <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <button onClick={handleMenuToggle} className="nav-menu-close-btn" aria-label="Close Menu">
          <FontAwesomeIcon icon={faXmark} size="2x" />
        </button>
        <li>
          <AnchorLink className="anchor-link" href="#home" onClick={handleLinkClick}>Home</AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about" onClick={handleLinkClick}>About</AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#skills" onClick={handleLinkClick}>Skills</AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work" onClick={handleLinkClick}>Portfolio</AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact" onClick={handleLinkClick}>Contact</AnchorLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;