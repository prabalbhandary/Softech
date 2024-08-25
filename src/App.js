import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Work from './pages/Works/Works'
import Pricing from "./pages/Pricing/Pricing";
import UseCases from "./pages/UseCases/UseCases";
import Industries from "./pages/Industries/Industries";
import CaseStudy from "./pages/CaseStudy/CaseStudy";
import Help from "./pages/Help/Help";
import SecurityPrivacy from "./pages/SecurityPrivacy/SecurityPrivacy";
import CustomerReview from "./pages/CustomerReview/CustomerReview";
import About from "./pages/About/About";

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="pt-16 pb-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Work />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/usecases" element={<UseCases />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/casestudy" element={<CaseStudy />} />
          <Route path="/help" element={<Help />} />
          <Route path="/security" element={<SecurityPrivacy />} />
          <Route path="/customer-reviews" element={<CustomerReview />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
