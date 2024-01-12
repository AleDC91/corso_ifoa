import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../styles/SingleBook.css";
import CommentArea from "./CommentArea";

import { Component } from "react";

export default class SingleBook extends Component {
  state = {
    selected: false,
  };

  toggleSelected = () => {
    this.setState((prevState) => ({ selected: !prevState.selected }));
  };
  render() {
    return (
      <Card className={`book-card ${this.state.selected ? "selected" : ""}`}>
        <Card.Img
          variant="top"
          src={this.props.book.img}
          alt="holder.js/100px180"
          className="book-img"
          onClick={() => {
            this.toggleSelected();
            this.props.setSelectedBook(this.props.book.asin);
            this.props.setTitleSelected(this.props.book.title)
          }}
        />
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
          <Card.Text className="card-text">
            <p>{this.props.book.category}</p>
            <p>{this.props.book.price}€</p>
          </Card.Text>
        </Card.Body>
        {/* {this.state.selected && (
          <CommentArea
            getData={this.props.getData}
            comments={this.props.comments}
            selected={this.state.selected}
            asin={this.props.book.asin}
            book={this.props.book}
          /> 
        )} */}
      </Card>
    );
  }
}
