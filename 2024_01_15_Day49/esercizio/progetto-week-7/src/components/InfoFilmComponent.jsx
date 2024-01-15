import React, { Component } from "react";
import { IoPlayCircleOutline } from "react-icons/io5";
import { BiSolidPlusCircle } from "react-icons/bi";
import { AiOutlineLike } from "react-icons/ai";
import { IoChevronDownCircleOutline } from "react-icons/io5";
import "../styles/InfoFilmComponent.css"

export default class InfoFilmComponent extends Component {
  render() {
    return (
      <div className="info-film ">
        <div className="info-film-header d-flex align-items-center justify-content-between px-2">
          <div className="info-film-header-left">
            <IoPlayCircleOutline className="me-1" />
            <BiSolidPlusCircle  className="me-1"/>
            <AiOutlineLike className="me-1"/>
          </div>
          <IoChevronDownCircleOutline />
        </div>
        <div className="info-film-body ps-2 d-flex align-items-center mt-1 pb-4" >
            <div className="compatibility ">{Math.floor(Math.random() * 10 ) + 90}% compatibile</div>
            <div className="info-age mx-2 px-1">14+</div>
        </div>
      </div>
    );
  }
}
