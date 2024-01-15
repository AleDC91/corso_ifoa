import React, { Component } from "react";
import SingleMovie from "./SingleMovie";
import "../styles/MoviesComponent.css";
import SlideButton from "./SlideButton";
import ErrorComponent from "./ErrorComponent";

export default class MoviesComponent extends Component {
  state = {
    windowSize: window.innerWidth,
    movieWidth: 0,
    movieHeight: 0,
    scrollX: 0
  };
  componentDidMount() {
    this.calculateMovieSize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  calculateMovieSize = () => {
    const { innerWidth: inner } = window;
    let width, height;
    if (inner > 1400) {
      width = inner / 8;
    } else if (inner > 1200) {
      width = inner / 7;
    } else if (inner > 992) {
      width = inner / 6;
    } else if (inner > 768) {
      width = inner / 5;
    } else if (inner > 400) {
      width = inner / 3;
    } else {
      width = inner;
    }

    height = width / 3;

    this.setState({
      movieWidth: width,
      movieHeight: height,
    });
    console.log(this.state);
  };

  handleResize = () => {
    this.setState({ windowSize: window.innerWidth });
    this.calculateMovieSize();
    console.log(this.state.windowSize);
    console.log("Window Size:", this.state.windowSize);
  };

  handleScroll = (e) => {
    this.setState({ scrollX: e.target.scrollLeft }, () => {
      console.log("State after update:", this.state)})
  };


  handleScrollClick = (e, direction) => {
    console.log("handleScrollClick called with direction:", direction);
    const scrollIncrement = this.state.windowSize;
    const container = e.target.parentNode.parentNode; 
  
    if (container) {
      container.scrollLeft =
        direction === "right"
          ? container.scrollLeft + scrollIncrement
          : container.scrollLeft - scrollIncrement;
    }
  
    this.setState({
      scrollX: container ? container.scrollLeft : this.state.scrollX,
    }, () => console.log(this.state));
  };


  render() {
    return (
      <div
      onScroll={(e) => this.handleScroll(e)}
        className="movies d-flex"
        style={{ minHeight: `${this.state.movieWidth * 2.3}px` }}
      >
        <div
          className="btns-container"
          style={{
            minWidth: `${this.state.windowSize}px`,
            minHeight: `${this.state.movieWidth * 2.3}px`,
            left: `${this.state.scrollX}px`,
          }}
        >
          <SlideButton direction="left" handleScrollClick={this.handleScrollClick}/>
          <SlideButton direction="right" handleScrollClick={this.handleScrollClick}/>
        </div>
        {!this.props.isLoading &&
          this.props.movies.length === 0 &&
          this.props.errorMsg && <ErrorComponent className="mx-auto" />}
        {this.props.movies &&
          this.props.movies.map((movie) => (
            <SingleMovie
              key={movie.imdbID}
              movie={movie}
              isLoading={this.props.isLoading}
              movieWidth={this.state.movieWidth}
              movieHeight={this.state.movieHeight}
              windowSize={this.state.windowSize}
              handleResize={this.handleResize}
              calculateMovieSize={this.calculateMovieSize}
            />
          ))}
      </div>
    );
  }
}
