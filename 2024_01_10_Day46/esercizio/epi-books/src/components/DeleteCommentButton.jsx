import React, { Component } from "react";

export default class DeleteCommentButton extends Component {



  render() {
    console.log(this.props.id)
    return <button className="btn btn-danger" onClick={() => this.props.handleDeleteComment(this.props.id)}>elimina </button>;
  }
}
