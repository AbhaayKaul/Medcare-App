import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Message from '../components/Message'

function Signup() {
  const navigate = useNavigate()

  const [fName, setFName] = useState('')
  const [lName, setLName] = useState('')
  const [licNumber, setLicNumber] = useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [userType, setUserType] = React.useState('1')
  const [error, setError] = React.useState(false)
  const [isDoctor, setIsDoctor] = useState(false)

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const handleOnchange = (e) => {
    setUserType(e.target.value)
    if (e.target.value === '3') {
      setIsDoctor(true)
    } else {
      setIsDoctor(false)
    }
  }

  const registerUser = async () => {
    try {
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      }

      const name = fName + ' ' + lName

      await axios.post(
        '/api/users',
        { name, email, password, userType },
        config
      )

      // if (data.isDoctor === userType) {
      //   navigate('/')
      // } else {
      navigate('/patient')
      // }
    } catch (error) {
      console.log(error)
      setError(true)
      navigate('/signup')
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setError(true)
    } else {
      registerUser()
    }
  }

  return (
    <>
      <Form onSubmit={submitHandler}>
        <Row>
          <Col md="3"></Col>
          <Col md="6">
            <Form.Group className="mb-3">
              <Form.Label data-aos="fade-right">Sign Up As</Form.Label>
              <Form.Select
                data-aos="fade-left"
                className="rounded-pill"
                enabled
                value={userType}
                onChange={(e) => handleOnchange(e)}
              >
                <option value="1">Patient</option>
                <option value="2">Admin</option>
                <option value="3">Doctor</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md="3"></Col>
        </Row>

        {isDoctor && (
          <Row>
            <Col md="3"></Col>
            <Col md="6">
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label data-aos="flip-right">License Number</Form.Label>
                <Form.Control
                  data-aos="flip-left"
                  className="rounded-pill"
                  type="text"
                  placeholder="Enter License Number"
                  value={licNumber}
                  onChange={(e) => setLicNumber(e.target.value)}
                />
                <Form.Text className="text-visible"></Form.Text>
              </Form.Group>
            </Col>
            <Col md="3"></Col>
          </Row>
        )}
        <Row>
          <Col md="3"></Col>
          <Col md="6">
            <Form.Group className="mb-3">
              <Form.Label data-aos="fade-right">First Name</Form.Label>
              <Form.Control
                data-aos="fade-left"
                className="rounded-pill"
                type="text"
                placeholder="Enter First Name"
                value={fName}
                onChange={(e) => setFName(e.target.value)}
              />
              <Form.Text className="text-visible"></Form.Text>
            </Form.Group>
          </Col>
          <Col md="3"></Col>
        </Row>

        <Row>
          <Col md="3"></Col>
          <Col md="6">
            <Form.Group className="mb-3">
              <Form.Label data-aos="fade-right">Last Name</Form.Label>
              <Form.Control
                data-aos="fade-left"
                className="rounded-pill"
                type="text"
                placeholder="Enter Last Name"
                value={lName}
                onChange={(e) => setLName(e.target.value)}
              />
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
              <Form.Control
                data-aos="fade-left"
                className="rounded-pill"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
          </Col>
          <Col md="3"></Col>
        </Row>

        <Row>
          <Col md="3"></Col>
          <Col md="6">
            <Form.Group className="mb-3">
              <Form.Label data-aos="fade-right">Password</Form.Label>
              <Form.Control
                data-aos="fade-left"
                className="rounded-pill"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md="3"></Col>
        </Row>

        <Row>
          <Col md="3"></Col>
          <Col md="6">
            <Form.Group className="mb-3">
              <Form.Label data-aos="fade-right">Password</Form.Label>
              <Form.Control
                data-aos="fade-left"
                className="rounded-pill"
                type="password"
                placeholder="Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>
            {error && (
              <Message variant="warning" children="Invalid Credentials!" />
            )}
          </Col>
          <Col md="3"></Col>
        </Row>
        <Row>
          <Col md="3"></Col>
          <Col md="6" className="text-center">
            <Button
              data-aos="slide"
              className="rounded-pill"
              variant="primary"
              type="submit"
            >
              submit
            </Button>
          </Col>
          <Col md="3"></Col>
        </Row>
      </Form>
    </>
  )
}

export default Signup
