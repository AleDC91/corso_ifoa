import React from 'react'
import { Spinner } from 'react-bootstrap'

export default function LoadingJobs() {
  return (
    <div className='d-flex'>
    <Spinner animation="grow" variant="warning" />
    <h1>Loading Jobs...</h1>
    </div>
  )
}
