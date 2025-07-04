import React from 'react';
import '../style.css';

const BottomTicker: React.FC = () => {
  return (
    <div className="bg-black py-2 ticker-wrapper overflow-hidden position-relative">
      <div
        className="ticker d-flex gap-5 text-white small fw-semibold"
        style={{ animation: 'scrollTicker 60s linear infinite' }}
      >
        <span>MICROSOFT 493.98 <span className="text-success">▲ +0.24%</span></span>
        <span>PFIZER 24.33 <span className="text-danger">▼ -0.08%</span></span>
        <span>APPLE 201.30 <span className="text-danger">▼ -0.14%</span></span>
        <span>USD/CHF 0.80 <span className="text-danger">▼ -0.32%</span></span>
        <span>NETFLIX 1.00 <span className="text-success">▲ +0.40%</span></span>
        <span>SIEMENS 214.35 <span className="text-success">▲ +0.07%</span></span>
        <span>INTEL 22.21 <span className="text-danger">▼ -1.58%</span></span>
        <span>EUR/GBP 0.85 <span className="text-danger">▼ -0.00%</span></span>
        <span>CrudeOIL 65.26 <span className="text-success">▲ +0.31%</span></span>
      </div>
    </div>
  );
};

export default BottomTicker;
