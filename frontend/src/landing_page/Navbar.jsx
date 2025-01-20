import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg border-bottom fixed-top"
        style={{
          backgroundColor: "#FFF",
          height: "5rem",
        }}
      >
        <div className="container-fluid d-flex space-between">
          {/* Logo */}
          <div  style={{ marginLeft: "16%" }}>
          <Link className="navbar-brand" to="/">
            <img src="images/logo.png" style={{ width: "150px" }} alt="Logo" />
          </Link>
          </div>
          

          {/* Hamburger Button */}
          <button
            className="navbar-toggler"
            type="button"
            aria-expanded={isMenuOpen}
            aria-label="toggle navigation"
            onClick={toggleMenu}
            style={{ marginRight: "16%" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav" style={{ marginRight: "30%" , maxWidth:"10rem"}}>
            <ul className="navbar-nav">
              <li className="nav-item  mx-2">
                <Link className="nav-link active" aria-current="page" to="/signup">
                  Signup
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link active" to="/product">
                  Product
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link active" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link active" to="/support">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Dialog Box */}
      {isMenuOpen && (
        <div className="dialog-overlay" onClick={closeMenu}>
          <div className="dialog-box" onClick={(e) => e.stopPropagation()}>
            <ul className="dialog-links">
              <li>
                <Link to="/" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/signup" onClick={closeMenu}>
                  Signup
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={closeMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/product" onClick={closeMenu}>
                  Product
                </Link>
              </li>
              <li>
                <Link to="/pricing" onClick={closeMenu}>
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/support" onClick={closeMenu}>
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
