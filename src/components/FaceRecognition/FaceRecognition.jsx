import React from "react";

const FaceRecognition = props => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img alt="image" src={props.imageUrl} width="500px" heigh="auto" />
      </div>
    </div>
  );
};

export default FaceRecognition;
