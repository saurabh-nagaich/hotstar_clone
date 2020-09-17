import React from "react";
import "./App.css";
import CardSlider from "./components/CardSlider";
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
      {/* <CardSlider /> */}
      <h1 style={{ color: "white" }}>hotstar</h1>
      <h1 style={{ color: "white" }}>hotstar</h1>
      <h1 style={{ color: "white" }}>hotstar</h1>
    </div>
  );
}

export default App;
