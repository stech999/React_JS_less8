import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CartPage from "./components/site/CartPage";
import ProductPage from "./components/site/product";
import { MainPage } from "./components/site/MainPage";
import Registration from "./components/site/Registration";
import Catalog from "./components/Catalog";

function App() {
  return (
    <div className="center">
      <Router>
        <Routes>
          <Route path="/product" element={<ProductPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/cartPage" element={<CartPage />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/catalog" element={<Catalog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
