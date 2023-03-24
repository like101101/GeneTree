import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Card, ListGroup,Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { get_user_records, update_visibility } from "../../actions/userActions";

function PatientProfileScreen() {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const userRegister = useSelector((state) => state.userRegister);
  const { registerInfo } = userRegister;
  const userProfile = useSelector((state) => state.userProfile);
  const { profile } = userProfile;
  const userRecord = useSelector((state) => state.userRecord);
  const { records } = userRecord;


  console.log(registerInfo);

  useEffect(() => {
    if (!registerInfo || !profile || !records || !userInfo) {
      navigate("/login");
    }

  }, [navigate, registerInfo, profile, records, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    

    dispatch(
      update_visibility({
        records: records
      })
    );

  };

  return (
    <Container>
      <Form onSubmit={submitHandler}>
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
                <h2>{userInfo.name?userInfo.name : "xx"}</h2>
              </Card.Title>
              <Row className="mt-4">
                <Col md={2}></Col>
                <Col md={3}>Bday:</Col>
                <Col md={5}>{registerInfo.date_of_birth ? registerInfo.date_of_birth : "xxxx-xx-xx"}</Col>
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
              <div className="mt-2">
                <Button className="btn btn-primary mt-4" type="submit">
                  Save
                </Button>
              </div>
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
                
                {records.map((record, index) => (
                <ListGroup.Item className="mb-3">
                  <Form.Check 
                    type="switch"
                    id={index}
                    defaultChecked={record.show? true : false}
                    onChange={(e) => {
                      records[index].show = e.target.checked;
                      console.log(records);
                    }}
                  />
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
      </Form>
    </Container>
  );
}

export default PatientProfileScreen;
