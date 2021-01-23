import React from "react";
import DataFetching from "./DataFetching";
import Cards from "./Cards";
import Navigate from "./Navigate";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";

function Home(props) {
  return (
    <div>
      <div className="home">
        <div className="heroImage">
          <Navigate />
          <h1 className="heroHeader">A Place for Inspiration</h1>
        </div>
        <Cards />
        <div className="slideInSection">
          <DataFetching />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
