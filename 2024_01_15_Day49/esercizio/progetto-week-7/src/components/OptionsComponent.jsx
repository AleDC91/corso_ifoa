import React, { Component } from "react";
import SelectGenreComponent from "./SelectGenreComponent";
import "../styles/OptionsComponent.css";
import GridOrListVisualization from "./GridOrListVisualization";

export default class OptionsComponent extends Component {
  render() {
    return (
      <div className="options-component d-flex align-items-center justify-content-between px-4 pt-3 pb-5">
        <div className="left-options d-flex align-items-center">
          <h3 className="me-4 text-white" >Tv Shows</h3>
          <SelectGenreComponent />
        </div>

        <GridOrListVisualization />
      </div>
    );
  }
}
