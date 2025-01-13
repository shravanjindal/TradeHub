import React from "react";

function Pricing() {
  return (
    <div className="container mb-5 p-5">
      <div className="row">
        <div className="col-lg-1"></div>
        <div className="col-lg-4">
          <h1 className="mb-5 fs-2">Unbeatable pricing</h1>
          <p className="grey-text">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            See pricing <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-lg-2"></div>
        <div className="col-lg-5">
            <div className="row text-center">
                <div className="col border p-4">
                    <h1 className="mb-4 fs-2"><i class="fs-3 fa-solid fa-indian-rupee-sign"></i>0</h1>
                    <p>Free equity delivery and <br />direct mututal funds</p>
                </div>
                <div className="col border p-4">
                    <h1 className="mb-4 fs-2"><i class="fs-3 fa-solid fa-indian-rupee-sign"></i>20</h1>
                    <p>Intraday and F&O</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
