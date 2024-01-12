import React, { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

export default class CommentArea extends Component {


  
  // componentDidMount() {
  //  () => {this.props.getData()};
  // }

  render() {
    return (
      <div className="comment-area">
        <h2>{this.props.titleSelected}</h2>
        <CommentList
          selected={this.props.selected}
          asin={this.props.selectedBook}
          comments={this.props.comments}
          isCommentLoading={this.props.isCommentLoading}
          handleDeleteComment={this.props.handleDeleteComment}
          errorMsg={this.props.errorMsg}
        />
        <AddComment
          selected={this.props.selected}
          asin={this.props.selectedBook}
          handleSubmitComment={this.props.handleSubmitComment}
          errorMsg={this.props.errorMsg}
        />
      </div>
    );
  }
}
