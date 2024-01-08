import { Component } from "react";
import "../styles/ImageComponent.css"

class ImageComponent extends Component {


  render(){
    return (
      <div className="image-container">
        <img src={this.props.imageData.src} alt={this.props.imageData.alt} title={this.props.imageData.title}/>
      </div>
    );
  }


};

export default ImageComponent;
