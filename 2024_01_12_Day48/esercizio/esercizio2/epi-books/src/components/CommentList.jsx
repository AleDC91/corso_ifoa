import React, { Component } from "react";
import SingleComment from "./SingleComment";
import LoadingComments from "./LoadingComments";
import ErrorComponent from "./ErrorComponent";

export default class CommentList extends Component {
  render() {
    return (
      <div className="comments-list m-3 ">
        {this.props.isCommentLoading && <LoadingComments />}
        {this.props.errorMsg && <ErrorComponent errorMsg={this.props.errorMsg}/>}
        {!this.props.isCommentLoading &&
          this.props.comments.map((comment, index) => (
            <SingleComment
              comment={comment}
              key={index}
              selected={this.props.selected}
              comments={this.props.comments}
              isCommentLoading={this.props.isCommentLoading}
              handleDeleteComment={this.props.handleDeleteComment}
            />
          ))}
          {!this.props.isCommentLoading && this.props.comments.length === 0 && <p className="text-center fw-bold py-3">Commenta per primo questo libro!</p>}
      </div>
    );
  }
}
