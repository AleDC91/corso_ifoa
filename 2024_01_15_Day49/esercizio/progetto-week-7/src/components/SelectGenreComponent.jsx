import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import "../styles/SelectGenreComponent.css";

export default class SelectGenreComponent extends Component {
  render() {
    return (
      <div className="select-genre">
        <Form.Select
          aria-label="Default select example"
          className="form-genres"
        >
          <option value="">Genres</option>
          <option value="2">Genre 1</option>
          <option value="3">Genre 2</option>
          <option value="4">Genre 3</option>
        </Form.Select>
      </div>
    );
  }
}
