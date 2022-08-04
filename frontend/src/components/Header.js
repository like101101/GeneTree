import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="bg-light" className="navbar-light">
      <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/favicon.ico"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            GeneTree
          </Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">| About Us</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
