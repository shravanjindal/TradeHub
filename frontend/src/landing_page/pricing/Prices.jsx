import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row">
        <h1 className="fs-3">Chargers for account opening</h1>
      </div>
      <div className="container border mt-3 p-1 pb-5 table">
        <div className="row border-bottom">
          <div className="col-9">
            <p className="p-2 mx-3">Type of account</p>
          </div>
          <div className="col-3">
            <p className="p-2">Charges</p>
          </div>
        </div>
        <div className="row ">
          <div className="col-9">
            <p className="p-2 mx-3 grey-text">Online account</p>
          </div>
          <div className="col-3">
            <p className="p-1 m-2 text-center free-tag" style={{ color: "white"}}>
              FREE
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-9">
            <p className="p-2 mx-3 grey-text">Offline account</p>
          </div>
          <div className="col-3">
            <p className="p-1 m-2 text-center free-tag" style={{ color: "white"}}>
              FREE
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-9">
            <p className="p-2 mx-3 grey-text">NRI account (offline only)</p>
          </div>
          <div className="col-3">
            <p className="text-center" >
            ₹ 500
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-9">
            <p className="p-2 mx-3 grey-text">Partnership, LLP, HUF, or Corporate accounts (offline only)	</p>
          </div>
          <div className="col-3">
            <p className="text-center" >
            ₹ 500
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
