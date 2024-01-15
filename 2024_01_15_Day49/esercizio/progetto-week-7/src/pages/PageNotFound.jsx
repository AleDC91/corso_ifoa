import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PageNotFound extends Component {
  render() {
    return (
      <div className='page-not-found'>
        <h1>Solito errore 404</h1>
        <Link to={"/"}>
            <h2>Torna alla home page</h2>
        </Link>
        </div>
    )
  }
}
