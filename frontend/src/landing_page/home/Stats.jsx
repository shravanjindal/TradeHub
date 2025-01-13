import React from "react";

function Stats() {
  return (
    <div className="container">
      <div className="row p-5 pt-0">
        <div className="col-lg-6 p-5">
          <h1 className="fs-2 mb-5">Trust with confidence</h1>
          <h2 className="fs-4 mt-4">Customer-first always</h2>
          <p>
            That's why 1.5+ crore customers trust Tradehub with ₹4.5+ lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>
          <h2 className="fs-4 mt-4">No spam or gimmicks</h2>
          <p>
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          <h2 className="fs-4 mt-4">The Tradehub universe </h2>
          <p>
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h2 className="fs-4 mt-4">Do better with money</h2>
          <p>
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-lg-6 p-5">
          <img src="images/ecosystem.png" style={{ width: "100%" }} />
          <div>
            <a className="mx-5" href="" style={{textDecoration:"none"}}>
              Explore our products <i class="fa-solid fa-arrow-right"></i>
            </a>
            <a href="" style={{textDecoration:"none"}}>
              Try Kite <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
