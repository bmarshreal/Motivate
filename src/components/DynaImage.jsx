import React from "react";
import { Image } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import DataFetching from "./DataFetching";

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
