import React from "react";

const Topics = () => {
  return (
    <div className="container my-5 p-5">
      <p className="fs-5 grey-text p-5 pb-0">
        To create a ticket, select a relevant topic
      </p>
      <div className="p-5 pt-2">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {/* Account Opening Section */}
        <div className="col">
          <h5 className="mb-3">
            <i className="bi bi-plus-circle"></i> Account Opening
          </h5>
          <div className="d-flex flex-column">
            <p className="blue-text mx-4">Getting started</p>
            <p className="blue-text mx-4">Online</p>
            <p className="blue-text mx-4">Offline</p>
            <p className="blue-text mx-4">Charges</p>
            <p className="blue-text mx-4">Company, Partnership and HUF</p>
            <p className="blue-text mx-4">Non Resident Indian (NRI)</p>
          </div>
        </div>

        {/* Your Zerodha Account Section */}
        <div className="col">
          <h5 className="mb-3">
            <i className="bi bi-person-circle"></i> Your Zerodha Account
          </h5>
          <div className="d-flex flex-column">
            <p className="blue-text mx-4">Login credentials</p>
            <p className="blue-text mx-4">Your Profile</p>
            <p className="blue-text mx-4">
              Account modification and segment addition
            </p>
            <p className="blue-text mx-4">CMR & DP ID</p>
            <p className="blue-text mx-4">Nomination</p>
            <p className="blue-text mx-4">
              Transfer and conversion of shares
            </p>
          </div>
        </div>

        {/* Trading and Markets Section */}
        <div className="col">
          <h5 className="mb-3">
            <i className="bi bi-bar-chart"></i> Trading and Markets
          </h5>
          <div className="d-flex flex-column">
            <p className="blue-text mx-4">Trading FAQs</p>
            <p className="blue-text mx-4">Kite</p>
            <p className="blue-text mx-4">Margins</p>
            <p className="blue-text mx-4">Product and order types</p>
            <p className="blue-text mx-4">Corporate actions</p>
            <p className="blue-text mx-4">Kite features</p>
          </div>
        </div>

        {/* Funds Section */}
        <div className="col">
          <h5 className="mb-3">
            <i className="bi bi-wallet2"></i> Funds
          </h5>
          <div className="d-flex flex-column">
            <p className="blue-text mx-4">Fund withdrawal</p>
            <p className="blue-text mx-4">Adding funds</p>
            <p className="blue-text mx-4">Adding bank accounts</p>
            <p className="blue-text mx-4">eMandates</p>
          </div>
        </div>

        {/* Console Section */}
        <div className="col">
          <h5 className="mb-3">
            <i className="bi bi-grid-3x3-gap"></i> Console
          </h5>
          <div className="d-flex flex-column">
            <p className="blue-text mx-4">IPO</p>
            <p className="blue-text mx-4">Portfolio</p>
            <p className="blue-text mx-4">Funds statement</p>
            <p className="blue-text mx-4">Profile</p>
            <p className="blue-text mx-4">Reports</p>
            <p className="blue-text mx-4">Referral program</p>
          </div>
        </div>

        {/* Coin Section */}
        <div className="col">
          <h5 className="mb-3">
            <i className="bi bi-coin"></i> Coin
          </h5>
          <div className="d-flex flex-column">
            <p className="blue-text mx-4">Understanding mutual funds and Coin</p>
            <p className="blue-text mx-4">Coin app</p>
            <p className="blue-text mx-4">Coin web</p>
            <p className="blue-text mx-4">Transactions and reports</p>
            <p className="blue-text mx-4">National Pension Scheme (NPS)</p>
          </div>
        </div>
      </div>
            </div>
    </div>
  );
};

export default Topics;
