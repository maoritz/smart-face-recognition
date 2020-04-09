import React from "react";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div className="mt6 ml6 mb4 w-50 f1">
      <p
        style={{
          display: "flex",
          alignItems: "flex-start",
          fontSize: "40px",
          color: "#413fa0",
          fontWeight: "bold",
        }}
      >
        Magic Brain detects faces in pictures,
        <br />
        Just pick an image and let the magic happen.
      </p>
      <div className="w-80">
        <div className="center">
          <input
            style={{ marginLeft: "0" }}
            className="f4 mt5 w-60 center inputDetect"
            type="tex"
            onChange={onInputChange}
            placeholder="Image url"
          />
          <button
            className="w-33 mt5 grow f4 link white curveBorder30 b"
            style={{ backgroundColor: "#413fa0", border: "none" }}
            onClick={onButtonSubmit}
          >
            LOAD IMAGE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
