import React, { Component, useEffect, useState } from "react";
import "../styles/SingleMovie.css";
import InfoFilmComponent from "./InfoFilmComponent";
import { useNavigate } from "react-router-dom";


export default function SingleMovie(props) {

  const [isActive, setIsActive] = useState(false)
  const [timeoutID, setTimeoutId] = useState(null)

  const navigate = useNavigate();


 useEffect(()=>{
  window.addEventListener("resize", props.handleResize);

  return () => window.removeEventListener("resize", props.handleResize);
 },[])

 const activateZoom = () => {
    const timeoutId = setTimeout(() => {
      setIsActive(!isActive);
    }, 500);
    setTimeoutId( timeoutId );
  };


  const removeZoom = () => {
    // Clear the timeout if it has been started
    if (timeoutID) {
      clearTimeout(timeoutID);
      setTimeoutId(null);
    }
  
    // Deactivate if it's already active
    if (isActive) {
      setIsActive(false);
    }
  };
  
  return (
    <>
    <div
    style={{ minWidth: `${props.movieWidth}px`, minHeight: `${props.movieWidth *1.2}px`, backgroundColor: "transparent" }}
    className={`single-movie ${isActive ? "active" : ""}`}
    onMouseEnter={activateZoom}
    onMouseLeave={removeZoom}
    onClick={() => navigate("/movie-details/" + props.movie.imdbID)}
    >
    <img className="img-fluid" src={props.movie.Poster !== "N/A" ? props.movie.Poster : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/640px-No-Image-Placeholder.svg.png" } alt={props.movie.Title}  />
    {isActive && <InfoFilmComponent movie={props.movie} />}
  </div>
  </>
  )
}






// export default class SingleMovie extends Component {
//   state = {
//     isActive: false,
//     timeoutId: null,

//   };

//   componentDidMount() {
//     window.addEventListener("resize", this.props.handleResize);
//     this.props.calculateMovieSize();
//   }

//   componentWillUnmount() {
//     window.removeEventListener("resize", this.props.handleResize);
//   }


//   activateZoom = () => {
//     const timeoutId = setTimeout(() => {
//       this.setState((prevState) => ({ isActive: !prevState.isActive }));
//     }, 500);
//     this.setState({ timeoutId });
//   };

//   removeZoom = () => {
//     const { timeoutId } = this.state;

//     // Annulla il timeout se è stato avviato
//     if (timeoutId) {
//       clearTimeout(timeoutId);
//       this.setState({ timeoutId: null });
//     }

//     // Annulla l'attivazione se è già attiva
//     if (this.state.isActive) {
//       this.setState((prevState) => ({ isActive: !prevState.isActive }));
//     }
//   };

 




  

//   render() {
//     return (
//         <>
//         <div
//         style={{ minWidth: `${this.props.movieWidth}px`, minHeight: `${this.props.movieWidth *1.2}px`, backgroundColor: "transparent" }}
//         className={`single-movie ${this.state.isActive ? "active" : ""}`}
       
//         onMouseEnter={this.activateZoom}
//         onMouseLeave={this.removeZoom}
        
//         >
        
//         <img className="img-fluid" src={this.props.movie.Poster !== "N/A" ? this.props.movie.Poster : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/640px-No-Image-Placeholder.svg.png" } alt={this.props.movie.Title}  />
//         {this.state.isActive && <InfoFilmComponent movie={this.props.movie} />}
//       </div>
//       </>
//     );
//   }
// }
