import React, { Component } from "react";

export default class StateComponent extends Component {
  state = {
    counter: 0,
  };
  // nelle app vecchie, puoi trovare lo stato definito nel costruttore
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //         counter: 0
  //     };
  //   }

  startTimer() {
    this.setState({ timer: new Date() });
  }

  render() {
    return (
      <>
        <h1>StateComponent: {this.state.counter}</h1>
        <h2>
          Sono le ore{" "}
          {this.state.timer && this.state.timer.toLocaleTimeString()}
        </h2>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Click
        </button>
        <button onClick={() => this.startTimer()}>timer</button>
      </>
    );
  }
}
