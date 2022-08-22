import React from 'react'
import { Container ,Row, Col, Button} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import FormContainer from '../components/FormContainer'
function RegisterScreem() {
  return (
    <FormContainer>
        <Container className="card">
          <Container className="card-body" style={{ "textAlign": "center" }}>
          <h1
            className="mt-3"
            style={{ "fontSize": "60px", "fontFamily": "Poppins" , "color": "#2196f3"}}
          >
            I am a
          </h1>
          <Row>
            <Col>
              <LinkContainer to="/register/patient" className="card" style={{"alignItems":"center", "backgroundColor":"#EBF4FF", "margin":"10px"}}>
                <div>
                  <br></br>
                  <div style={{"marginBottom":"50px"}}></div>
                  <img
                  alt="" 
                  src="/patient_icon.png"
                  width="250"
                  height="250"
                  style={{"marginBottom":"40px"}}
                  >
                  </img>
                  <div className="card" style={{"marginBottom":"50px"}}>
                    <h5 style={{ "fontSize": "40px", "fontFamily": "Poppins" , "color": "#2196f3", "margin":"30px"}}>
                      Patient 
                    </h5>
                  </div>
                </div>
              </LinkContainer>
            </Col>
            <Col>
              <LinkContainer to="/register/physician" className="card"  style={{"alignItems":"center", "backgroundColor":"#EBF4FF", "margin":"10px"}}>
              <div>
              <br></br>
                  <div style={{"marginBottom":"40px"}}></div>
                  <img
                  alt="" 
                  src="/physician_icon.png"
                  width="250"
                  height="250"
                  style={{"marginBottom":"50px"}}>
                  </img>
                  <div className="card" style={{"marginBottom":"50px"}}>
                    <h5 style={{ "fontSize": "40px", "fontFamily": "Poppins" , "color": "#2196f3", "margin":"30px"}}>
                      Physician
                    </h5>
                  </div>
                </div>
              </LinkContainer>
            </Col>
          </Row>
          <hr style={{"border":"solid 1px"}}></hr>
          <div style={{"marginTop":"50px"}}></div>

          <LinkContainer to="/login">
            <Button>Login</Button>
          </LinkContainer>
          </Container>
        </Container>
    </FormContainer>
  )
}

export default RegisterScreem