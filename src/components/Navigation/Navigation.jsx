import React from "react";
import Logo from "../Logo/Logo";

const Navigation = ({ isSignedIn, onRouteChange }) => {
  if (isSignedIn) {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-start" }}>
        <div style={{ position: "flex" }}>
          <Logo />
        </div>
        <p
          onClick={() => onRouteChange("signout")}
          className="f3 link dim black underline pa3 pointer"
        >
          Sign Out
        </p>
      </nav>
    );
  }
  return (
    <nav style={{ display: "flex", justifyContent: "flex-start" }}>
      <div style={{ position: "relative" }}>
        <Logo />
      </div>
    </nav>
  );
};

export default Navigation;
