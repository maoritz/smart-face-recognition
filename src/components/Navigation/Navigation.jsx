import React from "react";

const Navigation = ({ isSignedIn, onRouteChange }) => {
  if (isSignedIn) {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-start" }}>
        <div style={{ position: "flex" }}></div>
        <p
          onClick={() => onRouteChange("signout")}
          className="f3 link dim white underline pa3 pointer"
        >
          Sign Out
        </p>
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
