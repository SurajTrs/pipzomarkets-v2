import React from 'react';
import { Accordion, Button, Col, Container, Row } from 'react-bootstrap';
import { FaChartLine, FaGlobe, FaHandsHelping, FaLayerGroup, FaMobileAlt, FaQuestionCircle, FaRobot, FaShieldAlt } from 'react-icons/fa';

const WhatIsMetaTrader: React.FC = () => {
  return (
    <>
    <div style={{ backgroundColor: '#014421', color: '#fff', padding: '60px 20px' }} className="text-center">
      {/* Title and Description */}
      <h2 className="fw-bold mb-3">What is MetaTrader?</h2>
      <p className="fs-5 mx-auto" style={{ maxWidth: '800px' }}>
        MetaTrader is a powerful and widely used trading platform that offers advanced charting,
        multiple order types, and support for algorithmic trading. Whether you're a beginner or
        an expert, MetaTrader provides the tools and flexibility to analyze financial markets,
        perform trades, and manage accounts with ease.
      </p>

      {/* Full-Width Image */}
      <div style={{ marginTop: '40px' }}>
        <img
          src="https://www.avatrade.com/images/page/avatrade-go-app-mockup.webp"
          alt="MetaTrader Platform"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
          }}
        />
      </div>
    </div>
     
      <div style={{ backgroundColor: '#e6f4ea', color: '#1a1a1a', padding: '60px 0' }}>
        <Container>
          <Row className="align-items-center">
            {/* Left: Text */}
            <Col md={6} className="mb-4 mb-md-0">
              <h2 className="fw-bold mb-3">What is MetaTrader?</h2>
              <p className="fs-5">
                MetaTrader is a very popular platform for Forex traders to trade a wide range of assets.
                It is the gateway between you and the trading markets. A feature-rich platform, it gives 
                traders the ability to conduct a wide range of trading activities, including charting and 
                technical analysis, monitoring the markets, and automating trades through Expert Advisors. 
                Let’s take a look at the MetaTrader in more detail, compare MT4 vs MT5, and review their features.
              </p>
            </Col>
  
            {/* Right: Image */}
            <Col md={6} className="text-center">
              <img
                src="https://www.avatrade.com/images/page/avatrade-go-app-mockup.webp"
                alt="MetaTrader Platform"
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
      <div style={{ backgroundColor: '#e6f4ea', color: '#1a1a1a', padding: '60px 0' }}>
      <Container>
        <Row className="align-items-center flex-column-reverse flex-md-row">
          {/* Left: Image */}
          <Col md={6} className="text-center mt-4 mt-md-0">
            <img
              src="https://www.avatrade.com/images/page/avatrade-go-app-mockup.webp"
              alt="MetaTrader Platform"
              className="img-fluid"
              style={{
                maxHeight: '400px',
                borderRadius: '12px',
                boxShadow: '0 0 10px rgba(0,0,0,0.1)',
              }}
            />
          </Col>

          {/* Right: Text */}
          <Col md={6}>
            <h2 className="fw-bold mb-3">What is the MetaTrader Platform?</h2>
            <p className="fs-5">
              MetaTrader is a piece of trading software that is very popular among traders.
              It is considered the platform of choice and is offered by most reputable brokers, including AvaTrade.
              Let’s take a closer look at the MetaTrader platform.
            </p>
            <p className="fs-5 mb-2">
              There are two versions of the MetaTrader Platform currently available:
            </p>
            <ul className="fs-5">
              <li>MetaTrader 4 – Available on desktop, mobile, and web</li>
              <li>MetaTrader 5 – Available on desktop, mobile, and web</li>
            </ul>
            <p className="fs-5">
              No matter which platform you choose, it won’t slow down your system.
              MetaTrader is lightweight and optimized for fast, smooth execution—
              essential in fast-paced and volatile markets.
            </p>
            <Button variant="success" size="lg" className="fw-semibold mt-3">
              Download MetaTrader 4/5
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
    <div style={{ backgroundColor: '#e6f4ea', color: '#1a1a1a', padding: '60px 0' }}>
      <Container>
        <Row className="align-items-start">
          {/* Left: Text */}
          <Col md={7}>
            <h2 className="fw-bold mb-3">MetaTrader 4 in Forex Trading</h2>
            <p className="fs-5">
              MetaTrader 4 (MT4) is the world’s most popular trading platform that offers all you need for
              online trading on one interface. On a single platform, you will find a powerful combination
              of analytical technologies and leading trading tools that allow traders to implement even
              the most complex strategies.
            </p>

            <h4 className="fw-bold mt-4">The MQL Language:</h4>
            <p className="fs-5">
              Developed by MetaQuotes Software Corp., the MetaQuotes Language (MQL) is a scripting language
              built into the platform for programming specific trading strategies. These scripts allow users
              to automate trading, customize indicators, and create robust trading systems.
            </p>
            <p className="fs-5">
              MQL assists in analyzing large volumes of information and makes it easier to work with expert
              systems in both MetaTrader 4 and 5.
            </p>

            <h4 className="fw-bold mt-4">Key Features:</h4>
            <ul className="fs-5">
              <li><strong>Expert Advisors:</strong> Algorithmic trading systems that operate based on internal charting and real-time events.</li>
              <li><strong>Custom Indicators:</strong> In addition to built-in indicators, you can develop and apply your own custom indicators.</li>
              <li><strong>Scripts:</strong> Useful for executing one-time tasks like closing all orders or opening a set of trades.</li>
              <li><strong>Library:</strong> A collection of shared custom functions used across multiple programs or trading systems.</li>
            </ul>
          </Col>

          {/* Right: Image */}
          <Col md={5} className="text-center mt-4 mt-md-0">
            <img
              src="https://www.avatrade.com/images/page/mt4-mac-banner.webp"
              alt="MetaTrader 4 Forex"
              className="img-fluid"
              style={{
                maxHeight: '450px',
                borderRadius: '12px',
                boxShadow: '0 0 12px rgba(0,0,0,0.1)',
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
    <div style={{ backgroundColor: '#e6f4ea', color: '#1a1a1a', padding: '60px 0' }}>
      <Container>
        <Row className="align-items-start">
          {/* Left: Text */}
          

          {/* Right: Image */}
          <Col md={5} className="text-center mt-4 mt-md-0">
            <img
              src="https://www.avatrade.com/images/page/mt5-banner-platform.webp"
              alt="MetaTrader 5 Platform"
              className="img-fluid"
              style={{
                maxHeight: '450px',
                borderRadius: '12px',
                boxShadow: '0 0 12px rgba(0,0,0,0.1)',
              }}
            />
          </Col>
          <Col md={7}>
            <h2 className="fw-bold mb-3">What is MetaTrader 5?</h2>
            <p className="fs-5">
              MetaTrader 5 (MT5) is the newest iteration of the popular MetaTrader platform. 
              While MT5 is newer, it is not necessarily an upgraded version of MT4. 
              Both MT4 and MT5 are robust trading platforms with similar interfaces and 
              back-testing capabilities. However, MT5 was designed to better support 
              non-Forex and U.S. markets, making it a different tool for different needs.
            </p>

            <h4 className="fw-bold mt-4">Key Features of MT5:</h4>
            <ul className="fs-5">
              <li><strong>New Order Types:</strong> Includes ‘buy stop limit’ and ‘sell stop limit’ orders, plus partial order filling policies.</li>
              <li><strong>Additional Indicators & Widgets:</strong> 8 more built-in indicators and 13 new graphical tools compared to MT4.</li>
              <li><strong>Economic Calendar:</strong> Built-in calendar with news releases, impact levels, market consensus, and more.</li>
              <li><strong>Improved Strategy Tester:</strong> Multi-threaded, fast EA testing with remote optimization and multi-currency backtesting.</li>
              <li><strong>More Timeframes:</strong> 21 timeframe options (12 more than MT4) for deeper technical analysis.</li>
              <li><strong>Funds Transfer:</strong> Easily move funds between accounts on the same server for convenience and flexibility.</li>
              <li><strong>Market Depth:</strong> Visual bid/ask volume with the ALT+B shortcut for better price execution.</li>
              <li><strong>Netting System:</strong> Allows one position per financial instrument (ideal for certain market regulations).</li>
              <li><strong>Email System:</strong> Built-in mail supports attachments for internal communication.</li>
              <li><strong>Tradable Assets:</strong> Trade Forex, CFDs, futures, cryptocurrencies, bonds, and options. Access 1,000+ instruments (vs 250 in MT4).</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
    <div style={{ backgroundColor: '#cde9dc', padding: '60px 20px', color: '#1a1a1a' }} className="text-center">
      <h2 className="fw-bold mb-3">MetaTrader 4 vs MetaTrader 5</h2>
      <p className="fs-5 mx-auto" style={{ maxWidth: '800px' }}>
        The more recently launched MetaTrader 5 is not that different from its prototype, MT4, even though it is 
        advertised as substantially more advanced. MT5 offers more powerful charting systems, deeper analytical 
        tools, faster execution, and the ability to trade cryptocurrencies.
      </p>
      <p className="fs-5 mx-auto" style={{ maxWidth: '800px' }}>
        MT4 is still considered an excellent platform for Forex traders and remains the most widely used and 
        downloaded platform on the market. However, if advanced tools and asset variety appeal to you more, 
        MT5 might be the right choice.
      </p>
    </div>
    
    <div style={{ backgroundColor: '#e6f4ea', padding: '60px 20px' }}>
      <Container>
        <h2 className="fw-bold text-center mb-4">MT4 vs MT5 Features</h2>

        {/* Scrollable and Centered Table Wrapper */}
        <div className="d-flex justify-content-center">
          <div style={{ overflowX: 'auto', maxWidth: '100%' }}>
            <table className="table table-bordered table-striped text-center align-middle" style={{ minWidth: '700px' }}>
              <thead className="table-success">
                <tr>
                  <th>Feature</th>
                  <th>MT4</th>
                  <th>MT5</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Availability to brokers</td><td>Very popular</td><td>Very popular</td></tr>
                <tr><td>User-friendly and easy to navigate</td><td>Extremely easy</td><td>Extremely easy</td></tr>
                <tr><td>Roll-over and Hedging</td><td>Possible</td><td>Possible</td></tr>
                <tr><td>Programming Language used</td><td>MQL4</td><td>IDE</td></tr>
                <tr><td>Order Execution Types</td><td>3</td><td>4</td></tr>
                <tr><td>Pending Order Types</td><td>4</td><td>6</td></tr>
                <tr><td>Depth of Market</td><td>No</td><td>Yes, but not available initially</td></tr>
                <tr><td>Technical Indicators</td><td>30</td><td>38</td></tr>
                <tr><td>Timeframes</td><td>9</td><td>21</td></tr>
                <tr><td>Economic Calendar</td><td>Not Available</td><td>Available in MT5 apps</td></tr>
                <tr><td>Reports</td><td>Tables only</td><td>Tables + Charts</td></tr>
                <tr><td>Excel Export</td><td>Yes</td><td>Yes</td></tr>
                <tr><td>Open Trades View</td><td>Lots only</td><td>Lots, Quantity + Milliseconds</td></tr>
                <tr><td>Docked Charts</td><td>Not available</td><td>Available</td></tr>
                <tr><td>Market Watch</td><td>Less detailed</td><td>More details + easy navigation</td></tr>
                <tr><td>Partial Order Filling</td><td>Not available</td><td>Available</td></tr>
                <tr><td>Email System</td><td>No attachments</td><td>With attachments</td></tr>
                <tr><td>Strategy Tester</td><td>Single threaded</td><td>Multi-threaded + Multi-currency + Agent Manager</td></tr>
                <tr><td>Netting</td><td>Not supported</td><td>Not supported</td></tr>
                <tr><td>Exchange Trading</td><td>Not supported</td><td>Not supported</td></tr>
                <tr><td>Funds Transfer between Accounts</td><td>Not supported</td><td>Supported</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </div>
    <div style={{ backgroundColor: '#e6f4ea', padding: '60px 0' }}>
      <Container>
        <Row className="align-items-center">
          {/* Left: Content */}
          <Col md={7}>
            <h2 className="fw-bold mb-4">Why Trade with AvaTrade and MT4?</h2>
            <ul className="fs-5 ps-3">
              <li className="mb-3">
                <FaShieldAlt className="text-success me-2" />
                <strong>Fully Regulated Broker:</strong> Over 10 years of global experience, multiple awards, and presence in 150+ countries.
              </li>
              <li className="mb-3">
                <FaGlobe className="text-success me-2" />
                <strong>More Markets:</strong> 250+ assets including forex, commodities, indices, ETFs, and more.
              </li>
              <li className="mb-3">
                <FaChartLine className="text-success me-2" />
                <strong>Deep Analysis:</strong> 30+ charting tools and strategy back-testing on MT4.
              </li>
              <li className="mb-3">
                <FaRobot className="text-success me-2" />
                <strong>Automated Trading:</strong> Full EA compatibility, plus support for custom bots.
              </li>
              <li className="mb-3">
                <FaLayerGroup className="text-success me-2" />
                <strong>Flexible Conditions:</strong> Competitive spreads on the most traded instruments.
              </li>
              <li className="mb-3">
                <FaMobileAlt className="text-success me-2" />
                <strong>Mobile Trading:</strong> Free MT4/MT5 apps for Android & iOS.
              </li>
              <li className="mb-3">
                <FaHandsHelping className="text-success me-2" />
                <strong>Full Support:</strong> Daily insights, educational content, and 24/5 multilingual assistance.
              </li>
            </ul>
          </Col>

          {/* Right: Image */}
          <Col md={5} className="text-center mt-4 mt-md-0">
            <img
              src="https://www.avatrade.com/images/page/mt4-app-preview.webp"
              alt="AvaTrade MT4 Platform"
              className="img-fluid"
              style={{
                borderRadius: '12px',
                boxShadow: '0 0 12px rgba(0,0,0,0.1)',
                maxHeight: '450px',
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
    <div style={{ backgroundColor: '#f2fdf5' }} className="py-5 text-dark">
      <Container>
        <h2 className="text-center fw-bold mb-4" style={{ color: '#145214' }}>
          <FaQuestionCircle className="me-2 text-success" />
          MetaTrader 4 – Main FAQs
        </h2>

        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>How do I open an MT4 trading account with AvaTrade?</Accordion.Header>
            <Accordion.Body>
              Opening an MT4 demo or live account with AvaTrade is quick and simple.
              Just register on our website in under two minutes. Then, go to the
              MetaTrader 4 page to download the platform. When you launch MT4, log in
              using the demo or real account credentials sent to your email. You’ll
              then have full access to MT4’s powerful features.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Can I use the MT4 platform on my smartphone?</Accordion.Header>
            <Accordion.Body>
              Absolutely! MT4 is available as a mobile app for both iOS and Android devices.
              It also works on desktop and as a web-based platform. Your trading activity syncs
              across devices, so you can place an order on your PC and modify it later on your smartphone.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Is the newer MT5 version better than the MT4 version?</Accordion.Header>
            <Accordion.Body>
              MT4 and MT5 are both developed by MetaQuotes. MT5 is more suitable for stock
              trading and offers advanced order management. MT4, however, remains the preferred
              choice for Forex trading. For most retail traders, both platforms offer the
              essential tools and features to trade successfully.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
      </>
  );
};

export default WhatIsMetaTrader;
