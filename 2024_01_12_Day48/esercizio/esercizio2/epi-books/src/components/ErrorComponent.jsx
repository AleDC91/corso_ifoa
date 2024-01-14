import { Alert } from 'bootstrap'
import React from 'react'



export default function ErrorComponent({errorMsg}) {
  return (
    <Alert variant="danger"> Errore! {errorMsg || ""}</Alert>
  )
}



// export default class ErrorComponent extends Component {
//   render() {
//     return (
//      <Alert variant="danger"> Errore! {this.props.err || ""}</Alert>
//     )
//   }
// }
