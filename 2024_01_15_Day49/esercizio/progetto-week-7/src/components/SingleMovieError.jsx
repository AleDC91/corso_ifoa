import React from 'react'
import { Alert } from 'react-bootstrap'

export default function SingleMovieError({singleMovieError}) {
  return (
    <Alert variant="danger"> Errore! {singleMovieError}</Alert>
  )
}
