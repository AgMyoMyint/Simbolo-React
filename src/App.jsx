import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Navbar from "./components/Navbar.jsx";
import Products from "./pages/product/Products.jsx";
import Cart from "./pages/cart/Cart.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favourite" element={<div> favourite</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
