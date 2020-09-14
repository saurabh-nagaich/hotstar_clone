import React from "react";
import "../assets/style/ImgComp.scss";

function ImgComp({ src }) {
  //   let imgStyles = {
  //     width: 150 + "vh",
  //     height: 50 + "vh",

  //     "border-radius": 50 + "px",
  //     "background-size": "cover",

  //     // transform: "scale(1, 1)",
  //     // margin: "0 0 0 60vh",
  //   };

  const obj = {
    title: "Saath Nibhaana Saathiya ",
    Total_seasons: 20,
    lanuage: "Hindi",
    channal: "StarPlus",
    description: `An emotionally-charged story about Kokila Modi, a stern matriarch of
    the Modi family, who plays mentor to her demure daughter-in-law,
    Gopi and turns her into a confident woman.`,
  };

  return (
    <div style={{ margin: 0, padding: 0, display: "flex" }}>
      <div className="text_palate">
        <div class="content-holder show-content">
          <h1 class="toptitle clear-both">{obj.title}</h1>
          <div class="content-meta">
            <div class="props-meta-details">
              <span>
                <span class="meta-data">{obj.Total_seasons} Seasons</span>
                <span class="meta-data"> . 2180 </span>
                <div>
                  <span class="meta-data">Episodes . Family</span>
                  <span class="meta-data"> . 12+</span>
                  <span class="meta-data"> . {obj.lanuage}</span>
                  <span class="meta-data"> . {obj.channal}</span>
                </div>
              </span>
            </div>
          </div>
          <div class="description"> {obj.description}</div>
        </div>
        <div className="play_link">
          <div>icon</div>
          <div className="watch_title">
            <h3 className="start_title">Watch First Episode</h3>
            <div class="meta-data">S1 E1 . 3 May 2010</div>
          </div>
        </div>
      </div>
      <img src={src} alt="slide-img" className="slider_img" />
    </div>
  );
}
export default ImgComp;
