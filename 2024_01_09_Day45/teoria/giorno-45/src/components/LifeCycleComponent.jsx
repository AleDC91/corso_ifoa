import React, { Component } from "react";

export default class LifeCycleComponent extends Component {
  state = {
    timer: new Date()
  };
  constructor(props) {
    super(props);
    // il costruttore viene chiamato prima della costruzione del componente
    //viene invocato UNA SOLA VOLTA in maniera automatica da React per creare un componente

    console.log("sono il costruttore della classe LifeCycleComponent");
  }

  componentDidMount(){
    // il componentDidMount viene invocato UNA SOLA VOLTA in maniera automatica 
    // da react DOPO che il componente è stato montato nel DOM

    // se volglio fare qualcosa DOPO che il componente è stato montato nel DOM

    this.interval = setInterval(() => {
      this.setState({timer: new Date()})
    }, 1000)+

    console.log("sono componentDidMount")
  }

  componentDidUpdate(){
    // invocato in maniera automatica da react ogni volta che il componente viene aggionrnato
    // fare qualcosa ogni volta che il componente si aggionra
    console.log("sono il componentDidUpdate della classe LifeCycleComponent")
  }


  componentWillUnmount(){
    // invocato in maniera automatica da react UNA SOLA VOLTA poco prima che il componente venga distrutto
    console.log("sono il componentDidUnmount della classe LifeCycleComponent")

    clearInterval(this.interval)
  }
  render() {
    // invoacto ogni volta che succede qualcosa
    console.log("sono il render della classe LifeCycleComponent");
    return (<div>{this.state.timer.toLocaleTimeString()}</div>);
  }
}
