import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function NavigateComponent() {

    const navigate = useNavigate()

  return (
    <Button variant='primary' onClick={() => navigate("/")}>Home Page</Button>
  )
}
