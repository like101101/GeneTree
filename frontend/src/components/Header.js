import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Header() {


  return (
    <Navbar bg="bg-light" className="navbar-light">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img
              alt=""
              src="/favicon.ico"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            GeneTree
          </Navbar.Brand>
        </LinkContainer>
        <Nav className="me-auto">
          <LinkContainer to="/services" >
            <Nav.Link>
                | Services
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/aboutus" >
            <Nav.Link>
                | About Us
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/faqs" >
            <Nav.Link>
                | FAQs
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
