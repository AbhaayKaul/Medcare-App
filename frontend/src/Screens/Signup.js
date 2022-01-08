import React, { useState } from "react";
import { useEffect } from "react";
import { Form, Button,Row,Col} from "react-bootstrap";
import Aos from 'aos'
import 'aos/dist/aos.css'


function Signup() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  const [isDoctor, setIsDoctor] = useState(false);
  const handleOnchange = (e) => {
    if(e.target.value === "3"){
      setIsDoctor(true)
    }else{
      setIsDoctor(false)
    }
  }


  return (
<>
    <Form>
    <Row>
          <Col md="3"></Col>
          <Col md="6">
      <Form.Group className="mb-3">
        <Form.Label data-aos="fade-right">Sign Up As</Form.Label>
        <Form.Select data-aos="fade-left" className="rounded-pill" enabled onChange={e => handleOnchange(e)} >
          <option value = "1">Patient</option>
          <option value = "2">Admin</option>
          <option value = "3">Doctor</option>
        </Form.Select>
      </Form.Group>
      </Col>
          <Col md="3"></Col>
        </Row>


      {isDoctor &&
      (
        <Row>
          <Col md="3"></Col>
          <Col md="6">
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label data-aos="flip-right">License Number</Form.Label>
          <Form.Control data-aos="flip-left" className="rounded-pill" type="text" placeholder="Enter License Number" />
          <Form.Text className="text-visible"></Form.Text>
        </Form.Group>
        </Col>
          <Col md="3"></Col>
        </Row>
      )}
      <Row>
          <Col md="3"></Col>
          <Col md="6">
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label data-aos="fade-right">First Name</Form.Label>
        <Form.Control data-aos="fade-left" className="rounded-pill" type="text" placeholder="Enter First Name" />
        <Form.Text className="text-visible"></Form.Text>
      </Form.Group>
      </Col>
          <Col md="3"></Col>
        </Row>

        <Row>
          <Col md="3"></Col>
          <Col md="6">
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label data-aos="fade-right">Last Name</Form.Label>
        <Form.Control data-aos="fade-left" className="rounded-pill" type="text" placeholder="Enter Last Name" />
        <Form.Text className="text-visible"></Form.Text>
      </Form.Group>
      </Col>
          <Col md="3"></Col>
        </Row>

        <Row>
          <Col md="3"></Col>
          <Col md="6">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label data-aos="fade-right">Email address</Form.Label>
        <Form.Control data-aos="fade-left" className="rounded-pill" type="email" placeholder="Enter email" />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      </Col>
          <Col md="3"></Col>
        </Row>

        <Row>
          <Col md="3"></Col>
          <Col md="6">
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label data-aos="fade-right">Password</Form.Label>
        <Form.Control data-aos="fade-left" className="rounded-pill" type="password" placeholder="Password" />
      </Form.Group>
      </Col>
          <Col md="3"></Col>
        </Row>

        <Row>
          <Col md="3"></Col>
          <Col md="6">
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label data-aos="fade-right">Password</Form.Label>
        <Form.Control data-aos="fade-left" className="rounded-pill" type="password" placeholder="Re-Enter Password" />
      </Form.Group>
      </Col>
          <Col md="3"></Col>
        </Row>
      <Row>
          <Col md="3"></Col>
          <Col md="6" className="text-center">
      <Button data-aos="slide" className="rounded-pill" variant="primary" type="submit">
        submit
      </Button>
      </Col>
          <Col md="3"></Col>
        </Row>
    </Form>
    </>
  );
}

export default Signup;
