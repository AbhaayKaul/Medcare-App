import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

const PatientScreen = () => {
  return (
    <Container className="text-center my-4">
      <Row className="text-center">
        <Col md="4">
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1585435557343-3b092031a831?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
            <Card.Body>
              <Card.Title>Medicines</Card.Title>
              <Card.Text>
                Order Online Medicines
              </Card.Text>
              <Button className='patient-card' variant="primary">Order Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md="4">
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
            <Card.Body>
              <Card.Title>Book an Appointment</Card.Title>
              <Card.Text>
              Consult a doctor, right from the comfort of your home.
              </Card.Text>
              <Button className='patient-card' variant="primary">Book now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md="4">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="/images/medical-report.jpg" />
            <Card.Body>
              <Card.Title>Medical Records</Card.Title>
              <Card.Text>
                Access your previous Reports.
              </Card.Text>
              <Button className='patient-card' variant="primary">Click Here</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default PatientScreen
