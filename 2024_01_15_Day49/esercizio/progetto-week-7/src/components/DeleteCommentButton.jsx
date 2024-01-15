import React from "react";


export default function DeleteCommentButton({handleDeleteComment, id}) {
  return (
    <button
        className="btn btn-danger my-4"
        onClick={() => handleDeleteComment(id)}
      >
        elimina
      </button>
  )
}