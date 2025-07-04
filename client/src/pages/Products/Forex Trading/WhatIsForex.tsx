import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../style.css";

const WhatIsForex: React.FC = () => {
  return (
    <>

      <section
        className="text-white d-flex align-items-center"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.45)), url(/assets/forex-banner.jpg)',
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "60vh",
          fontFamily: "Segoe UI, sans-serif",
        }}
      >
        <div className="container text-center">
          <h1 className="fw-bold display-4">
            What is <span className="text-warning">Forex?</span>
          </h1>
          <p className="lead mb-4">
            Discover the global currency market and how you can trade it like a pro.
          </p>
          <a href="#intro" className="btn btn-warning fw-semibold px-4 py-2 rounded-pill shadow">
            Start Learning
          </a>
        </div>
      </section>


      <section
        id="intro"
        className="py-5 text-light"
        style={{
          background: "linear-gradient(to bottom right, #000000, #1a1a1a)",
          fontFamily: "Segoe UI, sans-serif",
        }}
      >
        <div className="container">
       
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-3" style={{ color: "#00BFA6" }}>
                Welcome to Forex Trading
              </h2>
              <p className="lead text-light">
                Join millions of traders worldwide and dive into the dynamic currency exchange market operating 24/5 with unmatched liquidity.
              </p>
            </div>
          </div>

       
          <div className="row align-items-center mb-5">
            <div className="col-md-6 mb-4">
              <h4 className="fw-bold mb-3" style={{ color: "#00BFA6" }}>
                <i className="bi bi-currency-exchange me-2 text-warning" />
                What is Foreign Exchange?
              </h4>
              <p>
                If you’ve ever converted money while traveling or paid online in another currency, you’ve already participated in the forex market.
              </p>
              <p>
                <strong>Forex (FX)</strong> is the exchange of one currency for another — influencing fuel, food, travel, and goods worldwide.
              </p>
              <div className="alert alert-success mt-3 shadow-sm border-0">
                ✅ <strong>Pro Tip:</strong> Forex is the most liquid financial market — with over $6 trillion traded daily!
              </div>
            </div>
            <div className="col-md-6 text-center">
              <img
                src="/assets/forex-illustration-1.png"
                alt="Forex"
                className="img-fluid rounded shadow-sm"
              />
            </div>
          </div>

 
          <div className="row align-items-center mb-5">
            <div className="col-md-6 order-md-2 mb-4">
              <h4 className="fw-bold mb-3" style={{ color: "#00BFA6" }}>
                <i className="bi bi-globe2 me-2 text-warning" />
                How the Forex Market Works
              </h4>
              <p>
                The forex market is decentralized and operates globally 24/5, thanks to time-zone overlaps in New York, London, Tokyo, and Sydney.
              </p>
              <p>This makes forex accessible and flexible for traders worldwide.</p>
            </div>
            <div className="col-md-6 order-md-1 text-center">
              <img
                src="/assets/forex-illustration-2.png"
                alt="Market"
                className="img-fluid rounded shadow-sm"
              />
            </div>
          </div>


          <div className="mb-5">
            <h4 className="fw-bold mb-3" style={{ color: "#00BFA6" }}>
              <i className="bi bi-arrows-angle-contract me-2 text-warning" />
              How Does Forex Trading Work?
            </h4>
            <p>
              Forex trading is the act of buying one currency and selling another. Currencies are always traded in pairs (e.g., <code>EUR/USD</code>).
            </p>
            <p>
              The first is the <strong>base currency</strong>, the second the <strong>quote currency</strong>. Your profit depends on changes in the exchange rate.
            </p>
          </div>

          <div className="mb-5">
            <h4 className="fw-bold mb-4" style={{ color: "#00BFA6" }}>
              <i className="bi bi-graph-up-arrow me-2 text-warning" />
              Types of Currency Pairs
            </h4>
            <div className="row g-4">
              {[
                {
                  title: "Majors",
                  desc: "Include USD in every pair (e.g., EUR/USD, USD/JPY). Most traded and stable.",
                },
                {
                  title: "Minors",
                  desc: "Do not include USD (e.g., EUR/GBP, AUD/NZD). Still highly liquid.",
                },
                {
                  title: "Exotics",
                  desc: "Combine a major with an emerging economy currency (e.g., USD/INR).",
                },
              ].map((card, i) => (
                <div className="col-md-4" key={i}>
                  <div
                    className="p-4 rounded-4 h-100 shadow-sm"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <h6 className="fw-bold mb-2" style={{ color: "#00BFA6" }}>
                      {card.title}
                    </h6>
                    <p className="small text-light mb-0">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>


          <div className="bg-dark rounded p-4 shadow text-center mt-5">
            <h5 className="fw-bold mb-3" style={{ color: "#00BFA6" }}>
              📬 Stay Updated with AvaTrade Insights
            </h5>
            <form
              className="d-flex flex-column flex-sm-row justify-content-center mx-auto gap-2"
              style={{ maxWidth: "500px" }}
            >
              <input
                type="email"
                className="form-control rounded"
                placeholder="Enter your email"
                style={{
                  backgroundColor: "#2a2a2a",
                  border: "1px solid #444",
                  color: "#fff",
                }}
              />
              <button
                type="submit"
                className="btn btn-warning fw-semibold px-4 text-dark rounded"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatIsForex;
