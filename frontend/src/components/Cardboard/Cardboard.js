import React from "react";
import Card from "../Card/Card";
import "./Cardboard.scss";
import PostsNavBar from "../postsNavbar/postsNavbar";

function Cardboard() {
  return (
    <div className="Cardboard_wrapper">
      {/* <PostsNavBar /> */}
      <div className="Cardboard_main">
        <div className="Cardboard_mid">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="Cardboard_low">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Cardboard;
