import React from "react";

const SupportPortal = () => {
  return (
    <div className="container-fluid text-white p-5" style={{backgroundColor:"#387ed1"}}>
      <div className="d-flex justify-content-between align-items-center p-5">
        <p className="fs-4">Support Portal</p>
        <p className="text-white">
          Track tickets
        </p>
      </div>
      <div className="row p-5 pt-0">
        <div className="col-lg-8">
          <p className="fs-5 mb-4">
            Search for an answer or browse help topics to create a ticket
          </p>
          <div className="input-group mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Eg: how do I activate F&O, why is my order getting rejected ..."
            />
            <button className="btn btn-light">
            <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <div className="d-flex flex-wrap gap-3">
            <p className="text-white">
              Track account opening
            </p>
            <p className="text-white">
              Track segment activation
            </p>
            <p className="text-white">
              Intraday margins
            </p>
            <p className="text-white">
              Kite user manual
            </p>
          </div>
        </div>
        {/* Featured Section */}
        <div className="col-lg-4">
          <p className="fs-3">Featured</p>
          <ul className="list-unstyled">
            <li>
              <p  className="text-white">
                Surveillance measure on scrips - January 2025
              </p>
            </li>
            <li>
              <p  className="text-white">
                Latest Intraday leverages and Square-off timings
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SupportPortal;
