import React, { Component } from 'react';
import Spinner from 'react-bootstrap/Spinner';

export default class LoadingPlaceholderComponent extends Component {
  render() {
    return (
      <div className='loading-placeholder d-flex fs-4 align-items-center justify-content-center my-5'>
        <Spinner variant='danger' className='me-3'/>
        <div>Loading movies</div>
      </div>
    )
  }
}
