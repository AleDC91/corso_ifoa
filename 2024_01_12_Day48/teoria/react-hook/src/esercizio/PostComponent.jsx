import React from 'react'
import { Form } from 'react-bootstrap'

export default function PostComponent({ posts, changePost }) {
  return (
    <Form.Select aria-label="Default select example" className="my-3" onChange={changePost}>
        <option>Open this select menu</option>
        {posts.map(p => <option key={p.id} value={p.id}>{p.title}</option>)}
    </Form.Select>
  )
}