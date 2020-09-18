import React, { useEffect, useState } from "react";
import { data } from "../data/cardData";
import ListSlider from "./ListSlider";

import Aos from "aos";
import "aos/dist/aos.css";

function Row() {
  //   console.log(data);
  const [fill, setFill] = useState([...data]);
  const [name, setName] = useState("true");
  const animation = [
    "fade",
    "fade-up",
    "fade-down",
    "fade-left",
    "fade-right",
    "fade-up-right",
    "fade-up-left",
    "fade-down-right",
    "fade-down-left",
  ];
  // console.log(fill);

  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  return (
    <div
      style={{ "margin-top": "3%" }}
      onClick={(e) => console.log(e.target.parentNode.parentNode)}
    >
      {fill.map((e, i) => {
        // console.log(e);
        return (
          <div
            data-aos={i % 2 === 0 ? "fade-left" : "fade-right"}
            id={`Row_${i}`}
          >
            <ListSlider result={e} />
          </div>
        );
      })}
      {/* <ListSlider /> */}
    </div>
  );
}

export default Row;
