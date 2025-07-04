import React from 'react';
import '../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const PartnerInTrade: React.FC = () => {
  return (
    <div
      className="partner-section py-5 text-white"
      style={{
        background: 'linear-gradient(to bottom right, #000000, #1a1a1a)',
        fontFamily: 'Segoe UI, sans-serif',
      }}
    >
      <div className="container">
        <div className="row align-items-center g-5">
    
          <div className="col-lg-6 text-lg-start text-center">
            <h2 className="fw-bold display-5 mb-3">
              Become our <span style={{ color: '#00BFA6' }}>Partner in Trade</span>
            </h2>
            <p className="text-light mb-4">
              Boost your customer base and join an active community of over 145,000 registered partners!
            </p>

            <ul className="list-unstyled text-start d-inline-block text-light">
              <li className="mb-2">✅ <strong>Get live notifications</strong></li>
              <li>✅ <strong>Track & filter your performance</strong></li>
            </ul>

            <div className="mt-4">
              <a href="#" className="btn btn-outline-light fw-semibold px-4 py-2 rounded-pill">
                Become a Partner
              </a>
            </div>
          </div>

     
          <div className="col-lg-6 text-center">
            <div
              className="rounded-4 overflow-hidden shadow"
              style={{
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <img
                src="/assets/track.jpg"
                alt="Partner Dashboard"
                className="img-fluid w-100"
                style={{ maxHeight: '700px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>

        {/* Trusted Logos */}
        <div className="mt-5">
          <p className="fw-semibold text-center mb-4 text-muted">Trusted By</p>
          <div className="d-flex justify-content-center flex-wrap gap-4">
            {[
              { src: '/assets/geotrust.png', alt: 'GeoTrust' },
              { src: '/assets/mcafee.png', alt: 'McAfee' },
              { src: '/assets/barclays.png', alt: 'Barclays' },
              { src: '/assets/trustpilot.png', alt: 'Trustpilot' },
              { src: '/assets/ssl-secure.png', alt: 'SSL Secure' },
            ].map((logo, i) => (
              <div
                key={i}
                className="bg-white rounded shadow-sm p-2"
                style={{ height: '55px', display: 'flex', alignItems: 'center' }}
              >
                <img src={logo.src} alt={logo.alt} height="30" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerInTrade;
