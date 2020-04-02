import React from "react";
import Logo from "../Logo/Logo";

const Navigation = ({ isSignedIn, onRouteChange }) => {
  if (isSignedIn) {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <div style={{ position: "relative", right: "1583px" }}>
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
    <nav style={{ display: "flex", justifyContent: "flex-end" }}>
      <div style={{ position: "relative", right: "1730px" }}>
        <Logo />
      </div>
    </nav>
  );
};

export default Navigation;
