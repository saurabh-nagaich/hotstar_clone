import React from "react";
import Card from "./Card";
import "../assets/style/cardRow.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

function ListSlider({ result }) {
  return (
    <div>
      {/* {console.log(result)} */}
      <h2 className="heading_title">{result.heading_title}</h2>
      <div className="card_selction">
        {result.data.map((e, i) => {
          // console.log(i);
          return (
            <div className="card_item" id={`card_${i}`}>
              <Card
                id={e.id}
                desc={e.description}
                src={e.image_Url}
                title_name={e.title_name}
                type={e.type}
              />
            </div>
          );
        })}
        <div className="card_item" id="card_0">
          <Card />
        </div>
        <div className="card_item" id="card_0">
          <Card />
        </div>
      </div>
      {/* <div className="card_arrow">
        <div>
          <a href={`#card_${x}`} onClick={goBack}>
            <ArrowBackIosIcon />
          </a>
        </div>
        <div>
          <a href={`#card_${x}`} onClick={goRight}>
            <ArrowForwardIosIcon />
          </a>
        </div>
        
      </div> */}
    </div>
  );
}

export default ListSlider;
