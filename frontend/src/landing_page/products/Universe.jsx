import React from "react";

function Universe() {
  return (
    <div className="container text-center mt-5">
      <h1>The Tradehub Universe</h1>
      <p>
        Extend your trading and investment experience even further with our
        partner platforms
      </p>
      <div className="">
        <div className="row mt-5 d-flex justify-content-center grey-text">
          <div className="col-lg-3 p-5" style={{fontSize:"small"}}>
            <div className="image-container mb-3">
              <img src="images/zerodhaFundhouse.png" alt="Zerodha Fundhouse" />
            </div>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </div>
          <div className="col-lg-3 p-5" style={{fontSize:"small"}}>
            <div className="image-container mb-3">
              <img src="images/sensibullLogo.svg" alt="Sensibull Logo" />
            </div>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </div>
          <div className="col-lg-3 p-5" style={{fontSize:"small"}}>
            <div className="image-container mb-3">
              <img src="images/goldenpiLogo.png" alt="GoldenPi Logo" />
            </div>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </div>
        </div>
        <br />
        <div className="row d-flex justify-content-center grey-text">
          <div className="col-lg-3 p-5 pt-lg-0" style={{fontSize:"small"}}>
            <div className="image-container mb-3">
              <img src="images/streakLogo.png" alt="Streak Logo" />
            </div>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </div>
          <div className="col-lg-3 p-5 pt-lg-0" style={{fontSize:"small"}}>
            <div className="image-container mb-3">
              <img src="images/smallcaseLogo.png" alt="Smallcase Logo" />
            </div>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </div>
          <div className="col-lg-3 p-5 pt-lg-0" style={{fontSize:"small"}} >
            <div className="image-container mb-3">
              <img src="images/dittoLogo.png" alt="Ditto Logo" />
            </div>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </div>
        </div>
      </div>
      <button
        className="p-3 mt-5 btn btn-primary fs-5"
        style={{
          width: "300px",
          marginLeft: "auto",
          marginRight:"auto",
          maxWidth: "20rem",
          height: "3rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgb(51 161 208)",
          border: "none",
        }}
      >
        Sign up for free
      </button>
    </div>
  );
}

export default Universe;
