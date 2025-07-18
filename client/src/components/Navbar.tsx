import React, { useEffect, useState } from 'react';
import pipzologo1 from '../assets/pipzologo1.png'; 
import '../style.css';
const Navbar: React.FC = () => {
  const [isAnyDropdownOpen, setIsAnyDropdownOpen] = useState(false);

  useEffect(() => {
  const dropdowns = document.querySelectorAll('.nav-item.hover-dropdown');
  let closeTimeout: number | null = null;
  let currentlyOpen: Element | null = null;

  dropdowns.forEach((dropdown) => {
    const menu = dropdown.querySelector('.dropdown-menu');

    const handleMouseEnter = () => {
      // Cancel close timer
      if (closeTimeout) {
        clearTimeout(closeTimeout);
        closeTimeout = null;
      }

      // Close any other open dropdown
      if (currentlyOpen && currentlyOpen !== dropdown) {
        const openMenu = currentlyOpen.querySelector('.dropdown-menu');
        currentlyOpen.classList.remove('show');
        openMenu?.classList.remove('show');
      }

      // Open the hovered dropdown
      dropdown.classList.add('show');
      menu?.classList.add('show');
      currentlyOpen = dropdown;
      setIsAnyDropdownOpen(true);
    };

    const handleMouseLeave = () => {
      // Delay closing
      closeTimeout = setTimeout(() => {
        dropdown.classList.remove('show');
        menu?.classList.remove('show');
        if (currentlyOpen === dropdown) currentlyOpen = null;
        setIsAnyDropdownOpen(false);
      }, 300); // Customize delay here
    };

    dropdown.addEventListener('mouseenter', handleMouseEnter);
    dropdown.addEventListener('mouseleave', handleMouseLeave);
  });

  return () => {
    dropdowns.forEach((dropdown) => {
      dropdown.replaceWith(dropdown.cloneNode(true)); // Quick way to remove all events
    });
    if (closeTimeout) clearTimeout(closeTimeout);
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
      <div
        className="top-bar py-1 border-bottom border-success"
        style={{ backgroundColor: '#d0f9e0' }}
      >
        <div className="container d-flex justify-content-end align-items-center gap-3 small text-dark">
          <span className="d-flex align-items-center gap-1">
            <i className="bi bi-person" />
            Professional Trader
          </span>
          <span>|</span>
          <span>
            PipzoMarkets<sup>TM</sup>
          </span>
          <span>|</span>
          <span role="img" aria-label="flag">
            🇮🇳
          </span>
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
              style={{ cursor: 'pointer' }}
            >
              English
            </span>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="languageDropdown">
              <li>
                <a className="dropdown-item" href="#">
                  English
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Hindi
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Spanish
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <nav
        className="navbar navbar-expand-lg shadow-sm sticky-top"
        style={{ backgroundColor: '#e6fff2' }}
      >
        <div className="container">
          <a className="navbar-brand" href="/">
  <img
    src={pipzologo1}
    alt="PIPZOMARKETS"
    style={{ height: 'auto', width: '100px', maxHeight: '60px' }} // or customize as needed
    className="img-fluid"
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
              {/* Products Dropdown */}
              <li className="nav-item dropdown hover-dropdown position-static">
                <a
                  className="nav-link dropdown-toggle text-dark fw-semibold"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products
                </a>
                <div
                  className="dropdown-menu mega-menu p-4 shadow w-100 border-0 rounded-0 m-0"
                  style={{
                    backgroundColor: '#e6fff2',
                    left: 0,
                    right: 0,
                    top: '100%',
                    transform: 'none',
                  }}
                >
                  <div className="row g-2">
                    <div className="col-md-2">
                      <h6 className="text-dark">Forex Trading</h6>
                      <a className="dropdown-item" href="WhatIsForex">
                        What is Forex
                      </a>
                      <a className="dropdown-item" href="HowToTradeForex">
                        How to Trade Forex
                      </a>
                      <a className="dropdown-item" href="VanillaOptions">
                        Vanilla Options
                      </a>
                    </div>
                    <div className="col-md-2">
                      <h6 className="text-dark">CFD Trading</h6>
                      <a className="dropdown-item" href="WhatAreCFDs">
                        What are CFDs
                      </a>
                      <a className="dropdown-item" href="HowToTradeCFDs">
                        How to Trade CFDs
                      </a>
                      <a className="dropdown-item" href="BondsAndTreasuries">
                        Bonds &amp; Treasuries
                      </a>
                      <a className="dropdown-item" href="ETFsTrading">
                        ETFs Trading
                      </a>
                      <a className="dropdown-item" href="EbookDownload">
                        eBook
                      </a>
                    </div>
                    <div className="col-md-2">
                      <h6 className="text-dark">Stock Trading</h6>
                      <a className="dropdown-item" href="WhatAreStocks">
                        What are Stocks
                      </a>
                      <a className="dropdown-item" href="HowToTradeStocks">
                        How to Trade Stocks
                      </a>
                    </div>
                    <div className="col-md-2">
                      <h6 className="text-dark">Commodities Trading</h6>
                      <a className="dropdown-item" href="HowToTradeCommodities">
                        How to Trade Commodities
                      </a>
                      <a className="dropdown-item" href="HowToTradeGold">
                        How to Trade Gold
                      </a>
                      <a className="dropdown-item" href="HowToTradeOil">
                        How to Trade Oil
                      </a>
                      <a className="dropdown-item" href="Energies">
                        Energies
                      </a>
                      <a className="dropdown-item" href="PreciousMetals">
                        Precious Metals
                      </a>
                      <a className="dropdown-item" href="Agriculture">
                        Agriculture
                      </a>
                    </div>
                    <div className="col-md-2">
                      <h6 className="text-dark">Indices Trading</h6>
                      <a className="dropdown-item" href="IndicesTrading">
                        What Are Indices
                      </a>
                      <a className="dropdown-item" href="HowToTradeIndices">
                        How to Trade Indices
                      </a>
                      <a className="dropdown-item" href="VIXIndex">
                        VIX Index
                      </a>
                    </div>
                    <div className="col-md-2">
                      <h6 className="text-dark">Futures</h6>
                      <a className="dropdown-item" href="Futures">
                        Futures
                      </a>
                    </div>
                  </div>
                </div>
              </li>

              {/* Academy Dropdown */}
              <li className="nav-item dropdown hover-dropdown position-static">
                <a
                  className="nav-link dropdown-toggle text-dark fw-semibold"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Academy
                </a>
                <div
                  className="dropdown-menu mega-menu p-4 shadow w-100 border-0 rounded-0 m-0"
                  style={{
                    backgroundColor: '#e6fff2',
                    left: 0,
                    right: 0,
                    top: '100%',
                    transform: 'none',
                  }}
                >
                  <div className="row g-3">
                    <div className="col-md-3">
                      <h6 className="text-dark">Academy</h6>
                      <a className="dropdown-item" href="CoursePage">
                        Our Popular Courses
                      </a>
                      <a className="dropdown-item" href="CoursePage">
                        Start Trading Now... Quick &amp; Dirty
                      </a>
                      <a className="dropdown-item" href="PlatformsPage">
                        Platforms Tutorials
                      </a>
                      <a className="dropdown-item" href="FCCpage">
                        Forex, Cryptos &amp; Commodities
                      </a>
                      <a className="dropdown-item" href="Introduction">
                        Introduction to Technical Analysis
                      </a>
                    </div>
                    <div className="col-md-2">
                      <h6 className="text-dark">Courses Topics</h6>
                      <a className="dropdown-item" href="ForexTradingCoursesPage">
                        Forex Trading Courses
                      </a>
                      <a className="dropdown-item" href="CoursesForBeginners">
                        Courses for Beginners
                      </a>
                      <a className="dropdown-item" href="AllCourses">
                        All Courses
                      </a>
                      <a className="dropdown-item" href="StockTradingCoursesPage">
                        Stock Market Trading Courses
                      </a>
                    </div>
                  </div>
                </div>
              </li>

              {/* Trading Platforms Dropdown */}
              <li className="nav-item dropdown hover-dropdown position-static">
                <a
                  className="nav-link dropdown-toggle text-dark fw-semibold"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Trading Platforms
                </a>
                <div
                  className="dropdown-menu mega-menu p-4 shadow-lg w-100 border-0 rounded-0 m-0"
                  style={{ backgroundColor: '#e6fff2', left: 0, right: 0, top: '100%', transform: 'none' }}
                >
                  <div className="row g-3">
                    <div className="col-md-3">
                      <h6 className="text-dark">Web &amp; Apps</h6>
                      <a className="dropdown-item" href="WebTrader">
                        WebTrader
                      </a>
                      <a className="dropdown-item" href="AvaOptions">
                        AvaOptions
                      </a>
                      <a className="dropdown-item" href="PipzoTradeApp">
                        AvaTrade App
                      </a>
                      <a className="dropdown-item" href="MacTrading">
                        Mac Trading
                      </a>
                    </div>
                    <div className="col-md-3">
                      <h6 className="text-dark">MetaTrader 4</h6>
                      <a className="dropdown-item" href="MetaTrader">
                        What is MetaTrader
                      </a>
                      <a className="dropdown-item" href="GuardianAngel">
                        Guardian Angel
                      </a>
                      <a className="dropdown-item" href="ExpertAdvisors">
                        Expert Advisors
                      </a>
                      <a className="dropdown-item" href="VPS">
                        VPS
                      </a>
                    </div>
                    <div className="col-md-3">
                      <h6 className="text-dark">MetaTrader 5</h6>
                      <a className="dropdown-item" href="TradeMT5">
                        How to Trade with MetaTrader 5
                      </a>
                      <a className="dropdown-item" href="Algorithmic">
                        Algorithmic Trading on MT5
                      </a>
                    </div>
                    <div className="col-md-3">
                      <h6 className="text-dark">Automated Trading</h6>
                      <a className="dropdown-item" href="PIPZOSocialBanner">
                        PipzoSocial
                      </a>
                      <a className="dropdown-item" href="DupliTrade">
                        DupliTrade
                      </a>
                      <a className="dropdown-item" href="Capitalise">
                        Capitalise.ai
                      </a>
                    </div>
                  </div>
                </div>
              </li>

              {/* Cryptocurrencies Dropdown */}
              <li className="nav-item dropdown hover-dropdown position-static">
                <a
                  className="nav-link dropdown-toggle text-dark fw-semibold"
                  href="Cryptocurrencies"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Cryptocurrencies
                </a>
                <div
                  className="dropdown-menu mega-menu p-4 shadow-lg w-100 border-0 rounded-0 m-0"
                  style={{ backgroundColor: '#e6fff2', left: 0, right: 0, top: '100%', transform: 'none' }}
                >
                  <div className="row g-3">
                    <div className="col-md-3">
                      <h6 className="text-dark">Crypto Basics</h6>
                      <a className="dropdown-item" href="Cryptocurrencies">
                        What Are Cryptocurrencies
                      </a>
                      <a className="dropdown-item" href="HowCrypto">
                        How to Trade Cryptocurrencies
                      </a>
                      <a className="dropdown-item" href="CryptoETF">
                        Crypto ETFs
                      </a>
                    </div>
                    <div className="col-md-3">
                      <h6 className="text-dark">Bitcoin</h6>
                      <a className="dropdown-item" href="Bitcoin">
                        What is Bitcoin
                      </a>
                      <a className="dropdown-item" href="HowBitcoin">
                        How to Trade Bitcoin
                      </a>
                      <a className="dropdown-item" href="BitcoinETF">
                        Bitcoin ETFs
                      </a>
                    </div>
                    <div className="col-md-3">
                      <h6 className="text-dark">Top Coins</h6>
                      <a className="dropdown-item" href="#">
                        Ethereum
                      </a>
                      <a className="dropdown-item" href="#">
                        Ripple
                      </a>
                      <a className="dropdown-item" href="#">
                        Solana
                      </a>
                      <a className="dropdown-item" href="#">
                        Dogecoin
                      </a>
                    </div>
                    <div className="col-md-3">
                      <h6 className="text-dark">More Cryptos</h6>
                      <a className="dropdown-item" href="#">
                        Stellar Lumens
                      </a>
                      <a className="dropdown-item" href="#">
                        Litecoin
                      </a>
                      <a className="dropdown-item" href="#">
                        Chainlink
                      </a>
                      <a className="dropdown-item" href="#">
                        Shiba Inu
                      </a>
                      <a className="dropdown-item" href="#">
                        Uniswap
                      </a>
                      <a className="dropdown-item" href="#">
                        Polygon
                      </a>
                    </div>
                  </div>
                </div>
              </li>

              {/* Trading Info Dropdown */}
              <li className="nav-item dropdown hover-dropdown position-static">
                <a
                  className="nav-link dropdown-toggle text-dark fw-semibold"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Trading Info
                </a>
                <div
                  className="dropdown-menu mega-menu p-4 shadow-lg w-100 border-0 rounded-0 m-0"
                  style={{ backgroundColor: '#e6fff2', left: 0, right: 0, top: '100%', transform: 'none' }}
                >
                  <div className="row row-cols-1 row-cols-md-5 g-4">
                    <div>
                      <h6 className="text-dark">Indices</h6>
                      {[
                        'SMI',
                        'US_500',
                        'CANNABIS INDEX',
                        'US.TECH100',
                        'US_30',
                        'FTSEMIB',
                        'US_2000',
                        'INDIA50',
                        'DOLLAR INDEX',
                        'SPAIN 35',
                      ].map((item, i) => (
                        <a className="dropdown-item" href="#" key={i}>
                          {item}
                        </a>
                      ))}
                      <a className="dropdown-item fw-semibold text-primary" href="#">
                        View All
                      </a>
                    </div>
                    <div>
                      <h6 className="text-dark">Commodities</h6>
                      {[
                        'Crude Oil',
                        'Copper',
                        'Brent Oil',
                        'Heating Oil',
                        'Gasoline',
                        'Natural Gas',
                        'Gold Trading',
                        'Silver',
                        'Wheat',
                        'Corn',
                      ].map((item, i) => (
                        <a className="dropdown-item" href="#" key={i}>
                          {item}
                        </a>
                      ))}
                      <a className="dropdown-item fw-semibold text-primary" href="#">
                        View All
                      </a>
                    </div>
                    <div>
                      <h6 className="text-dark">Stocks</h6>
                      {[
                        'Apple',
                        'Amazon',
                        'Microsoft',
                        'Netflix',
                        'Pfizer',
                        'Adobe',
                        'Alibaba',
                        'AT&T',
                        'Intel',
                        'Teva',
                        'American Express',
                      ].map((item, i) => (
                        <a className="dropdown-item" href="#" key={i}>
                          {item}
                        </a>
                      ))}
                      <a className="dropdown-item fw-semibold text-primary" href="#">
                        View All
                      </a>
                    </div>
                    <div>
                      <h6 className="text-dark">Forex pairs</h6>
                      {[
                        'EUR/USD',
                        'GBP-USD',
                        'USD-JPY',
                        'EUR/JPY',
                        'AUD/USD',
                        'EUR/GBP',
                        'USD/CAD',
                        'USD/CHF',
                        'GBP/JPY',
                        'EUR/CAD',
                        'EUR/AUD',
                        'AUD/CHF',
                      ].map((item, i) => (
                        <a className="dropdown-item" href="#" key={i}>
                          {item}
                        </a>
                      ))}
                      <a className="dropdown-item fw-semibold text-primary" href="#">
                        View All
                      </a>
                    </div>
                    <div>
                      <h6 className="text-dark">Options</h6>
                      {[
                        'US500CASH Options',
                        'XAU/USD Options',
                        'EUR/USD Options',
                        'XAG/USD Options',
                        'GBP/USD Options',
                        'USD/ZAR Options',
                        'USD/JPY Options',
                        'AUD/USD Options',
                        'USD/CAD Options',
                        'NZD/USD Options',
                        'GBP/JPY Options',
                        'USD/CHF Options',
                      ].map((item, i) => (
                        <a className="dropdown-item" href="#" key={i}>
                          {item}
                        </a>
                      ))}
                      <a className="dropdown-item fw-semibold text-primary" href="#">
                        View All
                      </a>
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

              {/* Education Dropdown */}
              <li className="nav-item dropdown hover-dropdown position-static">
                <a
                  className="nav-link dropdown-toggle text-dark fw-semibold"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Education
                </a>
                <div
                  className="dropdown-menu mega-menu p-4 shadow-lg w-100 border-0 rounded-0 m-0"
                  style={{ backgroundColor: '#e6fff2', left: 0, right: 0, top: '100%', transform: 'none' }}
                >
                  <div className="row g-4">
                    <div className="col-md-3">
                      <h6 className="text-dark">Trading for Beginners</h6>
                      <a className="dropdown-item" href="#">
                        How to Trade Online
                      </a>
                      <a className="dropdown-item" href="#">
                        Currency Trading
                      </a>
                      <a className="dropdown-item" href="#">
                        Copy Trading
                      </a>
                      <a className="dropdown-item" href="#">
                        Short Selling
                      </a>
                      <a className="dropdown-item" href="#">
                        Financial Derivatives
                      </a>
                    </div>
                    <div className="col-md-3">
                      <h6 className="text-dark">Trading Platforms Tutorials</h6>
                      <a className="dropdown-item" href="#">
                        Technical Analysis Indicators &amp; Strategies
                      </a>
                      <a className="dropdown-item" href="#">
                        Order Types
                      </a>
                      <a className="dropdown-item" href="#">
                        Online Trading Strategies
                      </a>
                      <a className="dropdown-item" href="#">
                        Market Terms
                      </a>
                    </div>
                    <div className="col-md-3">
                      <h6 className="text-dark">Webinars</h6>
                      <a className="dropdown-item" href="#">
                        Economic Indicators
                      </a>
                      <a className="dropdown-item" href="#">
                        Trading Rules
                      </a>
                      <a className="dropdown-item" href="#">
                        Blog
                      </a>
                    </div>
                  </div>
                </div>
              </li>

              {/* Partners Dropdown */}
              <li className="nav-item dropdown hover-dropdown position-static">
                <a
                  className="nav-link dropdown-toggle text-dark fw-semibold"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Partners
                </a>
                <div
                  className="dropdown-menu mega-menu p-4 shadow-lg w-100 border-0 rounded-0 m-0"
                  style={{ backgroundColor: '#e6fff2', left: 0, right: 0, top: '100%', transform: 'none' }}
                >
                  <div className="row g-4">
                    <div className="col-md-3">
                      <a className="dropdown-item" href="#">
                        Partners Type
                      </a>
                      <a className="dropdown-item" href="#">
                        AvaPartner Blog
                      </a>
                      <a className="dropdown-item" href="#">
                        Become a Partner
                      </a>
                    </div>
                  </div>
                </div>
              </li>

              {/* About Dropdown */}
              <li className="nav-item dropdown hover-dropdown position-static">
                <a
                  className="nav-link dropdown-toggle text-dark fw-semibold"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About
                </a>
                <div
                  className="dropdown-menu mega-menu p-4 shadow-lg w-100 border-0 rounded-0 m-0"
                  style={{ backgroundColor: '#e6fff2', left: 0, right: 0, top: '100%', transform: 'none' }}
                >
                  <div className="row g-4">
                    <div className="col-md-4">
                      <a className="dropdown-item fw-semibold" href="#">
                        Football Sponsorship – UAE Pro League
                      </a>
                      <a className="dropdown-item fw-semibold" href="#">
                        F1 Sponsorship – Red Bull Racing
                      </a>
                      <a className="dropdown-item fw-semibold" href="#">
                        AvaTrade Reviews
                      </a>
                      <a className="dropdown-item fw-semibold" href="#">
                        Why AvaTrade?
                      </a>
                      <a className="dropdown-item fw-semibold" href="#">
                        Regulation
                      </a>
                      <a className="dropdown-item fw-semibold" href="#">
                        Accessibility
                      </a>
                      <a className="dropdown-item fw-semibold" href="#">
                        Management
                      </a>
                    </div>
                    <div className="col-md-4">
                      <a className="dropdown-item fw-semibold" href="#">
                        Contact Us
                      </a>
                      <a className="dropdown-item fw-semibold" href="#">
                        Withdrawals and Deposits
                      </a>
                      <a className="dropdown-item fw-semibold" href="#">
                        Refer a Friend
                      </a>
                    </div>
                    <div className="col-md-4">
                      <a className="dropdown-item fw-semibold" href="#">
                        Legal Documents
                      </a>
                      <a className="dropdown-item fw-semibold" href="#">
                        Awards
                      </a>
                      <a className="dropdown-item fw-semibold" href="#">
                        New Accounts Pack
                      </a>
                      <a className="dropdown-item fw-semibold" href="#">
                        AvaTrade VIP
                      </a>
                      <a className="dropdown-item fw-semibold" href="#">
                        Interest Rates
                      </a>
                      <a className="dropdown-item fw-semibold" href="#">
                        Trading Websites
                      </a>
                    </div>
                  </div>
                </div>
              </li>

              {/* Search Icon */}
              <li className="nav-item d-flex align-items-center">
                <a className="nav-link text-dark" href="#search" aria-label="Search">
                  <i className="bi bi-search"></i>
                </a>
              </li>
            </ul>

            {/* Login/Register */}
            <div className="d-flex align-items-center gap-3">
              <a href="login" className="text-decoration-none text-dark fw-semibold">
                Login
              </a>
             <a
         href="register"
  className="btn text-white px-3"
  style={{ backgroundColor: '#198754' }}
>
  Register Now
</a>

            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
