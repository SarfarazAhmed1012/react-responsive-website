import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {} from "react-dom";
import "./App.css";
import Navbar from "./components/NavBar";
import Home from "./components/pages/Home";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Home />
        <Routes>
          <Route path="/" exact component={Home} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
