import React from "react";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg border-bottom sticky-top" style={{backgroundColor:"#FFF",height:"5rem"}}>
      <div class="container-fluid flex space-between">
        <div style={{ marginLeft: "16%" }}>
          <a class="navbar-brand" href="#">
            <img src="images/logo.png" style={{ width: "150px" }} />
          </a>
        </div>
        <div style={{ marginRight: "16%" }}>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item  mx-2">
                <a class="nav-link active" aria-current="page" href="#">
                  Signup
                </a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link active" href="#">
                  About
                </a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link active" href="#">
                  Product
                </a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link active" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link active" href="#">
                  Product
                </a>
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
