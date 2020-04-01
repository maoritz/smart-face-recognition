import React from "react";
import Tilt from "react-tilt";
import lightHeads100 from "./lightHeads100.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma3 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 50 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner">
          <img style={{ paddingTop: "15px" }} src={lightHeads100} alt="logo" />{" "}
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
