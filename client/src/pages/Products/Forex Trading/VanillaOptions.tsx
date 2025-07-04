import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../style.css";

const VanillaOptions: React.FC = () => (
  <>

    <section
      className="text-white d-flex align-items-center"
      style={{
        backgroundImage:
          'linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.45)), url(/assets/options-banner.jpg)',
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "60vh",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <div className="container text-center">
        <h1 className="fw-bold display-4">
          Vanilla <span className="text-warning">Options</span>
        </h1>
        <p className="lead mb-4">
          Contracts that give you the right—but not the obligation—to trade at a set price/time :contentReference.
        </p>
        <a href="#intro" className="btn btn-warning fw-semibold px-4 py-2 rounded-pill shadow">
          Learn More
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
        {/* Overview */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <h2 className="fw-bold mb-3" style={{ color: "#00BFA6" }}>
              What Are Vanilla Options?
            </h2>
            <p className="lead">
              Vanilla options give traders the right, without obligation, to buy or sell an asset at a predefined price or time.
            </p>
            <p>
              They are derivative contracts referencing an underlying asset—like Forex—similar to insurance contracts with an upfront premium :contentReference.
            </p>
          </div>
        </div>

        {/* Types & Mechanics */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 mb-4">
            <h4 className="fw-bold mb-3" style={{ color: "#00BFA6" }}>
              Calls & Puts
            </h4>
            <ul className="list-unstyled">
              <li><strong>Call Option:</strong> Right to buy. Buyer pays a premium.</li>
              <li><strong>Put Option:</strong> Right to sell. Buyer pays a premium.</li>
            </ul>
            <p>
              Options derive value from an underlying asset but don’t obligate purchase or sale.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="/assets/call-put-illustration.png"
              alt="Call and Put Options"
              className="img-fluid rounded shadow-sm"
            />
          </div>
        </div>

      
        <div className="mb-5">
          <h4 className="fw-bold mb-3" style={{ color: "#00BFA6" }}>
            Other Concepts
          </h4>
          <h6>Spread</h6>
          <p>
            Spread = Ask – Bid. It's the cost to open and close an option position. Tight spreads mean lower cost.
          </p>
          <h6>Order Types</h6>
          <ul>
            <li><strong>Market Order</strong>: Execute immediately.</li>
            <li><strong>Limit/Stop Order</strong>: Execute at your desired price.</li>
            <li><strong>GTC:</strong> Valid until canceled.</li>
          </ul>
          <h6>Leverage</h6>
          <p>
            Leverage amplifies gains and losses by letting you control a larger exposure with smaller capital—use with caution.
          </p>
        </div>


        <div className="mb-5">
          <h4 className="fw-bold mb-4" style={{ color: "#00BFA6" }}>
            Popular Strategies
          </h4>
          <div className="row g-4">
            {[
              {
                title: "Straddle",
                desc: "Buy call & put at same strike to profit from large price swings.",
              },
              {
                title: "Strangle",
                desc: "Buy call & put at different strikes for a lower cost strategy.",
              },
              {
                title: "Covered Call",
                desc: "Own the asset and sell a call to generate income.",
              },
            ].map((item, i) => (
              <div className="col-md-4" key={i}>
                <div
                  className="p-4 rounded-4 h-100 shadow-sm"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <h6 className="fw-bold mb-2 text-accent">{item.title}</h6>
                  <p className="small text-light mb-0">{item.desc}</p>
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
            <button type="submit" className="btn btn-warning fw-semibold px-4 text-dark rounded">
              Subscribe
            </button>
          </form>
        </div>


        <div className="container mt-5">
          <h4 className="fw-bold mb-3 text-center text-accent">Explore More</h4>
          <div className="d-flex flex-column align-items-center gap-2">
            <Link to="/what-is-forex" className="text-decoration-none text-warning fw-semibold">
              ➡️ What is Forex
            </Link>
            <Link to="/how-to-trade-forex" className="text-decoration-none text-warning fw-semibold">
              ➡️ How to Trade Forex
            </Link>
            <Link to="/open-forex-account" className="text-decoration-none text-warning fw-semibold">
              ➡️ How to Open a Forex Account
            </Link>
            <Link to="/forex-trading-tips" className="text-decoration-none text-warning fw-semibold">
              ➡️ Forex Trading Tips
            </Link>
            <Link to="/vanilla-options" className="text-decoration-none text-warning fw-semibold">
              ➡️ Vanilla Options
            </Link>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default VanillaOptions;
