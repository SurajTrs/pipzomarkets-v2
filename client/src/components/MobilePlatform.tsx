import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface PlatformContent {
  name: string;
  description: string;
  image: string;
}

const platforms: PlatformContent[] = [
  {
    name: "Mobile WebTrader",
    description: "Access trading directly from your browser with no downloads needed.",
    image: "/assets/track.jpg",
  },
  {
    name: "AvaSocial",
    description: "Trade socially by following top traders and copying their strategies.",
    image: "/assets/avasocial.png",
  },
  {
    name: "AvaOptions",
    description: "Trade options with advanced tools and flexible strategies.",
    image: "/assets/avaoptions.png",
  },
  {
    name: "MetaTrader 4/5",
    description: "The most trusted trading platform with powerful analysis tools.",
    image: "/assets/metatrader.png",
  },
];

const MobilePlatforms: React.FC = () => {
  const [selected, setSelected] = useState<PlatformContent>(platforms[0]);

  return (
    <div
      className="container-fluid py-5 text-white"
      style={{
        background: "linear-gradient(to bottom right, #000000, #1a1a1a)",
        minHeight: "auto",

      }}
    >

      <div className="text-center mb-5">
        <h1 className="fw-bold display-5">
          Powerful Mobile Platforms{" "}
          <span style={{ color: "#00BFA6" }}>You Can Trust</span>
        </h1>
        <p className="lead text-light">
          Explore secure, fast, and smart trading apps trusted by professionals worldwide.
        </p>
      </div>

      <div className="row align-items-center justify-content-center px-md-5 px-3">
        <div className="col-md-4 mb-4">
          <div className="mb-4">
            <h4 className="fw-bold mb-3">{selected.name}</h4>
            <p className="text-light">{selected.description}</p>
          </div>
          <div className="d-flex gap-3">
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                style={{ height: "40px" }}
              />
            </a>
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/96/Download_on_the_App_Store_Badge.svg"
                alt="App Store"
                style={{ height: "40px" }}
              />
            </a>
          </div>
        </div>

        {/* Center Image */}
        <div className="col-md-4 mb-4 d-flex justify-content-center">
          <img
            src={selected.image}
            alt={selected.name}
            className="img-fluid shadow rounded-4"
            style={{
              maxHeight: "450px",
              objectFit: "cover",
              border: "4px solid #00BFA6",
            }}
          />
        </div>

        {/* Platform List Card */}
        <div className="col-md-4">
          <div
            className="p-4 rounded-4"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <h5 className="fw-bold mb-2" style={{ color: "#FFC107" }}>
              AvaTrade Mobile Suite
            </h5>
            <p className="text-light small mb-3">
              Rated 4.4★ on both Google Play and Apple App Store.
            </p>
            <ul className="list-unstyled fw-semibold">
              {platforms.map((platform, index) => (
                <li
                  key={index}
                  onClick={() => setSelected(platform)}
                  className={`mb-3 px-2 py-1 rounded ${
                    selected.name === platform.name ? "bg-accent text-white" : "text-light"
                  }`}
                  style={{
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  ▸ {platform.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobilePlatforms;
