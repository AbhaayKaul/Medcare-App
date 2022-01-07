import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function Signup() {
  const [isDoctor, setIsDoctor] = useState(false);
  const handleOnchange = (e) => {
    if(e.target.value === "3"){
      setIsDoctor(true)
    }else{
      setIsDoctor(false)
    }
  }

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Sign Up As</Form.Label>
        <Form.Select enabled onChange={e => handleOnchange(e)} >
          <option value = "1">Patient</option>
          <option value = "2">Admin</option>
          <option value = "3">Doctor</option>
        </Form.Select>
      </Form.Group>

      {isDoctor &&
      (
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>License Number</Form.Label>
          <Form.Control type="text" placeholder="Enter License Number" />
          <Form.Text className="text-visible"></Form.Text>
        </Form.Group>
      )}
      
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter First Name" />
        <Form.Text className="text-visible"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Last Name" />
        <Form.Text className="text-visible"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Re-Enter Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Signup;
