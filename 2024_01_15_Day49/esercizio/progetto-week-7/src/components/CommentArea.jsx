import React from "react";

import CommentList from "./CommentList";
import AddComment from "./AddComment";

export default function CommentArea({ comments }) {
  return (
    <div className="comment-area">
      <CommentList comments={comments} />
      <AddComment />
    </div>
  );
}
