import React from 'react';
import '../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Award {
  title: string;
  year: string;
  source: string;
}

const awards: Award[] = [
  { title: 'Best Affiliate Program LATAM', year: '2024', source: 'World Business Stars Magazine' },
  { title: 'Best affiliate program globally', year: '2024', source: 'Pan Finance Awards' },
  { title: 'Outstanding Regulated Broker', year: '2024', source: 'Cfi.co' },
  { title: 'Best Futures Trading Platform', year: '2024', source: 'International Investor Awards' },
  { title: 'Best Educational Broker', year: '2024', source: 'International Investor Awards' },
  { title: 'Best Trading Platform in Spain', year: '2024', source: 'Finance Derivative Awards' },
  { title: 'Best Affiliate Program LATAM', year: '2024', source: 'World Business Stars Magazine' },
  { title: 'Best affiliate program globally', year: '2024', source: 'Pan Finance Awards' },
];

const Awards: React.FC = () => {
  return (
    <div
      className="py-5 text-white"
      style={{
        background: 'linear-gradient(to bottom right, #000000, #1a1a1a)',
        overflow: 'hidden',
        fontFamily: 'Segoe UI, sans-serif',
      }}
    >
      <div className="container">
        <h2 className="fw-bold display-5 text-center mb-4">
          Our <span style={{ color: '#00BFA6' }}>Awards</span>
        </h2>

     
        <div className="marquee-wrapper position-relative overflow-hidden">
          <div className="marquee-track d-flex align-items-center">
            {awards.map((award, index) => (
              <div
                key={index}
                className="award-card text-white mx-3 p-4 rounded-4 shadow"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(8px)',
                  minWidth: '260px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  flexShrink: 0,
                }}
              >
                <div style={{ fontSize: '36px', color: '#00BFA6' }}>🏆</div>
                <h6 className="mt-2 fw-bold">{award.title}</h6>
                <div className="text-light small">{award.year}</div>
                <small className="text-secondary">{award.source}</small>
              </div>
            ))}
           
            {awards.map((award, index) => (
              <div
                key={index + awards.length}
                className="award-card text-white mx-3 p-4 rounded-4 shadow"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(8px)',
                  minWidth: '260px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  flexShrink: 0,
                }}
              >
                <div style={{ fontSize: '36px', color: '#00BFA6' }}>🏆</div>
                <h6 className="mt-2 fw-bold">{award.title}</h6>
                <div className="text-light small">{award.year}</div>
                <small className="text-secondary">{award.source}</small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
