/* eslint-disable no-eval */
import React, { Suspense, lazy } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Spinner from "react-bootstrap/Spinner";
import About from "./components/About";
import Home from "./components/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const QuoteSearch = lazy(() => import("./components/QuoteSearch"));

function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        }
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />

          <Route exact path="/quotesearch" component={QuoteSearch} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
