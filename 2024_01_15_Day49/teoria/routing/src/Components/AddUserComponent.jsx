import axios from "axios";
import React, { useState } from "react";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";

export default function AddUserComponent() {
  const [newUser, setNewUser] = useState({});
  const [error, setError] = useState();

  const handleSubmit = (e) => {
e.preventDefault()
    axios
      .post("https://localhost:3000/users/",  {newUser} )
      .catch(err => {
        setError(err.response.data)
      });
  };

  return (
    <Form>
      <Row>
        <Col>
          <Form.Control
            type="text"
            name="fullname"
            placeholder="Fullname..."
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          />
        </Col>
        <Col>
          <Form.Control
            type="text"
            name="username"
            placeholder="Username..."
            onChange={(e) =>
              setNewUser({ ...newUser, username: e.target.value })
            }
          />
        </Col>
        <Col>
          <Form.Control
            type="email"
            name="email"
            placeholder="Email..."
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
        </Col>
        <Col>
          <Form.Control
            type="number"
            name="phone"
            placeholder="Phone..."
            onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
          />
        </Col>
        <Col>
          <Form.Control
            type="number"
            name="password"
            placeholder="password..."
            onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
          />
        </Col>
        <Col>
          <Form.Control
            name="website"
            placeholder="Website..."
            onChange={(e) =>
              setNewUser({ ...newUser, website: e.target.value })
            }
          />
        </Col>
      </Row>
      <Button variant="secondary" onClick={(e) => handleSubmit(e)}>
        ADD USER
      </Button>
      {error && <Alert variant="danger">{error}</Alert>}
    </Form>
  );
}
