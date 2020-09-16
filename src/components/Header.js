import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import i1 from "../assets/image/cartoon.png";
import SearchIcon from "@material-ui/icons/Search";
import "../assets/style/header.scss";

function Header() {
  return (
    <div>
      {/* <h1>Header</h1> */}
      <div className="nav" style={{ flex: 1 }}>
        <div className="nav_partition">
          <div className="nav_item">
            <MenuIcon />
          </div>
          <div className="nav_item ">
            <img
              className="logo"
              src={
                "https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
              }
            />
          </div>
          <div class="nav_item meta-data ">TV</div>
          <div class="nav_item meta-data">Movies</div>
          <div class="nav_item meta-data">Sports</div>
          <div class="nav_item meta-data">News</div>
          <div class="nav_item meta-data">Premium</div>
          <div class="nav_item meta-data new_col">
            <div>Disney+</div>
            <div className="new">NEW</div>
          </div>
          <div class="nav_item meta-data">
            <div class="iconClass kids">
              <img src={i1} />
            </div>
          </div>
        </div>
        <div className="nav_partition nav_partition2">
          <div className="nav_item nav_partition nav_input_area">
            <input className="nav_search" type="text" placeholder="Search" />
            <SearchIcon style={{ color: "#7d8188", fontSize: "1.3rem" }} />
          </div>
          <div className="nav_item nav_btn">SUBSCRIBE</div>
          <div className="nav_item login">LOGIN</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
