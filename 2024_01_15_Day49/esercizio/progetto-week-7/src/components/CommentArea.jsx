import React from "react";

import CommentList from "./CommentList";
import AddComment from "./AddComment";

export default function CommentArea({ comments, handleDeleteComment, handleSubmitComment, id}) {
  return (
    <div className="comment-area">
      <AddComment handleSubmitComment={handleSubmitComment} id={id}/>
      <CommentList comments={comments} handleDeleteComment={handleDeleteComment} handleSubmitComment={handleSubmitComment}/>
    </div>
  );
}
