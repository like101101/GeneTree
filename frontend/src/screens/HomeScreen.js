import React from 'react'
import { Container ,Row, Col} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
function HomeScreen() {
  return (
    <Container>
        <Container className="card">
          <Container className="card-body" style={{ "textAlign": "center" }}>
          <h1
            className="mt-3"
            style={{ "fontSize": "60px", "fontFamily": "Poppins" , "color": "#2196f3"}}
          >
            I am a
          </h1>
          <Row className='mt-5'>
            <Col>
              <LinkContainer to="/patient/login" className="card" style={{"marginLeft":"60px", "backgroundColor":"#EBF4FF"}}>
                <div>
                  <img
                  alt="" 
                  src="/patient_icon.png"
                  width="500"
                  height="500">
                    
                  </img>
                  <h4 style={{ "fontSize": "50px", "fontFamily": "Poppins" , "color": "#2196f3"}}>
                    Patient
                  </h4>
                </div>
              </LinkContainer>
            </Col>
            <Col>
              <LinkContainer to="/physician/login" className="card" style={{"marginRight":"40px" , "backgroundColor":"#EBF4FF"}}>
              <div>
                  <img
                  alt="" 
                  src="/physician_icon.png"
                  width="500"
                  height="500">
                  </img>
                  <h4 style={{ "fontSize": "50px", "fontFamily": "Poppins" , "color": "#2196f3"}}>
                    Physician
                  </h4>
                </div>
              </LinkContainer>
            </Col>
          </Row>
          </Container>

        </Container>
    </Container>
  )
}

export default HomeScreen