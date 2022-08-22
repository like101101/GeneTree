import { Link } from "react-router-dom";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { login } from "../actions/userActions";
import { useLocation, useNavigate } from "react-router-dom";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation()
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const redirect = location.search ? location.search.split('=')[1] : '/'

  const userLogin = useSelector(state => state.userLogin)
  const {error, loading, userInfo} = userLogin
  
  useEffect(() => {
    if(userInfo){
        navigate(redirect)
    }
  }, [navigate, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password))
  };

  return (
    <FormContainer>
      <hr style={{ border: "2px solid" }}></hr>
      <Row>
        <Col>
          <Container style={{ display: "flex", alignItems: "center" }}>
            <img
              alt=""
              src="/calendar_icon.png"
              width="150"
              height="150"
              style={{ marginRight: "30px" }}
            ></img>
            <h5>Schedule screenings and tests sooner</h5>
          </Container>
        </Col>
        <Col>
          <Container style={{ display: "flex", alignItems: "center" }}>
            <img
              alt=""
              src="/testtube_icon.png"
              width="150"
              height="150"
              style={{ marginRight: "30px" }}
            ></img>
            <h5>Access test results sooner</h5>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col>
          <Container
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "30px",
            }}
          >
            <img
              alt=""
              src="/pills_icon.png"
              width="150"
              height="150"
              style={{ marginRight: "30px" }}
            ></img>
            <h5>Improve accuracy of prescription order writing</h5>
          </Container>
        </Col>
        <Col>
          <Container
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "30px",
            }}
          >
            <img
              alt=""
              src="/clipboard_icon.png"
              width="150"
              height="150"
              style={{ marginRight: "30px" }}
            ></img>
            <h5>Gain complete picture of your family genetic history</h5>
          </Container>
        </Col>
      </Row>
      <hr style={{ border: "2px solid" }}></hr>
      <h5 style={{ margin: "20px", color: "#716565", textShadow: "1px 1px" }}>
        Enter your login ID and password down below
      </h5>
      <Form
        onSubmit={submitHandler}
        style={{ marginLeft: "20px", marginRight: "50px" }}
      >
        <Form.Group controlId="email">
          <Form.Label
            className="mt-3"
            style={{ fontSize: "20px", marginLeft: "10px" }}
          >
            Email
          </Form.Label>
          <Row
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Col sm={8}>
              <Container
                style={{
                  backgroundColor: "white",
                  borderRadius: "15px",
                  marginRight: "30px",
                }}
              >
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ marginRight: "30px" }}
                ></Form.Control>
              </Container>
            </Col>
            <Col>
              <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>
                New User?
              </Link>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label
            className="mt-3"
            style={{ fontSize: "20px", marginLeft: "10px" }}
          >
            Password
          </Form.Label>
          <Row
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Col sm={8}>
              <Container
                style={{
                  backgroundColor: "white",
                  borderRadius: "15px",
                  marginRight: "30px",
                }}
              >
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ marginRight: "30px" }}
                ></Form.Control>
              </Container>
            </Col>
            <Col>
              <Link to={redirect ? `/?redirect=${redirect}` : "/"}>
                Forget Password?
              </Link>
            </Col>
          </Row>
        </Form.Group>
        <Button type="submit" style={{ marginLeft: "10px", marginTop: "30px" }}>
          LOG IN
        </Button>
      </Form>
    </FormContainer>
  );
}

export default LoginScreen;
