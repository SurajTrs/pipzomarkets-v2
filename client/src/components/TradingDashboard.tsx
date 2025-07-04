import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";

const TradingDashboard: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("Most Popular");
  const leftBoxRef = useRef<HTMLDivElement>(null);
  const [leftHeight, setLeftHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (leftBoxRef.current) {
      setLeftHeight(leftBoxRef.current.clientHeight);
    }
  }, [selectedCategory]);

  interface Instrument {
    name: string;
    sell: string;
    buy: string;
    change: string;
  }

  const allInstruments: Record<string, Instrument[]> = {
    "Most Popular": [
      { name: "TESLA", sell: "326.61", buy: "326.98", change: "-3.86%" },
      { name: "AMAZON", sell: "211.88", buy: "212.19", change: "-0.51%" },
      { name: "APPLE", sell: "201.19", buy: "201.40", change: "+0.31%" },
      { name: "NETFLIX", sell: "1.00", buy: "1.00", change: "-0.32%" },
      { name: "EUR/USD", sell: "1.1720", buy: "1.1726", change: "+0.12%" },
      { name: "GBP/USD", sell: "1.2660", buy: "1.2665", change: "-0.09%" },
      { name: "MICROSOFT", sell: "492.12", buy: "492.78", change: "+0.47%" },
      { name: "PFIZER", sell: "24.24", buy: "24.33", change: "-0.08%" },
    ],
    Forex: [
      { name: "EUR/USD", sell: "1.1720", buy: "1.1726", change: "+0.12%" },
      { name: "GBP/USD", sell: "1.2660", buy: "1.2665", change: "-0.09%" },
    ],
    "Risers & Fallers": [
      { name: "APPLE", sell: "201.19", buy: "201.40", change: "+0.31%" },
      { name: "NETFLIX", sell: "1.00", buy: "1.00", change: "-0.32%" },
    ],
    Indices: [
      { name: "US_TECH100", sell: "22,540", buy: "22,552.25", change: "+0.385%" },
    ],
    Commodities: [
      { name: "Gold", sell: "3,341.00", buy: "3,341.61", change: "+0.072%" },
    ],
    Cryptocurrencies: [
      { name: "BTC/USD", sell: "107,400", buy: "107,428.46", change: "-0.009%" },
    ],
    Stocks: [
      { name: "MICROSOFT", sell: "492.12", buy: "492.78", change: "+0.47%" },
      { name: "PFIZER", sell: "24.24", buy: "24.33", change: "-0.08%" },
    ],
    ETFs: [
      { name: "SPY", sell: "440.88", buy: "441.10", change: "+0.25%" },
    ],
    FXOptions: [
      { name: "EUR Call Option", sell: "0.020", buy: "0.025", change: "+1.20%" },
    ],
    Bonds: [
      { name: "US 10Y", sell: "99.50", buy: "100.00", change: "+0.10%" },
    ],
  };

  const categories = Object.keys(allInstruments);

  return (
    <div
      className="container-fluid py-5 px-4 text-white"
      style={{
        background: "linear-gradient(to bottom right, #000000, #1a1a1a)",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <div className="row g-4">

        <div className="col-lg-3">
          <div
            ref={leftBoxRef}
            className="rounded-4 p-3"
            style={{
              backgroundColor: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
            }}
          >
            <input
              className="form-control mb-3 bg-transparent text-white border-secondary"
              placeholder="🔍 Search instruments"
            />
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`w-100 mb-2 text-start px-3 py-2 rounded-3 fw-semibold ${
                  selectedCategory === cat
                    ? "bg-accent text-white"
                    : "text-light"
                }`}
                style={{
                  backgroundColor:
                    selectedCategory === cat ? "#00BFA6" : "rgba(255,255,255,0.08)",
                  border: "none",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>


        <div className="col-lg-9">
          <div
            className="rounded-4 shadow-lg overflow-hidden"
            style={{
              backgroundColor: "rgba(255,255,255,0.06)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.1)",
              height: leftHeight ? `${leftHeight}px` : "auto",
            }}
          >
            <table className="table text-white m-0">
              <thead style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
                <tr>
                  <th>Instrument</th>
                  <th>Sell</th>
                  <th>Buy</th>
                  <th>Change</th>
                </tr>
              </thead>
              <tbody>
                {allInstruments[selectedCategory]?.map((item, i) => (
                  <tr
                    key={i}
                    style={{
                      backgroundColor: "rgba(255,255,255,0.02)",
                      transition: "0.2s ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "rgba(0, 191, 166, 0.1)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.02)")
                    }
                  >
                    <td className="fw-bold">{item.name}</td>
                    <td className="text-info">{item.sell}</td>
                    <td className="text-info">{item.buy}</td>
                    <td className={item.change.startsWith("-") ? "text-danger" : "text-success"}>
                      {item.change}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingDashboard;
