import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Navigate(props) {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg">
        <Link to="/" className="navbar-link" variant="dark">
          Motivate!
        </Link>

        <Navbar.Toggle
          style={{ backgroundColor: "#fdfbf3" }}
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              style={{
                margin: "1px",
                borderRadius: "5px ",
                backgroundColor: "#FEFDFB",
                color: "#BBDB49",
              }}
              href="#slideContainer"
            >
              Get Random Quotes!
            </Nav.Link>
            {/* <NavDropdown
              style={{
                margin: "1px",
                borderRadius: "5px ",
                backgroundColor: "#FEFDFB",
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
            <Link to="/about">
              <Button
                className="dropdownButton"
                style={{
                  color: "#BBDB49",
                  margin: "1px",
                  backgroundColor: "#2e380a",
                }}
                variant="dark"
              >
                About
              </Button>{" "}
            </Link>

            <Link to="/quotesearch">
              <Button
                className="dropdownButton"
                style={{
                  color: "#BBDB49",
                  margin: "1px",
                  backgroundColor: "#2e380a",
                }}
                variant="dark"
              >
                Search for a Quote... <Search />
              </Button>{" "}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigate;
