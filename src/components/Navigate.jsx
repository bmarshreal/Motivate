import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import MediaQuery from "react-responsive";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Navigate(props) {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Link to="/" className="navbar-link" variant="dark">
          Motivate!
          <MediaQuery query="(max-device-width: 500px)">
            <p
              style={{
                fontFamily: "sans-serif",
                fontSize: "1rem",
                position: "absolute",
                left: "5rem",
                color: "#FCB220",
              }}
            >
              Inspirational Quotes
            </p>
          </MediaQuery>
        </Link>

        <Navbar.Toggle
          style={{
            borderColor: "#FCB220",
          }}
          variant="dark"
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              style={{
                margin: "1px",
                borderRadius: "5px ",
                backgroundColor: "#E7F24A",
                color: "#392F0A",
              }}
              href="#slideContainer"
            >
              Get Random Quotes!
            </Nav.Link>
            {/* <NavDropdown
              style={{
                margin: "1px",
                borderRadius: "5px ",
                backgroundColor: "#F8EFD8",
                color: "#BBDB49",
              }}
              title="Dropdown"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Link style={{ margin: "1%" }} to="/about">
              <Button variant="dark">About</Button>{" "}
            </Link>

            <Link style={{ margin: "1%" }} to="/quotesearch">
              <Button variant="dark">
                Search... <Search />
              </Button>{" "}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigate;
