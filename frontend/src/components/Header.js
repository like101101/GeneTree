import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, Container, Row, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../actions/userActions'

function Header() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const userRegister = useSelector((state) => state.userRegister);
  const { registerInfo } = userRegister;

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  const hi = userInfo ? "Hi, " + userInfo.name : 'Guest';
  const profileURL = registerInfo ? "/" + registerInfo.type + "/profile/" : "/login";

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
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {userInfo ? (
            <NavDropdown title={hi} id="username">
              <LinkContainer to={profileURL}>
                <NavDropdown.Item>Profile</NavDropdown.Item>
              </LinkContainer>

              <NavDropdown.Item onClick={logoutHandler}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <LinkContainer to="/login">
              <Nav.Link>
                <i className="fas fa-user">login</i> 
              </Nav.Link>
            </LinkContainer>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
