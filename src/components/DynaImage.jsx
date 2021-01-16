import React from "react";
import { Image } from "react-bootstrap";
import DataFetching from "./DataFetching";

function DynaImage(params) {
  return (
    <div>
      <div>
        <Image
          src="https://www.success.com/wp-content/uploads/legacy/sites/default/files/main/articles/inspiringquotesaboutbeingadreamer.jpg"
          fluid
          style={{ float: "auto", margin: "auto" }}
        />
      </div>
    </div>
  );
}

export default DynaImage;
