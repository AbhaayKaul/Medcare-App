import React from "react";
import { useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";

function Signin() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const navigate = useNavigate();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [userType, setUserType] = React.useState("1");

  const getData = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/users/login",
        { email, password },
        config
      );

      console.log(data);
    } catch (error) {
      console.log(error);
      navigate("/login");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <>
      <Form onSubmit={submitHandler}>
        <Row>
          <Col md="3"></Col>
          <Col md="6">
            <Form.Group className="mb-3">
              <Form.Label data-aos="fade-left">Sign In As</Form.Label>
              <Form.Select
                data-aos="fade-right"
                enabled
                onChange={(e) => setUserType(e.target.value)}
                className="rounded-pill"
              >
                <option value="1">Patient</option>
                <option value="2">Doctor</option>
                <option value="3">Admin</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md="3"></Col>
        </Row>
        <Row>
          <Col md="3"></Col>
          <Col md="6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label data-aos="fade-left">Email address</Form.Label>
              <Form.Control
                data-aos="fade-right"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-pill"
              />
              <Form.Text data-aos="fade-left" className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          </Col>
          <Col md="3"></Col>
        </Row>
        <Row>
          <Col md="3"></Col>
          <Col md="6">
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label data-aos="fade-left">Password</Form.Label>
              <Form.Control
                data-aos="fade-right"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="rounded-pill"
              />
            </Form.Group>
          </Col>
          <Col md="3"></Col>
        </Row>
        <Row>
          <Col md="3"></Col>
          <Col md="6" className="text-center">
            <Button
              data-aos="fade-down"
              variant="primary"
              type="submit"
              className="rounded-pill"
            >
              Login
            </Button>
          </Col>
          <Col md="3"></Col>
        </Row>
      </Form>
    </>
  );
}

export default Signin;
