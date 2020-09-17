import React, { useState } from "react";
import { data } from "../data/cardData";
import ListSlider from "./ListSlider";

function Row() {
  //   console.log(data);
  const [fill, setFill] = useState([...data]);
  // console.log(fill);
  return (
    <div style={{ "margin-top": "3%" }}>
      {fill.map((e, i) => {
        // console.log(e);
        return <ListSlider result={e} />;
      })}
      {/* <ListSlider /> */}
    </div>
  );
}

export default Row;
