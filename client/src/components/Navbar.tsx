import React, { useEffect, useState } from 'react';

const Navbar: React.FC = () => {
  const [isAnyDropdownOpen, setIsAnyDropdownOpen] = useState(false);

  useEffect(() => {
    const dropdowns = document.querySelectorAll('.nav-item.hover-dropdown');

    const handleMouseEnter = () => setIsAnyDropdownOpen(true);
    const handleMouseLeave = () => setIsAnyDropdownOpen(false);

    dropdowns.forEach(dropdown => {
      dropdown.addEventListener('mouseenter', handleMouseEnter);
      dropdown.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      dropdowns.forEach(dropdown => {
        dropdown.removeEventListener('mouseenter', handleMouseEnter);
        dropdown.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  useEffect(() => {
    const contentWrapper = document.getElementById('app-root');
    if (contentWrapper) {
      if (isAnyDropdownOpen) {
        contentWrapper.classList.add('blur-backdrop');
      } else {
        contentWrapper.classList.remove('blur-backdrop');
      }
    }
  }, [isAnyDropdownOpen]);

  return (
    <>
      <div className="top-bar py-1 border-bottom border-success" style={{ backgroundColor: '#d0f9e0' }}>
        <div className="container d-flex justify-content-end align-items-center gap-3 small text-dark">
          <span className="d-flex align-items-center gap-1">
            <i className="bi bi-person" /> Professional Trader
          </span>
          <span>|</span>
          <span>PipzoMarkets<sup>TM</sup></span>
          <span>|</span>
          <span role="img" aria-label="flag">🇮🇳</span>
          <span>|</span>
          <span className="help-link">Help</span>
          <span>|</span>
          <div className="dropdown">
            <span
              className="dropdown-toggle"
              id="languageDropdown"
              data-bs-toggle="dropdown"
              role="button"
              aria-expanded="false"
            >
              English
            </span>
            <ul className="dropdown-menu dropdown-menu-end">
              <li><a className="dropdown-item" href="#">English</a></li>
              <li><a className="dropdown-item" href="#">Hindi</a></li>
              <li><a className="dropdown-item" href="#">Spanish</a></li>
            </ul>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg shadow-sm sticky-top" style={{ backgroundColor: '#e6fff2' }}>
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              src="https://www.avatrade.com/images/logo.svg"
              alt="PIPZOMARKETS"
              height="30"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown hover-dropdown position-static">
                <a className="nav-link dropdown-toggle text-dark fw-semibold" href="#">
                  Products
                </a>
                <div
                  className="dropdown-menu mega-menu p-4 shadow w-100 border-0 rounded-0 m-0"
                  style={{
                    backgroundColor: '#e6fff2',
                    left: '0',
                    right: '0',
                    top: '100%',
                    transform: 'none',
                  }}
                >
                  <div className="row g-2">
                    <div className="col-md-2">
                      <h6 className="text-dark">Forex Trading</h6>
                      <a className="dropdown-item" href="WhatIsForex">What is Forex</a>
                      <a className="dropdown-item" href="HowToTradeForex">How to Trade Forex</a>
                      <a className="dropdown-item" href="VanillaOptions">Vanilla Options</a>
                    </div>
                    <div className="col-md-2">
                      <h6 className="text-dark">CFD Trading</h6>
                      <a className="dropdown-item" href="WhatAreCFDs">What are CFDs</a>
                      <a className="dropdown-item" href="HowToTradeCFDs">How to Trade CFDs</a>
                      <a className="dropdown-item" href="BondsAndTreasuries">Bonds & Treasuries</a>
                      <a className="dropdown-item" href="ETFsTrading">ETFs Trading</a>
                      <a className="dropdown-item" href="EbookDownload">eBook</a>
                    </div>
                    <div className="col-md-2">
                      <h6 className="text-dark">Stock Trading</h6>
                      <a className="dropdown-item" href="WhatAreStocks">What are Stocks</a>
                      <a className="dropdown-item" href="HowToTradeStocks">How to Trade Stocks</a>
                    </div>
                    <div className="col-md-2">
                      <h6 className="text-dark">Commodities Trading</h6>
                      <a className="dropdown-item" href="HowToTradeCommodities">How to Trade Commodities</a>
                      <a className="dropdown-item" href="HowToTradeGold">How to Trade Gold</a>
                      <a className="dropdown-item" href="HowToTradeOil">How to Trade Oil</a>
                      <a className="dropdown-item" href="Energies">Energies</a>
                      <a className="dropdown-item" href="PreciousMetals">Precious Metals</a>
                      <a className="dropdown-item" href="Agriculture">Agriculture</a>
                    </div>
                    <div className="col-md-2">
                      <h6 className="text-dark">Indices Trading</h6>
                      <a className="dropdown-item" href="IndicesTrading">What Are Indices</a>
                      <a className="dropdown-item" href="HowToTradeIndices">How to Trade Indices</a>
                      <a className="dropdown-item" href="VIXIndex">VIX Index</a>
                    </div>
                    <div className="col-md-2">
                      <h6 className="text-dark">Futures</h6>
                      <a className="dropdown-item" href="Futures">Futures</a>
                    </div>
                  </div>
                </div>
              </li>

              <li className="nav-item dropdown hover-dropdown position-static">
                <a className="nav-link dropdown-toggle text-dark fw-semibold" href="#">
                  Academy
                </a>
                <div
                  className="dropdown-menu mega-menu p-4 shadow w-100 border-0 rounded-0 m-0"
                  style={{
                    backgroundColor: '#e6fff2',
                    left: '0',
                    right: '0',
                    top: '100%',
                    transform: 'none',
                  }}
                >
                  <div className="row g-3">
                    <div className="col-md-3">
                      <h6 className="text-dark">Academy</h6>
                      <a className="dropdown-item" href="CoursePage">Our Popular Courses</a>
                      <a className="dropdown-item" href="#">Start Trading Now... Quick & Dirty</a>
                      <a className="dropdown-item" href="#">Platforms Tutorials</a>
                      <a className="dropdown-item" href="#">Forex, Cryptos & Commodities</a>
                      <a className="dropdown-item" href="#">Introduction to Technical Analysis</a>
                    </div>
                    
                    <div className="col-md-2">
                    <h6 className="text-dark">Courses Topics</h6>
                    <a className="dropdown-item" href="#">Forex Trading Courses</a>
                    <a className="dropdown-item" href="#">Courses for Beginners</a>
                    <a className="dropdown-item" href="#">All Courses</a>
                    <a className="dropdown-item" href="#">Stock Market Trading Courses</a>
                  </div>
                  </div>
                </div>
              </li>
            
              <li className="nav-item dropdown hover-dropdown position-static">
                <a className="nav-link dropdown-toggle text-dark fw-semibold" href="#">
                  Trading Platforms
                </a>
                <div
                  className="dropdown-menu mega-menu p-4 shadow-lg w-100 border-0 rounded-0 m-0"
                  style={{ backgroundColor: '#e6fff2', left: '0', right: '0', top: '100%', transform: 'none' }}
                >
                  <div className="row g-3">
                    <div className="col-md-3">
                      <h6 className="text-dark">Web & Apps</h6>
                      <a className="dropdown-item" href="#">WebTrader</a>
                      <a className="dropdown-item" href="#">AvaOptions</a>
                      <a className="dropdown-item" href="#">AvaTrade App</a>
                      <a className="dropdown-item" href="#">Mac Trading</a>
                    </div>
                    <div className="col-md-3">
                      <h6 className="text-dark">MetaTrader 4</h6>
                      <a className="dropdown-item" href="#">What is MetaTrader</a>
                      <a className="dropdown-item" href="#">Guardian Angel</a>
                      <a className="dropdown-item" href="#">Expert Advisors</a>
                      <a className="dropdown-item" href="#">VPS</a>
                    </div>
                    <div className="col-md-3">
                      <h6 className="text-dark">MetaTrader 5</h6>
                      <a className="dropdown-item" href="#">How to Trade with MetaTrader 5</a>
                      <a className="dropdown-item" href="#">Algorithmic Trading on MT5</a>
                    </div>
                    <div className="col-md-3">
                      <h6 className="text-dark">Automated Trading</h6>
                      <a className="dropdown-item" href="#">AvaSocial</a>
                      <a className="dropdown-item" href="#">DupliTrade</a>
                      <a className="dropdown-item" href="#">Capitalise.ai</a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown hover-dropdown position-static">
                <a className="nav-link dropdown-toggle text-dark fw-semibold" href="#">
                  Cryptocurrencies
                </a>
                <div
                  className="dropdown-menu mega-menu p-4 shadow-lg w-100 border-0 rounded-0 m-0"
                  style={{ backgroundColor: '#e6fff2', left: '0', right: '0', top: '100%', transform: 'none' }}
                >
                  <div className="row g-3">
                    <div className="col-md-3">
                      <h6 className="text-dark">Crypto Basics</h6>
                      <a className="dropdown-item" href="#">What Are Cryptocurrencies</a>
                      <a className="dropdown-item" href="#">How to Trade Cryptocurrencies</a>
                      <a className="dropdown-item" href="#">Crypto ETFs</a>
                    </div>
                    <div className="col-md-3">
                      <h6 className="text-dark">Bitcoin</h6>
                      <a className="dropdown-item" href="#">What is Bitcoin</a>
                      <a className="dropdown-item" href="#">How to Trade Bitcoin</a>
                      <a className="dropdown-item" href="#">Bitcoin ETFs</a>
                    </div>
                    <div className="col-md-3">
                      <h6 className="text-dark">Top Coins</h6>
                      <a className="dropdown-item" href="#">Ethereum</a>
                      <a className="dropdown-item" href="#">Ripple</a>
                      <a className="dropdown-item" href="#">Solana</a>
                      <a className="dropdown-item" href="#">Dogecoin</a>
                    </div>
                    <div className="col-md-3">
                      <h6 className="text-dark">More Cryptos</h6>
                      <a className="dropdown-item" href="#">Stellar Lumens</a>
                      <a className="dropdown-item" href="#">Litecoin</a>
                      <a className="dropdown-item" href="#">Chainlink</a>
                      <a className="dropdown-item" href="#">Shiba Inu</a>
                      <a className="dropdown-item" href="#">Uniswap</a>
                      <a className="dropdown-item" href="#">Polygon</a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown hover-dropdown position-static">
                <a className="nav-link dropdown-toggle text-dark fw-semibold" href="#">
                  Trading Info
                </a>
                <div className="dropdown-menu mega-menu p-4 shadow-lg w-100 border-0 rounded-0 m-0" style={{ backgroundColor: '#e6fff2', left: '0', right: '0', top: '100%', transform: 'none' }}>
                  <div className="row row-cols-1 row-cols-md-5 g-4">
                    <div>
                      <h6 className="text-dark">Indices</h6>
                      {['SMI', 'US_500', 'CANNABIS INDEX', 'US.TECH100', 'US_30', 'FTSEMIB', 'US_2000', 'INDIA50', 'DOLLAR INDEX', 'SPAIN 35'].map((item, i) => <a className="dropdown-item" href="#" key={i}>{item}</a>)}
                      <a className="dropdown-item fw-semibold text-primary" href="#">View All</a>
                    </div>
                    <div>
                      <h6 className="text-dark">Commodities</h6>
                      {['Crude Oil', 'Copper', 'Brent Oil', 'Heating Oil', 'Gasoline', 'Natural Gas', 'Gold Trading', 'Silver', 'Wheat', 'Corn'].map((item, i) => <a className="dropdown-item" href="#" key={i}>{item}</a>)}
                      <a className="dropdown-item fw-semibold text-primary" href="#">View All</a>
                    </div>
                    <div>
                      <h6 className="text-dark">Stocks</h6>
                      {['Apple', 'Amazon', 'Microsoft', 'Netflix', 'Pfizer', 'Adobe', 'Alibaba', 'AT&T', 'Intel', 'Teva', 'American Express'].map((item, i) => <a className="dropdown-item" href="#" key={i}>{item}</a>)}
                      <a className="dropdown-item fw-semibold text-primary" href="#">View All</a>
                    </div>
                    <div>
                      <h6 className="text-dark">Forex pairs</h6>
                      {['EUR/USD', 'GBP-USD', 'USD-JPY', 'EUR/JPY', 'AUD/USD', 'EUR/GBP', 'USD/CAD', 'USD/CHF', 'GBP/JPY', 'EUR/CAD', 'EUR/AUD', 'AUD/CHF'].map((item, i) => <a className="dropdown-item" href="#" key={i}>{item}</a>)}
                      <a className="dropdown-item fw-semibold text-primary" href="#">View All</a>
                    </div>
                    <div>
                      <h6 className="text-dark">Options</h6>
                      {['US500CASH Options', 'XAU/USD Options', 'EUR/USD Options', 'XAG/USD Options', 'GBP/USD Options', 'USD/ZAR Options', 'USD/JPY Options', 'AUD/USD Options', 'USD/CAD Options', 'NZD/USD Options', 'GBP/JPY Options', 'USD/CHF Options'].map((item, i) => <a className="dropdown-item" href="#" key={i}>{item}</a>)}
                      <a className="dropdown-item fw-semibold text-primary" href="#">View All</a>
                    </div>
                  </div>
                  <hr className="my-4" />
                  <div className="mt-3 ps-3 border-start border-warning">
                    <ul className="list-unstyled small">
                      <li className="text-muted">Fundamental Analysis</li>
                      <li className="text-muted">Technical Analysis</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown hover-dropdown position-static">
                <a className="nav-link dropdown-toggle text-dark fw-semibold" href="#">
                  Education
                </a>
                <div className="dropdown-menu mega-menu p-4 shadow-lg w-100 border-0 rounded-0 m-0" style={{ backgroundColor: '#e6fff2', left: '0', right: '0', top: '100%', transform: 'none' }}>
                  <div className="row g-4">
                    <div className="col-md-3">
                      <h6 className="text-dark">Trading for Beginners</h6>
                      <a className="dropdown-item" href="#">How to Trade Online</a>
                      <a className="dropdown-item" href="#">Currency Trading</a>
                      <a className="dropdown-item" href="#">Copy Trading</a>
                      <a className="dropdown-item" href="#">Short Selling</a>
                      <a className="dropdown-item" href="#">Financial Derivatives</a>
                    </div>
                    <div className="col-md-3">
                      <h6 className="text-dark">Trading Platforms Tutorials</h6>
                      <a className="dropdown-item" href="#">Technical Analysis Indicators & Strategies</a>
                      <a className="dropdown-item" href="#">Order Types</a>
                      <a className="dropdown-item" href="#">Online Trading Strategies</a>
                      <a className="dropdown-item" href="#">Market Terms</a>
                    </div>
                    <div className="col-md-3">
                      <h6 className="text-dark">Webinars</h6>
                      <a className="dropdown-item" href="#">Economic Indicators</a>
                      <a className="dropdown-item" href="#">Trading Rules</a>
                      <a className="dropdown-item" href="#">Blog</a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown hover-dropdown position-static">
                <a className="nav-link dropdown-toggle text-dark fw-semibold" href="#">
                Partners
                </a>
                <div className="dropdown-menu mega-menu p-4 shadow-lg w-100 border-0 rounded-0 m-0" style={{ backgroundColor: '#e6fff2', left: '0', right: '0', top: '100%', transform: 'none' }}>
                  <div className="row g-4">
                    <div className="col-md-3">
                     
                      <a className="dropdown-item" href="#">Partners Type</a>
                      <a className="dropdown-item" href="#">AvaPartner Blog</a>
                      <a className="dropdown-item" href="#">Become a Partner</a>
                      
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown hover-dropdown position-static">
                <a className="nav-link dropdown-toggle text-dark fw-semibold" href="#">
                  About
                </a>
                <div className="dropdown-menu mega-menu p-4 shadow-lg w-100 border-0 rounded-0 m-0" style={{ backgroundColor: '#e6fff2', left: '0', right: '0', top: '100%', transform: 'none' }}>
                  <div className="row g-4">
                    <div className="col-md-4">
                      <a className="dropdown-item fw-semibold" href="#">Football Sponsorship – UAE Pro League</a>
                      <a className="dropdown-item fw-semibold" href="#">F1 Sponsorship – Red Bull Racing</a>
                      <a className="dropdown-item fw-semibold" href="#">AvaTrade Reviews</a>
                      <a className="dropdown-item fw-semibold" href="#">Why AvaTrade?</a>
                      <a className="dropdown-item fw-semibold" href="#">Regulation</a>
                      <a className="dropdown-item fw-semibold" href="#">Accessibility</a>
                      <a className="dropdown-item fw-semibold" href="#">Management</a>
                    </div>
                    <div className="col-md-4">
                      <a className="dropdown-item fw-semibold" href="#">Contact Us</a>
                      <a className="dropdown-item fw-semibold" href="#">Withdrawals and Deposits</a>
                      <a className="dropdown-item fw-semibold" href="#">Refer a Friend</a>
                    </div>
                    <div className="col-md-4">
                      <a className="dropdown-item fw-semibold" href="#">Legal Documents</a>
                      <a className="dropdown-item fw-semibold" href="#">Awards</a>
                      <a className="dropdown-item fw-semibold" href="#">New Accounts Pack</a>
                      <a className="dropdown-item fw-semibold" href="#">AvaTrade VIP</a>
                      <a className="dropdown-item fw-semibold" href="#">Interest Rates</a>
                      <a className="dropdown-item fw-semibold" href="#">Trading Websites</a>
                    </div>
                  </div>
                </div>
              </li>

              <li className="nav-item d-flex align-items-center">
                <a className="nav-link text-dark" href="#search">
                  <i className="bi bi-search"></i>
                </a>
              </li>
            </ul>

            <div className="d-flex align-items-center gap-3">
              <a href="#login" className="text-decoration-none text-dark fw-semibold">Login</a>
              <a href="#register" className="btn text-white px-3" style={{ backgroundColor: '#198754' }}>Register Now</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
