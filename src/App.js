/* eslint-disable no-eval */
import DataFetching from "./components/DataFetching";

import Navigate from "./components/Navigate";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="heroImage">
        <Navigate />
        <h1 className="heroHeader">A Place for Inspiration</h1>
      </div>
      <div className="slideInSection">
        <DataFetching />
      </div>
    </div>
  );
}

export default App;
