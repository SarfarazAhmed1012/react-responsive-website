import React from "react";
import "../../App.css";
import Cards from "../Cards";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
// import Footer from "../Footer";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
      {/* <Footer /> */}
    </>
  );
}

export default Home;
