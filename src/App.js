import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import MainNav from "./Components/MainNav";
import PrivateComponent from "./Components/PrivateComponent";
import Changepass from "./Changepass";
import PersonalInfo from "./PersonalInfo";
import Kyc from "./Kyc";
import Forgetpassword from "./Forgetpassword";
import VerifyPassword from "./VerifyPassword";
import ProfitCalculator from "./Pages/ProfitCalculator";
import MarginCalculator from "./Pages/MarginCalculator";
import PositionSizeCalculator from "./Pages/PositionSizeCalculator";
import PipCalculator from "./Pages/PipCalculator";
import CurrencyConverter from "./Pages/CurrencyConverter";
import Charts from "./Pages/Charts";
import News from "./Pages/News";
import EconomicCalender from "./Pages/EconomicCalender";
import ForexHeatmap from "./Pages/ForexHeatmap";
import StocksHeatmap from "./Pages/StocksHeatmap";
import ForexCrossRates from "./Pages/ForexCrossRates";
import CryptoHeatmap from "./Pages/CryptoHeatmap";
import Sidebar from './Sidebar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateComponent />}>
          <Route path="/changepass" element={<Changepass />} />
          <Route path="/personalinfo" element={<PersonalInfo />} />
          <Route path="/kyc" element={<Kyc />} />
          <Route path="/profitcalculator" element={<ProfitCalculator />} />
          <Route path="/margincalculator" element={<MarginCalculator />} />
          <Route path="/position_size_calculator" element={<PositionSizeCalculator />} />
          <Route path="/pip_calculator" element={<PipCalculator />} />
          <Route path="/currency_converter" element={<CurrencyConverter />} />
          {/* Specify routes where Sidebar should be rendered */}
          <Route path="/charts" element={<ChartsWithSidebar />} />
          <Route path="/news" element={<NewsWithSidebar />} />
          <Route path="/economic_calender" element={<EconomicCalenderWithSidebar />} />
          <Route path="/forex_heatmap" element={<ForexHeatmapWithSidebar />} />
          <Route path="/crypto_heatmap" element={<CryptoHeatmapWithSidebar />} />
          <Route path="/stock_heatmap" element={<StocksHeatmapWithSidebar />} />
          <Route path="/forex_cross_rates" element={<ForexCrossRatesWithSidebar />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/forgetpassword" element={<Forgetpassword />} />
        <Route path="/verifypassword" element={<VerifyPassword />} />
      </Routes>

      <Routes>
        <Route path="/signup" element={<MainNav />} />
        <Route path="/login" element={<MainNav />} />
      </Routes>
    </BrowserRouter>
  );
}
// Sidebar components with each specific page
const ChartsWithSidebar = () => (
  <>
    <Sidebar />
    <Charts />
  </>
);
const NewsWithSidebar = () => (
  <>
    <Sidebar />
    <News />
  </>
);
const EconomicCalenderWithSidebar = () => (
  <>
    <Sidebar />
    <EconomicCalender />
  </>
);
const ForexHeatmapWithSidebar = () => (
  <>
    <Sidebar />
    <ForexHeatmap />
  </>
);
const CryptoHeatmapWithSidebar = () => (
  <>
    <Sidebar />
    <CryptoHeatmap />
  </>
);
const StocksHeatmapWithSidebar = () => (
  <>
    <Sidebar />
    <StocksHeatmap />
  </>
);
const ForexCrossRatesWithSidebar = () => (
  <>
    <Sidebar />
    <ForexCrossRates />
  </>
);

export default App;
