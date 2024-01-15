import React, { Component } from "react";
import "../styles/SlideButton.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
export default class SlideButton extends Component {
  render() {
    return (
      <button
        className={`slide-button ${this.props.direction}`}
        onClick={(e) => this.props.handleScrollClick(e, this.props.direction)}
      >
        {this.props.direction === "left" && <IoIosArrowBack />}
        {this.props.direction === "right" && <IoIosArrowForward />}
      </button>
    );
  }
}
