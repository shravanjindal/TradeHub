import React from "react";

function Signup() {
  return (
    <div className="container" style={{ marginTop: "10rem" }}>
      <div className="row p-5">
        <div className="col-lg-2"></div>
        <div className="col-lg-4 mb-5">
          <img src="images/ecosystem.png" style={{ width: "100%" }} />
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-4 mb-5">
          <h1 className="fs-3 mb-3">Signup now</h1>
          <p className="grey-text">Or track your existing application.</p>
          <form>
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput" style={{color:"#5b5a5a"}}>Email address</label>
            </div>
            <button 
                className='btn btn-primary' 
                style={{
                    width: "100px",
                    height: "40px",
                    backgroundColor: "rgb(51, 161, 208)",
                    border: "none",
                    borderRadius :"0",
                    fontSize: "16px" // Adjust the font size here
                }}
                >
                Get OTP
                </button>
            </form>
        </div>
        <div className="row text-center grey-text" style={{fontSize:"small"}}>
            <p>
            I authorise Tradehub to contact me even if my number is registered on DND. I authorise Tradehub to fetch my KYC information from the C-KYC registry with my PAN.
            </p>
            <p>By submitting your contact details, you authorize Tradehub to contact you even if you are registered on DND & conduct online KYC for trading & demat account opening as per KRA regulations and PMLA guidelines.</p>
            <p>If you are looking to open a HUF, Corporate, Partnership, or NRI account, you have to use the offline forms.</p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
