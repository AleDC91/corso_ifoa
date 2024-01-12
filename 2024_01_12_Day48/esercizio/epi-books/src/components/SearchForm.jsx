import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import "../styles/SearchForm.css";

export default class SearchForm extends Component {


  

  render() {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            className="input-field"
            type="text"
            placeholder="filtra..."
            onChange={(event) => this.props.handleOnChange(event)}
          />
        </Form.Group>
      </Form>
    );
  }
}
