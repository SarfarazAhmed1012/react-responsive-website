import React from "react";
import Navbar from "./components/NavBar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Routes } from "react-router";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Home />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="services" component={Services} />
          <Route path="products" component={Products} />
          <Route path="sign-up" component={SignUp} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
