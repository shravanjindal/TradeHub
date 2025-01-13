import React from "react";
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg border-bottom sticky-top" style={{backgroundColor:"#FFF",height:"5rem"}}>
      <div class="container-fluid flex space-between">
        <div style={{ marginLeft: "16%" }}>
          <Link class="navbar-brand" to="/">
            <img src="images/logo.png" style={{ width: "150px" }} />
          </Link>
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
              <li className="nav-item mx-2" style={{ fontSize: "1.5rem" }}>
                  <i class="fa-solid fa-bars nav-link"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
