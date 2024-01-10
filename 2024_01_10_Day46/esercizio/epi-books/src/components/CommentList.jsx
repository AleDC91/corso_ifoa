import React, { Component } from "react";
import DeleteCommentButton from "./DeleteCommentButton";

export default class CommentList extends Component {
  render() {
    return (
      <div className="comments-list m-3 ">
        {this.props.isCommentLoading && <p>Loading comments...</p>}

        {!this.props.isCommentLoading &&
          this.props.comments.map((comment, index) => (
            <div key={index} className="single-comment d-flex justify-content-between">
              {console.log(comment._id)}

              <p>{comment.comment}</p>
              <DeleteCommentButton
                id={comment._id}
                comments={this.props.comments}
                handleDeleteComment={this.props.handleDeleteComment}
              />
            </div>
          ))}
      </div>
    );
  }
}
