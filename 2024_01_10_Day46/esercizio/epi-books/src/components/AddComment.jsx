import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export default class AddComment extends Component {
  state = {
    comment: {
      comment: "",
      rate: null,
      elementId: null,
    },
  };

  handleOnChange = (event) => {
    this.setState(prevState => ({
        comment: {
            ...prevState.comment,
            [event.target.name]: event.target.value,
            elementId: this.props.asin
        }
    }), 
    // in teoria questa seconda funzione dovrebbe attendere che set state sia completato
    () => console.log(this.state.comment)
);
    
  };


  

  handleOnSubmit = (event) => {
    event.preventDefault()
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization":
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MTgyZWMwNTgzNTAwMTg1MjJjOTMiLCJpYXQiOjE3MDQ4OTU1OTAsImV4cCI6MTcwNjEwNTE5MH0.aLNeLsVRshO_VXnEdVQqCiyY5UygNVJVXqiupo0xMVg",
          },
          body: JSON.stringify(this.state.comment)
    }).then(res => res.json())
    .then(json => console.log(json))
    
  }


  render() {
      { console.log(this.props.asin)}
    return (
      <Form className="m-3" onSubmit={(event) => this.handleOnSubmit(event) }>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Lascia un commento </Form.Label>
          <Form.Control
            type="text"
            placeholder="commenta..."
            onChange={this.handleOnChange}
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
            onChange={this.handleOnChange}
          />
        </Form.Group>
       
        <Button variant="primary" type="submit" disabled={!(this.state.comment.comment && this.state.comment.rate)}>
          Submit
        </Button>
      </Form>
    );
  }
}
