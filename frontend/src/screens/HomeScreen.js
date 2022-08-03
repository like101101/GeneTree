import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
function HomeScreen() {
  return (
    <Container>
        <h3>HomeScreen</h3>
        <LinkContainer to="/login">
            <Button className="btn btn-outline-primary bg-secondary">login</Button>
        </LinkContainer>
    </Container>
  )
}

export default HomeScreen