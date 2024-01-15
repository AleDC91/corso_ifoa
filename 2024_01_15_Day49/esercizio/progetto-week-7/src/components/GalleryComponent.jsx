import React, { Component } from "react";
import MoviesComponent from "./MoviesComponent";
import LoadingPlaceholderComponent from "./LoadingPlaceholderComponent";


export default class GalleryComponent extends Component {
  render() {
    return (
      <article className="gallery ">
        <h2>{this.props.title}</h2>
        
        {this.props.isLoading && <LoadingPlaceholderComponent />}
        {!this.props.movies && <h1>Errore dioboia</h1>}
        {this.props.movies && (
          <MoviesComponent
            movies={this.props.movies}
            isLoading={this.props.isLoading}
            errorMsg={this.props.errorMsg}
          />
        )}
      </article>
    );
  }
}
