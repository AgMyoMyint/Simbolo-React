import React from "react";

// Bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

// CSS
import './assets/style.css'

import Header from './components/Header'
import Contents from './components/Contents'
import Footer from './components/Footer'
import Counter from "./components/Counter";
import Auth from "./components/Auth";

function App() {
  return (
    <div className="container my-4 p-3 border">

        <Header
          title="Header Section"
          description="this is header section"
        />
        <Contents />
        <Footer />

        {/* <Counter /> */}

        {/* <Auth /> */}
    </div>
  )
}

export default App
