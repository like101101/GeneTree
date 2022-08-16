import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import FormContainer from "../../components/FormContainer";

function PatientRegisterScreen() {
  return (
    <FormContainer>
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
          <Form>
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
                    <Form.Control type="name"></Form.Control>
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
                    <Form.Control type="name"></Form.Control>
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
                    <Form.Control type="name"></Form.Control>
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
                    <Form.Control type="email"></Form.Control>
                  </Container>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  controlId="verify-email"
                  className="row mt-5"
                  style={{ margin: "8px" }}
                >
                  <Form.Label
                    className="form-label"
                    style={{ "textAlign": "left" }}
                  >
                    Verify Email
                  </Form.Label>
                  <Container className="card">
                    <Form.Control type="email"></Form.Control>
                  </Container>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  controlId="phone-number"
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
                    <Form.Control type="tel"></Form.Control>
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
                    <Form.Control type="date"></Form.Control>
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
                    <Form.Control type="code"></Form.Control>
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
                    <Form.Control type="code"></Form.Control>
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
                    <Form.Control type="code"></Form.Control>
                  </Container>
                </Form.Group>
              </Col>
              <Col></Col>
              <Col>
                <Container className="mt-5"></Container>
                <Button className="btn btn-primary mt-4">
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
