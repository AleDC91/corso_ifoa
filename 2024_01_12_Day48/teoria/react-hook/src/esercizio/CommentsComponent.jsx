import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'

export default function CommentsComponent({comments}) {
  return (
        <Form.Select aria-label="Default select example" className="my-3">
        <option>Open this select menu</option>
        {comments.map(c => <option key={c.id} value={c.id}>{c.name} - {c.email}</option>)}
        </Form.Select>
  )
}