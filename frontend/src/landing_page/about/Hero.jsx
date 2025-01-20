import React from "react";

function Hero() {
  return (
    <div className="container flex" style={{marginTop:"5rem"}}>
      <h1 className="p-5 fs-2 text-center border-bottom">
        We pioneered the discount broking model in India.
        <br />
        Now, we are breaking ground with our technology.
      </h1>
      <div className="row grey-text pt-5 pb-5">
        <div className="col-2"></div>
        <div className="col-4">
          We kick-started operations on the 15th of August, 2010 with the goal
          of breaking all barriers that traders and investors face in India in
          terms of cost, support, and technology. We named the company TradeHub,
          a combination of Trade and "Hub", the Sanskrit word for community.<br/><br />
          Today, our disruptive pricing models and in-house technology have made
          us the biggest stock broker in India. <br/> <br />Over 1+ Crore clients place
          millions of orders every day through our powerful ecosystem of
          investment platforms, contributing over 15% of all Indian retail
          trading volumes.
        </div>
        {/* <div className="col-2"></div> */}
        <div className="col-4">
          In addition, we run a number of popular open online educational and
          community initiatives to empower retail traders and investors.<br/><br></br>
          Rainmatter, our fintech fund and incubator, has invested in several
          fintech startups with the goal of growing the Indian capital markets.<br /><br/>
          And yet, we are always up to something new every day. Catch up on the
          latest updates on our blog or see what the media is saying about us.
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}

export default Hero;
