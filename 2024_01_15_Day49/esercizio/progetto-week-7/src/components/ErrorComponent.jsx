import Alert from 'react-bootstrap/Alert'
import React, { Component } from 'react'

export default class ErrorComponent extends Component {
  render() {
    return (
     <Alert variant="danger"> Errore! {this.props.errorMsg}</Alert>
    )
  }
}
