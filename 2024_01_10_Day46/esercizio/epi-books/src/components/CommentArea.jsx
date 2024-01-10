import React, { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

export default class CommentArea extends Component {
  state = {
    comments: [],
    errorMsg: "",
    isCommentLoading: true,
  };

  handleDeleteComment = (id) => {
    if(window.confirm("Vuoi davvero eliminare questo bellissimo commento?")){
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + id,
      {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MTgyZWMwNTgzNTAwMTg1MjJjOTMiLCJpYXQiOjE3MDQ4OTU1OTAsImV4cCI6MTcwNjEwNTE5MH0.aLNeLsVRshO_VXnEdVQqCiyY5UygNVJVXqiupo0xMVg",
        },
      }
    ).then(res => res.json())
    .then(json => {
        const newComments = this.state.comments.filter(comment => comment._id !== id)
        this.setState({
            comments: newComments
        })
    })}
  };

  
  componentDidMount() {
    fetch(
      "https://striveschool-api.herokuapp.com/api/books/" +
        this.props.asin +
        "/comments",
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MTgyZWMwNTgzNTAwMTg1MjJjOTMiLCJpYXQiOjE3MDQ4OTU1OTAsImV4cCI6MTcwNjEwNTE5MH0.aLNeLsVRshO_VXnEdVQqCiyY5UygNVJVXqiupo0xMVg",
        },
      }
    )
      .then((res) => {
        if (!res.ok) {
          this.setState({ errorMsg: res.status });
        } else {
          return res.json();
        }
      })
      .then((json) => {
        this.setState({
          comments: json || [{ comment: "no comments" }],
          isCommentLoading: false,
        });
        console.log(this.state.comments);
      })
      .catch((err) => {
        this.setState({ errorMsg: err.message, isCommentLoading: false });
        console.log(err);
      });
  }

  render() {
    return (
      <div className="comment-area">
        <CommentList
          selected={this.state.selected}
          asin={this.props.book.asin}
          comments={this.state.comments}
          isCommentLoading={this.state.isCommentLoading}
          handleDeleteComment={this.handleDeleteComment}
        />
        <AddComment
          selected={this.state.selected}
          asin={this.props.book.asin}
          
        />
      </div>
    );
  }
}
