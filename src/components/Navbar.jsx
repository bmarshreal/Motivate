import { Nav } from "react-bootstrap";

function Navbar(params) {
  return (
    <div>
      <Nav
        className="navbar"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Navbar;

// {
//   /* <style>
//         .navbar {
//             position: relative;
//             display: -ms-flexbox;
//             display: flex;
//             -ms-flex-wrap: wrap;
//             flex-wrap: wrap;
//             -ms-flex-align: center;
//             align-items: center;
//             -ms-flex-pack: justify;
//             justify-content: space-between;
//             padding: .5rem 1rem;
//             opacity: 0.5;
//         }
//     </style> */
// }
