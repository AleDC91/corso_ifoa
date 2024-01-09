import React, { Component } from 'react'
import "../styles/MyFooter.css";

export default class 
 extends Component {
  render() {
    return (
      <div className='footer'>
        <p className='copyright'> &copy;EpiBooks  {new Date().getFullYear()}</p>
      </div>
    )
  }
}
