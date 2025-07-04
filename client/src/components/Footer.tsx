
import '../style.css';

const Footer = () => {
  return (
    <footer className="pt-5 text-white" style={{ backgroundColor: '#0b0b0c' }}>
      <div className="container">

        <div className="text-center mb-5">
          <h5 className="fw-bold mb-3 text-light">Payment Methods</h5>
          <div className="d-flex justify-content-center flex-wrap gap-3">
            {[
              "mastercard", "visa", "paypal", "skrill", "neteller",
              "wire-transfer", "perfect-money", "boleto"
            ].map((method, i) => (
              <img key={i} src={`/assets/${method}.png`} alt={method} height="30" />
            ))}
          </div>
        </div>

        <div className="row text-start g-4 mb-5">
          {[
            {
              heading: "Forex Trading",
              items: ["What is Forex", "How to Trade Forex", "Vanilla Options", "Forex Pairs"]
            },
            {
              heading: "CFD Trading",
              items: ["What Are CFDs", "Bonds & Treasuries", "ETFs Trading", "Commodities Trading", "Indices Trading", "Stock Trading", "eBook"]
            },
            {
              heading: "Trading Platforms",
              items: ["WebTrader", "PipzoMarkets App", "Options Platform", "MetaTrader 4", "MetaTrader 5", "Automated Trading", "Mac Trading", "Social Trading"]
            },
            {
              heading: "Cryptocurrencies",
              items: ["What Are Cryptocurrencies", "How to Trade", "Bitcoin, Litecoin, Ripple", "Ethereum, Stellar", "Chainlink, Uniswap, MIOTA"]
            },
            {
              heading: "Trading Info",
              items: ["TradeProtect", "Holiday Hours", "Economic Calendar", "Rollover, Calculator", "Earnings Releases"]
            },
            {
              heading: "Education",
              items: ["Trading Videos", "For Beginners", "Market Terms", "Order Types", "Blog, Strategies"]
            }
          ].map((section, index) => (
            <div key={index} className="col-md-2">
              <h6 className="text-success">{section.heading}</h6>
              <ul className="list-unstyled small text-light">
                {section.items.map((item, i) => (
                  <li key={i} className="mb-1">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="row mt-4">
          <div className="col-md-8 text-secondary small">
            <p>
              PipzoMarkets EU Ltd is regulated by the Central Bank of Ireland (No.C53877).<br />
              PipzoMarkets Ltd is regulated by the B.V.I Financial Services Commission (No. SIBA/L/13/1049).<br />
              PipzoMarkets Australia Pty Ltd is regulated by ASIC (No.406684).<br />
              PipzoMarkets Pty is regulated by FSCA (No.45984).<br />
              PipzoMarkets Japan K.K. is regulated by FSA (License No.: 1662), FFAJ (No.: 1574).<br />
              PipzoMarkets Middle East Ltd is regulated by ADGM FRSA (No.190018).<br />
              DT Direct Investment Hub Ltd. is regulated by CySEC (No. 347/17).<br /><br />
              <strong className="text-warning">CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage.</strong><br />
              76% of retail investor accounts lose money when trading CFDs with this provider.
            </p>
          </div>

          <div className="col-md-4">
            <h6 className="text-success">Get The Freshest PipzoMarkets News</h6>
            <form className="d-flex mt-2 mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="form-control bg-dark text-white border-0 rounded-start"
              />
              <button type="submit" className="btn btn-success rounded-end px-4">➤</button>
            </form>

            <h6 className="text-success mb-3">Follow Us</h6>
            <div className="d-flex gap-3 mb-4">
              {["facebook", "youtube", "instagram", "twitter", "linkedin", "telegram"].map((platform, i) => (
                <a key={i} href="#" className="opacity-75 hover-opacity">
                  <img src={`/assets/${platform}.svg`} alt={platform} height="24" />
                </a>
              ))}
            </div>

            <div className="d-flex gap-3">
              <img src="/assets/google-play.png" alt="Google Play" height="40" />
              <img src="/assets/app-store.png" alt="App Store" height="40" />
            </div>
          </div>
        </div>

      </div>

      <div className="text-center text-secondary small py-4 border-top mt-5">
        <img src="/assets/logo-white.png" alt="PipzoMarkets Logo" height="20" className="me-2" />
        &copy; 2007–{new Date().getFullYear()} PipzoMarkets Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
