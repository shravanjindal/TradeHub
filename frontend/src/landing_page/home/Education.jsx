import React from "react";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-5">
          <img src="images/varsity.png" />
        </div>
        <div className="col-lg-5 p-5">
          <h1 className="mb-5 fs-2">Free and open market education</h1>
          <div className="mb-4">
            <p>
                Varsity, the largest online stock market education book in the world
                covering everything from the basics to advanced trading.
            </p>
            <a href="" style={{ textDecoration: "none" }}>
                Varsity <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div>
            <p>
            TradingQ&A, the most active trading and investment community in India for all your market related queries.
            </p>
            <a href="" style={{ textDecoration: "none" }}>
                TradingQ&A <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
