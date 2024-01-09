import React, { Component } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";

export default class FormComponent extends Component {
  state = {
    user: {
      name: "",
      lastName: "Bubu",
    },
  };

  handleSubmit(e) {
    e.preventDefault();
    console.log("test btn Submit" + e.target);
  }

  handleChange(event) {
    this.setState({
      user: {
        ...this.state.user,
        name: event.target.value,
      },
    });
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={this.state.user.name}
              onChange={(event) => this.handleChange(event)}
            />
            
          </Form.Group>
          <Button
            onClick={(event) => this.handleSubmit(event)}
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </Form>
        {this.state.user.name && (
          <Alert variant="success">{this.state.user.name}</Alert>
        )}
      </Container>
    );
  }
}
