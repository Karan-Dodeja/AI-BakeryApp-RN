import React from "react";
import { Link } from "react-router-dom";
import HeroSection from "./HeroSection";
import ProductRangeSection from "./ProductRangeSection";
import BakeryDetailsSection from "./BakeryDetailsSection";
import BenefitsOfBreadSection from "./BenefitsOfBreadSection";
import PopularProductsSection from "./PopularProductsSection";
import TestimonialsSection from "./TestimonialsSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import "./style.css";
import Header from "./Header";

const Home = () => {
  return (
    <div className="container">
      <Header />
      <HeroSection />
      <ProductRangeSection />
      <BakeryDetailsSection />
      <BenefitsOfBreadSection />
      <PopularProductsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
