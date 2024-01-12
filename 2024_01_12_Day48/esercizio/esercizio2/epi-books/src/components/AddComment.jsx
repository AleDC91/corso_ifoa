import React, { Component, useState } from "react";
import { Form, Button } from "react-bootstrap";
import ErrorComponent from "./ErrorComponent";


import React from 'react'

export default function AddComment({props}) {


[comment, setComment] = useState({
  comment: "",
  rate: "",
  elementId: ""
})


handleOnChange = (event) => {
  setComment(
    (prevComment) => ({
      comment: {
        ...prevComment,
        [event.target.name]: event.target.value,
        elementId: props.asin,
      },
    }),
    // in teoria questa seconda funzione dovrebbe attendere che set state sia completato
    () => console.log(this.state.comment)
  );
};

resetInputFields = () => {
  setComment({
      comment: "",
      rate: "",
      elementId: ""
  });
};

  return (
    <>
    {props.errorMsg && (
      <ErrorComponent errorMsg={props.errorMsg} />
    )}

    <Form
      className="m-3"
      onSubmit={(event) => {
        props.handleSubmitComment(event, comment);
        resetInputFields();
      }}
    >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Lascia un commento </Form.Label>
        <Form.Control
          type="text"
          placeholder="commenta..."
          onChange={handleOnChange}
          value={comment.comment}
          name="comment"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Stars </Form.Label>
        <Form.Control
          type="number"
          min="1"
          max="5"
          name="rate"
          value={comment.rate}
          onChange={handleOnChange}
        />
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        disabled={!(comment.comment && comment.rate)}
      >
        Submit
      </Button>
    </Form>
  </>
  )
}






// export default class AddComment extends Component {
//   state = {
//     comment: {
//       comment: "",
//       rate: "",
//       elementId: "",
//     },
//   };

//   handleOnChange = (event) => {
//     this.setState(
//       (prevState) => ({
//         comment: {
//           ...prevState.comment,
//           [event.target.name]: event.target.value,
//           elementId: this.props.asin,
//         },
//       }),
//       // in teoria questa seconda funzione dovrebbe attendere che set state sia completato
//       () => console.log(this.state.comment)
//     );
//   };

//   resetInputFields = () => {
//     this.setState({
//       comment: {
//         comment: "",
//         rate: "",
//         elementId: "",
//       },
//     });
//   };

//   render() {
//     {
//       console.log(this.props.asin);
//     }
//     return (
//       <>
//         {this.props.errorMsg && (
//           <ErrorComponent errorMsg={this.props.errorMsg} />
//         )}

//         <Form
//           className="m-3"
//           onSubmit={(event) => {
//             this.props.handleSubmitComment(event, this.state.comment);
//             this.resetInputFields();
//           }}
//         >
//           <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Label>Lascia un commento </Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="commenta..."
//               onChange={this.handleOnChange}
//               value={this.state.comment.comment}
//               name="comment"
//             />
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Label>Stars </Form.Label>
//             <Form.Control
//               type="number"
//               min="1"
//               max="5"
//               name="rate"
//               value={this.state.comment.rate}
//               onChange={this.handleOnChange}
//             />
//           </Form.Group>

//           <Button
//             variant="primary"
//             type="submit"
//             disabled={!(this.state.comment.comment && this.state.comment.rate)}
//           >
//             Submit
//           </Button>
//         </Form>
//       </>
//     );
//   }
// }
