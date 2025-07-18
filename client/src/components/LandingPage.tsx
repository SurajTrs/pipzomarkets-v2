import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../style.css";

const LandingPage: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const handleClick = (name: string) => {
    alert(`You clicked on ${name}`);
  };

  const tradingItems = [
    { icon: "🇺🇸", name: "EUR/USD", price: "1.17261", change: "+0.361%", up: true },
    { icon: "🥇", name: "Gold", price: "3,341.61", change: "+0.072%", up: true },
    { icon: "🚗", name: "Tesla", price: "326.98", change: "-3.864%", up: false },
    { icon: "📈", name: "US_TECH100", price: "22,552.25", change: "+0.385%", up: true },
    { icon: "₿", name: "BTC/USD", price: "107,428.46", change: "-0.009%", up: false },
  ];

  return (
    <div
      className="container-fluid landing-bg px-3 px-md-4 text-white d-flex align-items-center"
      style={{
        backgroundImage:
          "linear-gradient(to bottom right, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('/assets/back3.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div className="row w-100 align-items-center gy-4">
        <div className="col-lg-6">
          <h1 className="display-4 fw-bold" style={{ lineHeight: "1.2" }}>
            Trade Smarter<br />With Confidence
          </h1>
          <p className="lead mt-3 text-light">
            Access world-class tools to trade Forex, Crypto, Stocks & more with top-tier support.
          </p>
          <div className="mt-4 d-flex flex-wrap gap-3">
            <button className="btn btn-warning px-4 py-2 fw-bold text-dark shadow-sm rounded-pill">
              Join Pipzo
            </button>
            <button className="btn btn-outline-light px-4 py-2 fw-bold rounded-pill">
              Free Demo <span className="ms-1">&gt;</span>
            </button>
          </div>
          <div className="mt-5 d-flex align-items-center gap-3 flex-wrap">
            <img
              src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
              alt="award"
              width="60"
            />
            <div>
              <p className="fw-bold mb-1 text-white">Outstanding Regulated Broker</p>
              <p className="text-light mb-0">2024 - Pipzo Awards</p>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div
            className="rounded-4 p-3 p-md-4 shadow-lg"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.15)",
              overflowX: "auto",
            }}
          >
            {tradingItems.map((item, index) => (
              <div
                key={index}
                className="trade-item d-flex justify-content-between align-items-center p-3 rounded-3 mb-3 position-relative trade-card"
                data-aos="fade-up"
                onClick={() => handleClick(item.name)}
                style={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  cursor: "pointer",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  minWidth: "280px",
                }}
              >
                <div className="d-flex align-items-center gap-3">
                  <span style={{ fontSize: "1.8rem" }}>{item.icon}</span>
                  <div>
                    <strong className="text-white fs-5">{item.name}</strong>
                    <div className="small text-light">{item.price}</div>
                  </div>
                </div>
                <div className="text-end">
                  <div className={`fw-bold ${item.up ? "text-success" : "text-danger"}`}>
                    {item.change}
                  </div>
                  <div className="text-info fw-semibold small">Trade &gt;</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
