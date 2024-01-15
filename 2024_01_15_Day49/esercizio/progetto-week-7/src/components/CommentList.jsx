import React from 'react'
import SingleComment from './SingleComment'

export default function CommentList({comments, handleDeleteComment}) {
  return (
    comments && comments.map(comment => <SingleComment comment={comment} handleDeleteComment={handleDeleteComment}/>)
  )
}
