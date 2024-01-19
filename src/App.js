import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./Pages/LandingPage.jsx";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer.jsx";
import HomePage from "./Pages/HomePage.jsx";
import w2 from "../src/assets/w2.png";
import ins2 from "../src/assets/ins2.png";
import Products from "./Products.jsx";
import Build from "./components/Build.jsx";

function App() {
  const features = [
    {
      src: w2,
      title: "Value",
      description:
        "Swap from your own wallet. Be your own bank. No centralized bridges or wrapping assets",
    },
    {
      src: ins2,
      title: "Yield",
      description:
        "Provide Liquidity and Earn Yield on your Native Assets with Impermanent Loss Protection",
    },
    {
      src: ins2,
      title: "Insurance",
      description: "Get Impermanent Loss Protection on your Liquidity Pools",
    },
    {
      src: w2,
      title: "Staking",
      description:
        "Earn Yield on your Native Assets with Impermanent Loss Protection",
    },
  ];
  return (
    <div className="home">
      <BrowserRouter>
        <Navbar />
        <Hero />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/build" element={<Build />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
