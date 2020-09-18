import React from "react";
import "./App.css";
import CardSlider from "./components/CardSlider";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ListSlider from "./components/ListSlider";
import Row from "./components/Row";
import Slider from "./components/Slider";

function App() {
  return (
    <div style={{ color: "white" }}>
      <Header />
      <Slider />
      <Row />
      <Footer />
    </div>
  );
}

export default App;
