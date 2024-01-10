import React, { Component } from "react";
import {Spinner} from "react-bootstrap"

export default class LoadingComments extends Component {
  render() {
    return (
      <div className="loading-comment d-flex align-items-center">
        <Spinner animation="grow" variant="secondary" />
        <p className="text-black ms-3"> Loading comments...</p>
      </div>
    );
  }
}
