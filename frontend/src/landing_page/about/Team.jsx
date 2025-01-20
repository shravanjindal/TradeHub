import React from "react";

function Team() {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-lg-6"></div>
        <h1 className="fs-1 col">People</h1>
      </div>
      <div className="row mt-5"></div>
      <div className="row mt-5">
        <div className="col-lg-1"></div>
        <div className="col-lg-5 card-circle text-center">
          <img src="images/githubPic.jpeg" />
          <h1 className="fs-4 grey-text mt-4">Sigma Cat</h1>
          <h2 className="fs-5 grey-text mt-4 mb-5">Founder, CEO</h2>
        </div>
        <div className="col-lg-5">
          Cat bootstrapped and founded Tradehub in 2010 to overcome the
          hurdles he faced during his decade long stint as a trader. Today,
          Tradehub has changed the landscape of the Indian broking industry.<br /><br />He
          is a member of the SEBI Secondary Market Advisory Committee (SMAC) and
          the Market Data Advisory Committee (MDAC). <br /><br/>Playing with rats is his
          zen. <br /><br />Connect on Homepage / TradingQnA / Twitter
        </div>
      </div>
    </div>
  );
}

export default Team;
