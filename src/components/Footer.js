import React from "react";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import goPlay from "../assets/image/google-play-badge.png";
import apStore from "../assets/image/kisspng-app-store-apple-iphone-grand-mercure-mysuru-5b04f9d9ad0681.4617876915270527617087.png";

import "../assets/style/footer.scss";

function Footer() {
  return (
    <div className="box flex">
      <div>
        <div className="footer_link">
          <div className="footer_link_items ">About Disney+ Hotstar</div>
          <div className="footer_link_items ">Terms Of Use</div>
          <div className="footer_link_items ">Privacy Policy (New)</div>
          <div className="footer_link_items ">FAQ</div>
          <div className="footer_link_items ">Feedback</div>
          <div className="footer_link_items ">Careers</div>
        </div>
        <div style={{ "padding-right": "5%" }} className="meta-data font">
          &copy; 2020 STAR. All Rights Reserved. HBO, Home Box Office and all
          related channel and programming logos are service marks of, and all
          related programming visuals and elements are the property of, Home Box
          Office, Inc. All rights reserved.
        </div>
      </div>
      {/*  */}
      <div>
        <div className="color">Connect with us</div>
        <div>
          <FacebookIcon style={{ color: "#9a9d", margin: "8%" }} />
          <TwitterIcon style={{ color: "#9a9d", margin: "8%" }} />
        </div>
      </div>
      {/*  */}
      <div>
        <div className="color store_text">Disney+ Hotstar App</div>
        <div className="store">
          <img width={"120px"} src={goPlay} />
          <img width={"140px"} src={apStore} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
