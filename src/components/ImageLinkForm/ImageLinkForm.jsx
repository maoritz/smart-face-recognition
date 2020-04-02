import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div className="bg-white fontSigali pl4">
      <p className="f3 br-3">
        {
          "This Magic Button will detect faces in your pictures.\
          Give it a try"
        }
      </p>
      <div className="center">
        <div className="form center ">
          <input
            type="text"
            className="f4 pa2 w-70 center"
            onChange={onInputChange}
          />
          <button
            className="linearGradient w-30 ba b--gray dib white pointer prb"
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
