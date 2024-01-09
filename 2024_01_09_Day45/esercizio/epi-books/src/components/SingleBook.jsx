import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../styles/SingleBook.css";


import { Component } from 'react'

export default class SingleBook extends Component {

    state = {
        selected: false
    }


    toggleSelected = () => {
        this.setState((prevState) => ({selected: !prevState.selected}))
    }
  render() {
    return (
        <Card className={`book-card ${this.state.selected ? "selected" : ""}`} onClick={this.toggleSelected}>
        <Card.Img variant="top" src={this.props.book.img} alt="holder.js/100px180" className="book-img"/>
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
          <Card.Text className="card-text">
            <p>{this.props.book.category}</p>
            <p>{this.props.book.price}</p>
          </Card.Text>
          <Button variant="primary">link</Button>
        </Card.Body>
      </Card>
    )
  }
}
