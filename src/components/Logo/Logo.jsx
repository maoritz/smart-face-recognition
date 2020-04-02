import React from "react";
import Tilt from "react-tilt";
import Icon from "./icons8-face-id-100.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma2">
      <Tilt
        className="br2 shadow-2 bg-white"
        options={{ max: 50 }}
        style={{ height: 130, width: 130 }}
      >
        <div className="Tilt-inner">
          <img style={{ paddingTop: "15px" }} src={Icon} alt="logo" />{" "}
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
