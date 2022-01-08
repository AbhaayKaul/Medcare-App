import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Signin() {
  const navigate = useNavigate()

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [userType, setUserType] = React.useState('1')

  const getData = async () => {
    try {
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      }

      const { data } = await axios.post(
        '/api/users/login',
        { email, password },
        config
      )

      console.log(data)
    } catch (error) {
      console.log(error)
      navigate('/login')
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    getData()
  }

  return (
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3">
        <Form.Label>Sign In As</Form.Label>
        <Form.Select enabled onChange={(e) => setUserType(e.target.value)}>
          <option value="1">Patient</option>
          <option value="2">Doctor</option>
          <option value="3">Admin</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default Signin
