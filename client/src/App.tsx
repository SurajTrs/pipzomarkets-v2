import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import BottomTicker from "./components/BottomTicker";
import HomePage from "./pages/HomePage";
import WhatIsForex from "./pages/Products/Forex Trading/WhatIsForex";
import HowToTradeForex from "./pages/Products/Forex Trading/HowToTradeForex";
import VanillaOptions from "./pages/Products/Forex Trading/VanillaOptions";
import WhatAreCFDs from './pages/Products/ CFD Trading/WhatAreCFDs'
import HowToTradeCFDs from "./pages/Products/ CFD Trading/ HowToTradeCFDs";
import BondsAndTreasuries from "./pages/Products/ CFD Trading/BondsAndTreasuries";
import ETFsTrading from "./pages/Products/ CFD Trading/ETFsTrading";
import EbookDownload from "./pages/Products/ CFD Trading/EbookDownload";
import WhatAreStocks from "./pages/Products/Stock Trading/WhatAreStocks";
import HowToTradeStocks from "./pages/Products/Stock Trading/HowToTradeStocks";
import HowToTradeCommodities from "./pages/Products/Commodities/HowToTradeCommodities";
import HowToTradeGold from "./pages/Products/Commodities/HowToTradeGold";
import HowToTradeOil from "./pages/Products/Commodities/HowToTradeOil";
import Energies from "./pages/Products/Commodities/Energies";
import PreciousMetals from "./pages/Products/Commodities/PreciousMetals";
import Agriculture from "./pages/Products/Agriculture Trading/Agriculture";
import IndicesTrading from "./pages/Products/Indices Trading/IndicesTrading";
import HowToTradeIndices from "./pages/Products/Indices Trading/HowToTradeIndices";
import VIXIndex from "./pages/Products/Indices Trading/VIXIndex";
import CoursePage from "./pages/Academy/CoursePage";

const App: React.FC = () => {
  return (
    <Router>
       <NavBar />
    <div id="app-root">
      <main className="page-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/WhatIsForex" element={<WhatIsForex />} />
          <Route path="/HowToTradeForex" element={<HowToTradeForex />} />
          <Route path="/VanillaOptions" element={<VanillaOptions />} />
          <Route path="/WhatAreCFDs" element={<WhatAreCFDs />} />
          <Route path="/HowToTradeCFDs" element={<HowToTradeCFDs />} />
          <Route path="/BondsAndTreasuries" element={<BondsAndTreasuries />} />
          <Route path="/ETFsTrading" element={<ETFsTrading />} />
          <Route path="/EbookDownload" element={<EbookDownload />} />
          <Route path="/WhatAreStocks" element={<WhatAreStocks />} />
          <Route path="/HowToTradeStocks" element={<HowToTradeStocks />} />
          <Route path="/HowToTradeCommodities" element={<HowToTradeCommodities />} />
          <Route path="/HowToTradeGold" element={<HowToTradeGold />} />
          <Route path="/HowToTradeOil" element={<HowToTradeOil />} />
          <Route path="/Energies" element={<Energies />} />
          <Route path="/PreciousMetals" element={<PreciousMetals />} />
          <Route path="/Agriculture" element={<Agriculture />} />
          <Route path="/IndicesTrading" element={<IndicesTrading />} />
          <Route path="/HowToTradeIndices" element={<HowToTradeIndices />} />
          <Route path="/VIXIndex" element={<VIXIndex />} />
          <Route path="/CoursePage" element={<CoursePage />} />
          
        </Routes>
      </main>
      <BottomTicker />
    </div>
  </Router>
  
  );
};

export default App;
