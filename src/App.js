import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {} from "react-dom";
import "./App.css";
import Navbar from "./components/NavBar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
