import React, { useState, useEffect } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import FormContainer from "../../components/FormContainer";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../actions/userActions";
import Loader from "../../components/Loader";
import Message from "../../components/Message";

function PatientRegisterScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [birthday, setBirthday] = useState("");
  const [familyCode, setFamilyCode] = useState("");
  const [physicianCode, setPhysicianCode] = useState("");
  const [ssn, setSsn] = useState("");
  const type = "patient";

  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [message, setMessage] = useState("")


  const redirect = location.search ? location.search.split('=')[1] : '/'

  const userRegister = useSelector(state => state.userRegister)
  const {error, loading, registerInfo} = userRegister


  useEffect(() => {
    if (registerInfo) {
      if(registerInfo.type === "patient"){
          navigate('/patient/')
      }else if(registerInfo.type === "physician"){
          navigate('/physician/')
      }
    }
  }, [navigate, registerInfo, redirect])
  
  const submitHandler = (e) => {
    e.preventDefault();

    if(password !== confirmPassword){
      setMessage('Passwords do not match')
    }else{
      const registerInfo = {
        type: type,
        birthday: birthday,
        familyCode: familyCode,
        physicianCode: physicianCode,
        ssn: ssn,
        phone: phone,
      };
      dispatch(register(firstName+" "+lastName, email, password, registerInfo));
    }
  };

  return (
    <FormContainer>
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}      
      <Container className="card">
        <Container className="card-body" style={{ "textAlign": "center" }}>
          <h1
            className="card-title mt-3"
            style={{ "fontSize": "60px", "fontFamily": "Poppins" }}
          >
            Create Account
          </h1>
          <h6 className="card-subtitle text-muted  mt-3">
            Welcome to GeneTree! Please enter your information below to create
            an account.
          </h6>
          <Form onSubmit={submitHandler}>
            <Row>
              <Col>
                <Form.Group
                  controlId="firstname"
                  className="row mt-5"
                  style={{ margin: "8px" }}
                >
                  <Form.Label
                    className="form-label"
                    style={{ "textAlign": "left" }}
                  >
                    First Name
                  </Form.Label>
                  <Container className="card">
                    <Form.Control 
                    type="name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    ></Form.Control>
                  </Container>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  controlId="middlename"
                  className="row mt-5"
                  style={{ margin: "8px" }}
                >
                  <Form.Label
                    className="form-label"
                    style={{ "textAlign": "left" }}
                  >
                    Middle Name
                  </Form.Label>
                  <Container className="card">
                    <Form.Control type="name"
                    value={middlename}
                    onChange={(e) => setMiddlename(e.target.value)}
                    ></Form.Control>
                  </Container>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  controlId="lastname"
                  className="row mt-5"
                  style={{ margin: "8px" }}
                >
                  <Form.Label
                    className="form-label"
                    style={{ "textAlign": "left" }}
                  >
                    Last Name
                  </Form.Label>
                  <Container className="card">
                    <Form.Control 
                    type="name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    ></Form.Control>
                  </Container>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group
                  controlId="email"
                  className="row mt-5"
                  style={{ margin: "8px" }}
                >
                  <Form.Label
                    className="form-label"
                    style={{ "textAlign": "left" }}
                  >
                    Email
                  </Form.Label>
                  <Container className="card">
                    <Form.Control 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                  </Container>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  controlId="password"
                  className="row mt-5"
                  style={{ margin: "8px" }}
                >
                  <Form.Label
                    className="form-label"
                    style={{ "textAlign": "left" }}
                  >
                    Password
                  </Form.Label>
                  <Container className="card">
                    <Form.Control 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    ></Form.Control>
                  </Container>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  controlId="verifyPassword"
                  className="row mt-5"
                  style={{ margin: "8px" }}
                >
                  <Form.Label
                    className="form-label"
                    style={{ "textAlign": "left" }}
                  >
                    Verify Password
                  </Form.Label>
                  <Container className="card">
                    <Form.Control 
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    ></Form.Control>
                  </Container>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group
                  controlId="bday"
                  className="row mt-5"
                  style={{ margin: "8px" }}
                >
                  <Form.Label
                    className="form-label"
                    style={{ "textAlign": "left" }}
                  >
                    Date of Birth
                  </Form.Label>
                  <Container className="card">
                    <Form.Control 
                    type="date"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                    ></Form.Control>
                  </Container>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  controlId="family-code"
                  className="row mt-5"
                  style={{ margin: "8px" }}
                >
                  <Form.Label
                    className="form-label"
                    style={{ "textAlign": "left" }}
                  >
                    Family Code
                  </Form.Label>
                  <Container className="card">
                    <Form.Control 
                    type="code"
                    value={familyCode}
                    onChange={(e) => setFamilyCode(e.target.value)}
                    ></Form.Control>
                  </Container>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  controlId="physician-code"
                  className="row mt-5"
                  style={{ margin: "8px" }}
                >
                  <Form.Label
                    className="form-label"
                    style={{ "textAlign": "left" }}
                  >
                    Physician Code
                  </Form.Label>
                  <Container className="card">
                    <Form.Control 
                    type="code"
                    value={physicianCode}
                    onChange={(e) => setPhysicianCode(e.target.value)}
                    ></Form.Control>
                  </Container>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group
                  controlId="ssn"
                  className="row mt-5"
                  style={{ margin: "8px" }}
                >
                  <Form.Label
                    className="form-label"
                    style={{ "textAlign": "left" }}
                  >
                    Last 4 Digits of SSN
                  </Form.Label>
                  <Container className="card">
                    <Form.Control 
                    type="code"
                    value={ssn}
                    onChange={(e) => setSsn(e.target.value)}
                    ></Form.Control>
                  </Container>
                </Form.Group>
              </Col>
              <Col>
              <Form.Group
                  controlId="phone"
                  className="row mt-5"
                  style={{ margin: "8px" }}
                >
                  <Form.Label
                    className="form-label"
                    style={{ "textAlign": "left" }}
                  >
                    Phone Number
                  </Form.Label>
                  <Container className="card">
                    <Form.Control 
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    ></Form.Control>
                  </Container>
                </Form.Group>
              </Col>
              <Col>
                <Container className="mt-5"></Container>
                <Button className="btn btn-primary mt-4" type="submit">
                  Create my Accout
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </Container>
    </FormContainer>
  );
}

export default PatientRegisterScreen;
