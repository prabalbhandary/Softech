import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Work from './pages/Works/Works'
import Pricing from "./pages/Pricing/Pricing";
import UseCases from "./pages/UseCases/UseCases";
import Industries from "./pages/Industries/Industries";

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
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
