import React from "react";
import Logo from "../Logo/Logo";

const Navigation = ({ isSignedIn, onRouteChange }) => {
  if (isSignedIn) {
    return (
      <nav className="mr3">
        {/* <div style={{ position: "flex" }}></div> */}
        <div style={{ float: "left" }} className="pl6 pt4">
          <Logo />
        </div>
        <div
          className="ma3 pr5 f5 pt3"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <p className="pr3 black" style={{ float: "right" }}>
            Hello, Maor Attias
          </p>
          <p
            onClick={() => onRouteChange("signout")}
            className="link dim black b pointer pr4"
            style={{ float: "right" }}
          >
            Sign Out
          </p>
        </div>
      </nav>
    );
  }
  return (
    <nav style={{ display: "flex", justifyContent: "flex-start" }}>
      <div style={{ position: "relative" }}></div>
    </nav>
  );
};

export default Navigation;
