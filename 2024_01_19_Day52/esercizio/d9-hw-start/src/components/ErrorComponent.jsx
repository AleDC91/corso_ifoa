import React from 'react'
import { Alert } from 'react-bootstrap'

export default function ErrorComponent({error}) {
  return (
    <Alert variant='danger'>Error! {error}</Alert>
  )
}
