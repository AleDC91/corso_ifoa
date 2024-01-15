import React from 'react'
import { Spinner } from 'react-bootstrap'

export default function LoadingDetailsComponent() {
  return (
    <div className='loading-placeholder d-flex fs-4 align-items-center justify-content-center my-5 text-white'>
    <Spinner variant='warning' className='me-3'/>
    <div>Loading movie data</div>
  </div>
  )
}
