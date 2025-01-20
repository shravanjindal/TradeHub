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
      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg border-bottom"
        style={{
          position: "sticky",
          top: "0",
          zIndex: "1030",
          backgroundColor: "#FFF",
          height: "5rem",
        }}
      >
        <div className="container-fluid flex space-between">
          {/* Logo */}
          <Link className="navbar-brand" to="/"  style={{ marginLeft: "16%" }}>
            <img src="images/logo.png" style={{ width: "150px"}} alt="Logo" />
          </Link>

          {/* Hamburger Button */}
          <button
            className="navbar-toggler"
            type="button"
            aria-expanded={isMenuOpen ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={toggleMenu}
            style={{ marginRight: "16%" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      <div style={{ marginRight: "16%" }}>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item  mx-2">
                <Link class="nav-link active" aria-current="page" to="/signup">
                  Signup
                </Link>
              </li>
              <li class="nav-item mx-2">
                <Link class="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item mx-2">
                <Link class="nav-link active" to="/product">
                  Product
                </Link>
              </li>
              <li class="nav-item mx-2">
                <Link class="nav-link active" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li class="nav-item mx-2">
                <Link class="nav-link active" to="/support">
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
