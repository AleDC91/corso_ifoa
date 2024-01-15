import React, { Component } from "react";
import OptionsComponent from "../components/OptionsComponent";
import CentralComponent from "../components/CentralComponent";

export default class HomePage extends Component {
  render() {
    return (
      <>
        <main>
          <OptionsComponent />
          <CentralComponent />
        </main>
      </>
    );
  }
}
