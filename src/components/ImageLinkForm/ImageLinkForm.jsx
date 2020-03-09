import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = props => {
  return (
    <div>
      <p className="f3">
        {" This Magic Button will detect faces in your pictures. Git it a try"}
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input
            type="text"
            className="f4 pa2 w-70 center"
            onChange={props.onInputChange}
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-gray"
            onClick={props.onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
