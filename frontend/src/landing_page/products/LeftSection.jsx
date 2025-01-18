import React from "react";
import { Link } from "react-router-dom";
function LeftSection(props) {
    let prod = props.product
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-lg-7 mt-5">
          <img src={prod.imagePath} alt="image" style={{ width: "100%" }} />
        </div>
        <div className="col-lg-5 d-flex align-items-center">
          <div className="col-lg-4"></div>
          <div>
            <h1>{prod.name}</h1>
            <p className="grey-text mt-5">{prod.description}</p>
            <Link to="" style={{ textDecoration: "none" }}>
              Learn more <i class="fa-solid fa-arrow-right mx-2"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
