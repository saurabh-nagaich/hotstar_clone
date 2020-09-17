import React, { useEffect, useState } from "react";
import Card from "./Card";
import "../assets/style/cardRow.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

function CardSlider() {
  // array for component to show inside the slider
  // add components to array

  let sliderArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const [x, setX] = useState(0);

  const gotoLeft = () => {
    console.log(x);
    x >= 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };

  const gotoRight = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };

  // setInterval(gotoRight,3000);

  return (
    <div className="card_selction">
      {sliderArr.map((item, index) => {
        return (
          <div
            key={index}
            class="card_item"
            style={{ transform: `translateX(${x}%)` }}
          >
            <Card />
          </div>
        );
      })}
      {/* // buttons */}
      <button id="gotoLeft" onClick={gotoLeft}>
        <img src="https://img.icons8.com/android/24/ffffff/expand-arrow.png" />
      </button>
      <button id="gotoRight" onClick={gotoRight}>
        <img src="https://img.icons8.com/android/24/ffffff/expand-arrow.png" />
      </button>
    </div>
  );
}

export default CardSlider;
