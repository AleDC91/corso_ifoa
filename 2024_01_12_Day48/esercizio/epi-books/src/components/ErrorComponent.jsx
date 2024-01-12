import { Alert } from 'bootstrap'
import React, { Component } from 'react'

export default class ErrorComponent extends Component {
  render() {
    return (
     <Alert variant="danger"> Errore! {this.props.err || ""}</Alert>
    )
  }
}
