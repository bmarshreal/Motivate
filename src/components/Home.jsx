import React from "react";
import DataFetching from "./DataFetching";
import Cards from "./Cards";
import Navigate from "./Navigate";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import Floater from "./Floater";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <div className="home">
        <Floater />
        <div className="heroImage">
          <Navigate />
          <h1 className="heroHeader">A Place for Inspiration</h1>
          <Link to="/quotesearch">
            <button className="heroBtn">Find a Quotes Now</button>
          </Link>
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
