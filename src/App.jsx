import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import CarouselDefault from "./components/CarouselDefault";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CarouselDefault />
      <Footer />
    </>
  );
}

export default App;
