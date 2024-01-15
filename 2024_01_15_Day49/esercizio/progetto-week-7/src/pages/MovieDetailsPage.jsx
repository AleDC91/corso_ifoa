import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { OMDb_API_KEY, URL } from "../config/config";
import LoadingPlaceholderComponent from "../components/LoadingPlaceholderComponent";
import SingleMovieError from "../components/SingleMovieError";
import LoadingDetailsComponent from "../components/LoadingDetailsComponent";
import "../styles/MovieDetailsPage.css"

export default function MovieDetailsPage() {
  const params = useParams();
  const id = params.movieId;
  console.log(id);

  const [loadingDetails, setLoadingDetails] = useState(false);
  const [movieData, setMovieData] = useState();
  const [singleMovieError, setSingleMovieError] = useState("");

  useEffect(() => {
    setLoadingDetails(true);
    setSingleMovieError("");
    fetch(`${URL}?apikey=${OMDb_API_KEY}&i=${id}`)
      .then((res) => {
        if (res.ok) {
          console.log(res);
          return res.json();
        } else {
          setSingleMovieError(res.statusText);
          setLoadingDetails(false)
        }
      })
      .then((json) => {
        setMovieData(json);
        setLoadingDetails(false);
      })
      .catch((err) => {
        setSingleMovieError(err.message);
        setLoadingDetails(false)
      });
  }, []);

  return (
    <>
      {singleMovieError && <SingleMovieError singleMovieError={singleMovieError}/>}
      {loadingDetails && <LoadingDetailsComponent />}
      {movieData && (
      <div className="movie-detail-page text-white">
        <div>MovieDetailsPage</div>
        <Card className="movie-details-card w-25 mx-auto bg-dark">
          <Card.Img variant="top" src={movieData.Poster !== "N/A" ? movieData.Poster : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/640px-No-Image-Placeholder.svg.png" } alt={movieData.Title} />
          <Card.Body >
            <Card.Text className="bg-dark text-white">{movieData.Title}</Card.Text>
          </Card.Body>
        </Card>
      </div>
      )}
    </>
  );
}
