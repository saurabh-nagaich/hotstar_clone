import React from "react";
import "./App.css";
import Header from "./components/Header";
import ListSlider from "./components/ListSlider";
import Slider from "./components/Slider";

function App() {
  return (
    <div style={{ color: "white" }}>
      <Header />
      <Slider />
      <ListSlider />
      <h1 style={{ color: "white" }}>hotstar</h1>
    </div>
  );
}

export default App;
