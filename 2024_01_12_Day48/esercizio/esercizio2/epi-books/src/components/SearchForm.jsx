import React from "react";
import Form from "react-bootstrap/Form";
import "../styles/SearchForm.css";

export default function SearchForm({ handleOnChange }) {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          className="input-field"
          type="text"
          placeholder="filtra..."
          onChange={(event) => handleOnChange(event)}
        />
      </Form.Group>
    </Form>
  );
}

// export default class SearchForm extends Component {

//   render() {
//     return (
//       <Form>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Control
//             className="input-field"
//             type="text"
//             placeholder="filtra..."
//             onChange={(event) => this.props.handleOnChange(event)}
//           />
//         </Form.Group>
//       </Form>
//     );
//   }
// }
