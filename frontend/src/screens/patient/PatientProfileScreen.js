import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { get_user_profile } from "../../actions/userActions";

function PatientProfileScreen() {
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const userRegister = useSelector((state) => state.userRegister);
  const { registerInfo } = userRegister;
  const userProfile = useSelector((state) => state.userProfile);
  const { profile } = userProfile;
  const userRecord = useSelector((state) => state.userRecord);
  const { records } = userRecord;

  useEffect(() => {
    if (!registerInfo) {
      navigate("/login");
    }
  }, [navigate, registerInfo]);


  return (
    <Container>
      <Row>
        <Col md={4}>
          <Card>
            <br></br>
            <Card.Img
              src={profile.profile_pic? profile.profile_pic : "/patient_icon.png"}
              style={{ width: "250px", height: "250px", margin: "auto" }}
            ></Card.Img>
            <br></br>
            <Card.Body style={{ textAlign: "center" }}>
              <Card.Title style={{ color: "#9CCEFD" }}>
                <h2>{userInfo.name ? userInfo.name : "xx"}</h2>
              </Card.Title>
              <Row className="mt-4">
                <Col md={2}></Col>
                <Col md={3}>Bday:</Col>
                <Col md={5}>{registerInfo.date_of_birth}</Col>
                <Col md={2}></Col>
              </Row>
              <Row className="mt-2">
                <Col md={2}></Col>
                <Col md={3}>Race:</Col>
                <Col md={5}>{profile.race ? profile.race : "xx"}</Col>
                <Col md={2}></Col>
              </Row>
              <Row className="mt-2">
                <Col md={2}></Col>
                <Col md={3}>Sex:</Col>
                <Col md={5}>{profile.sex ? profile.sex : "xx"}</Col>
                <Col md={2}></Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <div className="card">
            <br></br>
            <h1 style={{ margin: "auto", color: "#4caf50" }}>
              {" "}
              Diseases & Conditions{" "}
            </h1>
            <br></br>
            <div style={{ width: "90%", margin: "auto" }}>
              <ListGroup variant="flush">
                {records.map((record) => (
                <ListGroup.Item className="mb-3">
                  <h3>{record.disorder}, since {record.date}</h3>
                  <Row className="mt-1">
                    <Col md={2}></Col>
                    <Col md={3}>
                      <h4 style={{ color: "#9CCEFD" }}>Symptom</h4>
                    </Col>
                    <Col md={7}>{record.symptoms}</Col>
                  </Row>
                  <Row className="mt-1">
                    <Col md={2}></Col>
                    <Col md={3}>
                      <h4 style={{ color: "#9CCEFD" }}>Medication</h4>
                    </Col>
                    <Col md={7}>{record.medications}</Col>
                  </Row>
                </ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default PatientProfileScreen;
