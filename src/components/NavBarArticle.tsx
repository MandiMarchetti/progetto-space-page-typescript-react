import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link, useLocation } from "react-router-dom";

const NavBarArticle = function () {
  const location = useLocation();

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home">SPACE TODAY</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
              Home
            </Link>

            <Link to="/articles" className={location.pathname === "/articles" ? "nav-link active" : "nav-link"}>
              Articles
            </Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#memes">
              Personal Profile
              <img src="" alt="" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarArticle;
