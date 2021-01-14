import DataFetching from "./components/DataFetching";
import Nav from "./components/Navbar";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div class="heroImage">
        <Nav />
      </div>
      <DataFetching />
    </div>
  );
}

export default App;
