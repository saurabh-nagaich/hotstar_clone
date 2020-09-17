import React from "react";
import "../assets/style/card.scss";
import im from "../assets/image/772658-h.webp";
import AddIcon from "@material-ui/icons/Add";
import { Description, Movie } from "@material-ui/icons";

function Card({ id, desc, src, title_name, type }) {
  //data[0] for the cards
  // const { id, image_Url, type, description, title_name } = card_details;

  // console.log(id, image_Url, type, description, title_name);
  // console.log(id, desc, src, title_name, type);
  const text_truncate = (str, length, ending) => {
    if (length == null) {
      length = 100;
    }
    if (ending == null) {
      ending = "...";
    }
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else {
      return str;
    }
  };
  return (
    <div>
      {id && id && desc && src && title_name && type ? (
        <div className="card" id={id}>
          <img src={src} className="card_img" alt="image" />
          <div className="details">
            <div className="detail_main">
              <h3 className="details_item">{title_name}</h3>
              <h6 className="details_item">{type}</h6>
              <p className="details_item">{text_truncate(desc + "", 50)}</p>
              <div className="details_item Add_TO_WATCHLIST">
                <AddIcon />
                <div>WATCH NOW</div>
              </div>

              <div className="details_item Add_TO_WATCHLIST">
                <AddIcon />
                <div>ADD TO WATCHLiST</div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Card;
