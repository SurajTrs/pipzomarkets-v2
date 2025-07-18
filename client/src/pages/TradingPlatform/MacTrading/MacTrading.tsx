// File: components/PipzoTradeApp.tsx
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaApple, FaBolt, FaCalendarAlt, FaChartBar, FaChartLine, FaChartPie, FaClipboardCheck, FaClipboardList, FaCogs, FaDownload, FaEnvelope, FaFileAlt, FaFolderOpen, FaKeyboard, FaLayerGroup, FaLock, FaMousePointer, FaPuzzlePiece, FaRobot, FaSignInAlt, FaSyncAlt, FaWrench } from 'react-icons/fa';

const MacTrading: React.FC = () => {
  return (
    <>
    <div style={{ backgroundColor: '#014421' }} className="text-dark py-5">
      <Container className="text-center">
        {/* Title and Text */}
        <h2 className="fw-bold mb-3" style={{ color: '#145214' }}>
          Mac Trading in United Kingdom
        </h2>
        <h5 className="mb-4 text-warning">AvaTrade’s Mac Trading Platforms</h5>
        <p className="fs-5">
          Are you a Mac user? We proudly offer leading trading platforms on both desktop and mobile
          tailored for Mac. Trade over 250 assets including currencies, commodities, cryptos, and stocks—
          anytime, anywhere—using MetaTrader 4/5 or WebTrader with powerful charting tools and smooth navigation.
        </p>
        <p className="fs-5 fw-semibold text-dark">
          Don’t miss your opportunity! <span className="text-warning">Enjoy competitive spreads & high leverage.</span>
        </p>

        {/* Buttons */}
        <div className="mt-4 d-flex justify-content-center gap-3 flex-wrap">
          <Button variant="success" size="lg" className="fw-semibold px-4">
            Download for Mac
          </Button>
          <Button variant="outline-dark" size="lg" className="fw-semibold px-4">
            Start Web Trading
          </Button>
        </div>

        {/* Full-width Image */}
        <Row className="mt-5">
          <Col>
            <img
              src="/assets/mac-trading.png"
              alt="Mac Trading UK"
              className="img-fluid w-100"
              style={{
                borderRadius: '1rem',
                boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
                maxHeight: '500px',
                objectFit: 'cover',
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
    <div style={{ backgroundColor: '#f0fdf4' }} className="text-dark py-5">
  <Container>
    <Row className="justify-content-left text-left">
      <Col lg={10}>
        <h2 className="fw-bold mb-4" style={{ color: '#145214' }}>
          Mac Online Trading
        </h2>
        <p className="fs-5 mb-3">
          For many years, global financial traders have lamented the lack of trading options for the superior Mac platform.
          Due to the abundance of PCs, most firms would produce trading platforms compatible with only Windows.
        </p>
        <p className="fs-5 mb-3">
          Previously, Mac users who wanted to use advanced trading software on their computers had to rely on virtualization
          or emulation programs to run Windows.
        </p>
        <p className="fs-5 mb-4">
          This is no longer the case. The world of online trading has now been opened up to Mac users worldwide with powerful,
          browser-based and native solutions designed for macOS.
        </p>
        <p className="fs-5 fw-semibold">
          If you are a Mac user, AvaTrade invites you to step into the exciting world of online trading and enjoy the many
          benefits, services, and tools made just for you.
        </p>
      </Col>
    </Row>
  </Container>
</div>
<div style={{ backgroundColor: '#e6f4ea' }} className="text-dark py-5">
  <Container>
    <Row className="align-items-center">
      <Col md={6} className="mb-4 mb-md-0">
        <h2 className="fw-bold mb-3">MetaTrader 4 Mac</h2>
        <p className="fs-5">
          MetaTrader 4 is the world’s most popular trading platform—and for good reason. 
          Its intuitive interface is beginner-friendly, while offering the power, 
          speed, and flexibility needed by advanced traders.
        </p>
        <ul className="list-unstyled fs-5">
          <li className="mb-2">
            <FaChartLine className="text-success me-2" />
            Trade a wide range of assets with up to 400:1 leverage.
          </li>
          <li className="mb-2">
            <FaClipboardCheck className="text-success me-2" />
            Full order types including pending orders & trailing stops.
          </li>
          <li className="mb-2">
            <FaChartPie className="text-success me-2" />
            Choose from 3 chart types and multiple timeframes.
          </li>
          <li className="mb-2">
            <FaRobot className="text-success me-2" />
            Supports algorithmic trading with full EA (Expert Advisor) compatibility.
          </li>
          <li className="mb-2">
            <FaWrench className="text-success me-2" />
            30+ built-in indicators and powerful charting tools.
          </li>
          <li className="mb-2">
            <FaBolt className="text-success me-2" />
            One-click trading with SL/TP directly from the chart.
          </li>
          <li className="mb-2">
            <FaEnvelope className="text-success me-2" />
            Integrated mailing system and built-in platform help.
          </li>
          <li className="mb-2">
            <FaLock className="text-success me-2" />
            Full data backup and strong security encryption.
          </li>
          <li className="mb-2">
            <FaPuzzlePiece className="text-success me-2" />
            Custom indicators, multiple watchlists, and dashboard personalization.
          </li>
          <li className="mb-2">
            <FaSyncAlt className="text-success me-2" />
            Hedging support and multi-order handling.
          </li>
        </ul>
        <Button variant="success" size="lg" className="fw-semibold mt-3">
          Start Trading on MT4
        </Button>
      </Col>

      <Col md={6} className="text-center">
        <img
          src="/assets/metatrader4-mac.png"
          alt="MetaTrader 4 Mac"
          className="img-fluid"
          style={{
            maxHeight: '400px',
            borderRadius: '12px',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          }}
        />
      </Col>
    </Row>
  </Container>
</div>

<div style={{ backgroundColor: '#e6f4ea' }} className="text-dark py-5">
  <Container>
    <Row className="align-items-center">
      <Col md={6} className="mb-4 mb-md-0">
        <h2 className="fw-bold mb-3">MetaTrader 5 Mac</h2>
        <p className="fs-5">
          MetaTrader 5 is an evolved version of the popular MT4 platform by MetaQuotes.
          MT5 is faster, smarter, and offers a seamless trading experience with more tools,
          assets, and charting flexibility—ideal for both beginner and pro traders.
        </p>
        <ul className="list-unstyled fs-5">
          <li className="mb-2">
            <FaChartBar className="text-success me-2" />
            Trade a wide range of assets with high leverage and diversified instruments.
          </li>
          <li className="mb-2">
            <FaClipboardList className="text-success me-2" />
            Full range of order types, including pending orders & trailing stops.
          </li>
          <li className="mb-2">
            <FaLayerGroup className="text-success me-2" />
            38 indicators, 44 analytical tools, and 21 timeframes for powerful charting.
          </li>
          <li className="mb-2">
            <FaCogs className="text-success me-2" />
            One-click trading with integrated SL/TP on charts.
          </li>
          <li className="mb-2">
            <FaRobot className="text-success me-2" />
            Program custom strategies using MQL5 – for EAs, robots & scripts.
          </li>
          <li className="mb-2">
            <FaCalendarAlt className="text-success me-2" />
            Live Economic Calendar & Depth of Market (DOM) for better decision-making.
          </li>
          <li className="mb-2">
            <FaLayerGroup className="text-success me-2" />
            Open unlimited charts and enjoy full dashboard customization with watchlists.
          </li>
        </ul>
        <Button variant="success" size="lg" className="fw-semibold mt-3">
          Start Trading on MT5
        </Button>
      </Col>

      <Col md={6} className="text-center">
        <img
          src="/assets/metatrader5-mac.png"
          alt="MetaTrader 5 Mac"
          className="img-fluid"
          style={{
            maxHeight: '400px',
            borderRadius: '12px',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          }}
        />
      </Col>
    </Row>
  </Container>
</div>



<div style={{ backgroundColor: '#f0fbf5' }} className="text-dark py-5">
  <Container>
    <Row className="align-items-center">
      {/* Left side: Instructions */}
      <Col md={6} className="mb-4 mb-md-0">
        <h2 className="fw-bold mb-4">How to Install Expert Advisors, Custom Indicators or Scripts</h2>
        <p className="fs-5 mb-4">
          AvaTrade MT4 and MT5 allow integration of custom tools to enhance your trading—such as Expert Advisors (EAs), Indicators, and Scripts using MQL4 or MQL5.
        </p>

        <ul className="fs-6 list-unstyled">
          <li className="mb-3">
            <FaApple className="text-success me-2" />
            Open <strong>Finder</strong> on your Mac.
          </li>
          <li className="mb-3">
            <FaFolderOpen className="text-success me-2" />
            Go to the <strong>Applications</strong> folder.
          </li>
          <li className="mb-3">
            <FaApple className="text-success me-2" />
            Find the <strong>AvaTrade Mac MT4 or MT5</strong> app.
          </li>
          <li className="mb-3">
            <FaCogs className="text-success me-2" />
            Right-click it and choose <strong>“Show Package Contents”</strong>.
          </li>
          <li className="mb-3">
            <FaFolderOpen className="text-success me-2" />
            Navigate to: <br />
            <code className="text-muted">Drive C → Program Files → AvaTrade MT4 or MT5 → Experts</code>
          </li>
          <li className="mb-3">
            <FaCogs className="text-success me-2" />
            Restart AvaTrade MT4/MT5 to detect your tools.
          </li>
        </ul>
      </Col>

      {/* Right side: Image or Illustration */}
      <Col md={6} className="text-center">
        <img
          src="/assets/install-expert-mac.png"
          alt="Install on Mac"
          className="img-fluid"
          style={{
            maxHeight: '400px',
            borderRadius: '12px',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          }}
        />
      </Col>
    </Row>
  </Container>
</div>
<div style={{ backgroundColor: '#e8fcee' }} className="text-dark py-5">
  <Container>
    <Row className="align-items-center">
      {/* Left Column: Instructions */}
      <Col md={6}>
        <h2 className="fw-bold mb-4" style={{ color: '#145214' }}>
          Sign up today and get immediate access to AvaTrade’s MetaTrader 4 or 5 for Mac
        </h2>
        <p className="fs-5 mb-4">
          Installing the AvaTrade MetaTrader 4 or MetaTrader 5 on your Mac OS is simple. In just a few easy steps, you'll be ready to start trading.
        </p>
        <h5 className="fw-semibold text-success mb-3">
          How to install AvaTrade MetaTrader 4 or 5 on your Mac?
        </h5>

        <ul className="fs-6 list-unstyled">
          {[
            { text: 'Click to download the AvaTrade MT4 Terminal (.dmg) file.', icon: <FaDownload className="text-success me-2 mt-1" /> },
            { text: 'Click to download the AvaTrade MT5 Terminal (.dmg) file.', icon: <FaDownload className="text-success me-2 mt-1" /> },
            { text: 'Open the AvaTrade.dmg file after it has downloaded.', icon: <FaFileAlt className="text-success me-2 mt-1" /> },
            { text: 'Drag the AvaTrade application to your Applications Folder.', icon: <FaFolderOpen className="text-success me-2 mt-1" /> },
            { text: 'Right-click the AvaTrade Mac MT4/MT5 app and select “Open”. Installation will begin automatically.', icon: <FaMousePointer className="text-success me-2 mt-1" /> },
            { text: 'When launching for the first time, enter your demo or real account login details.', icon: <FaSignInAlt className="text-success me-2 mt-1" /> },
            { text: 'To place an order, press “F9” or “FN”.', icon: <FaKeyboard className="text-success me-2 mt-1" /> },
            { text: 'To enable one-click trading: Extras > Options > Trading > One Click Trading > Tick the box.', icon: <FaCogs className="text-success me-2 mt-1" /> },
          ].map((item, index) => (
            <li key={index} className="d-flex align-items-start mb-2">
              {item.icon}
              <span>{item.text}</span>
            </li>
          ))}
        </ul>

        <Button variant="success" size="lg" className="mt-4 fw-semibold px-4">
          Download for Mac Now
        </Button>
      </Col>

      {/* Right Column: Image */}
      <Col md={6} className="text-center mt-4 mt-md-0">
        <img
          src="/assets/download-mac-guide.png"
          alt="Download MetaTrader Mac"
          className="img-fluid"
          style={{
            maxHeight: '420px',
            borderRadius: '12px',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          }}
        />
      </Col>
    </Row>
  </Container>
</div>


    </>
  );
};

export default MacTrading;
