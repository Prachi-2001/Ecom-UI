import React from "react";
import Navbar from "../components/Navbar";
import BreadCrumbs from "../components/BreadCrumbs";
import Filters from "../components/Filters";
import ProductCarousel from "../components/ProductCarousel";
import HeroSection from "../components/HeroSection";
import CarouselDefault from "../components/CarouselDefault";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <BreadCrumbs />
      <hr />
      <HeroSection />
      <Filters />
      <ProductCarousel />
      <CarouselDefault />
      <Footer />
    </div>
  );
};

export default Main;
