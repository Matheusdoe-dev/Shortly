import React from "react";
// components
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import ShorterForm from "../../components/Shorter-Form";
import BenefitsSection from "../../components/Benefits-section";
import BoostSectionCTA from "../../components/Boost-section-cta";
import Footer from "../../components/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <Hero />
      <ShorterForm />
      <BenefitsSection />
      <BoostSectionCTA />
      <Footer />
    </>
  );
};

export default Index;
