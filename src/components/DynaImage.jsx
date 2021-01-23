import React from "react";

function DynaImage(props) {
  return (
    <div>
      <img
        style={{ width: "500px", height: "500px" }}
        src={props.photos}
        alt="randomPic"
      ></img>
    </div>
  );
}

export default DynaImage;
