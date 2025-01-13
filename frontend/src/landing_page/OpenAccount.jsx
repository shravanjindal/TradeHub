import React from "react";

function OpenAccount() {
  return (
    <div className="container p-5 text-center">
      <h1 className="mt-5 mb-4 fs-2">Open a Tradehub account</h1>
      <p className="mb-4">
      Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
      </p>
      <button
        className="p-3 btn btn-primary fs-5"
        style={{width:"300px", margin:"auto", maxWidth:"20rem", height:"3rem", display:"flex",alignItems:"center",justifyContent:"center", backgroundColor: "rgb(51 161 208)", border:"none"}}
      >
        Sign up for free
      </button>
    </div>
  );
}

export default OpenAccount;
