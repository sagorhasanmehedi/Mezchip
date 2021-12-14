import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar className="mt-3 " expand="lg">
        <Container className="navbarContainer pb-3">
          <Nav.Link className="mb-0 text-dark me-2 navHighLight" href="#">
            guarented
          </Nav.Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="mx-2 text-dark navRout mb-0" href="#action1">
                Furniture
              </Nav.Link>
              <Nav.Link className="mx-2 text-dark navRout mb-0" href="#action2">
                Appliance
              </Nav.Link>
              <Nav.Link className="mx-2 text-dark navRout mb-0" href="#action2">
                Package
              </Nav.Link>
              <Nav.Link className="mx-2 text-dark navRout mb-0" href="#action2">
                FAQ
              </Nav.Link>
            </Nav>
            <Nav className="d-flex align-items-center">
              <form className="headerForm">
                <input
                  className="headerInput"
                  placeholder="Searce the website"
                />
                <button className="headerButton">
                  <i class="fas fa-search"></i>
                </button>
              </form>

              <Nav.Link
                className="text-dark me-2 ms-5 navRout mb-0"
                href="#link"
              >
                Login
              </Nav.Link>
              <Nav.Link className="navRout cartRoute mb-0" href="#link">
                Cart
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
