import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { OMDb_API_KEY, URL } from "../config/config";
import LoadingPlaceholderComponent from "../components/LoadingPlaceholderComponent";
import SingleMovieError from "../components/SingleMovieError";
import LoadingDetailsComponent from "../components/LoadingDetailsComponent";
import "../styles/MovieDetailsPage.css";
import CommentArea from "../components/CommentArea";

export default function MovieDetailsPage() {
  const params = useParams();
  const id = params.movieId;
  console.log(id);

  const [loadingDetails, setLoadingDetails] = useState(false);
  const [movieData, setMovieData] = useState();
  const [singleMovieError, setSingleMovieError] = useState("");
  const [comments, setComments] = useState();
  const [commentError, setCommentError] = useState();
  const [loadingComments, setLoadingComments] = useState();
  const [errorMsg, setErrorMsg] = useState("");

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
          setLoadingDetails(false);
        }
      })
      .then((json) => {
        setMovieData(json);
        setLoadingDetails(false);
      })
      .catch((err) => {
        setSingleMovieError(err.message);
        setLoadingDetails(false);
      });
  }, []);

  useEffect(() => getComments(), []);

  const getComments = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${id}`, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MTgyZWMwNTgzNTAwMTg1MjJjOTMiLCJpYXQiOjE3MDQ4OTU1OTAsImV4cCI6MTcwNjEwNTE5MH0.aLNeLsVRshO_VXnEdVQqCiyY5UygNVJVXqiupo0xMVg",
      },
    })
      .then((res) => {
        if (!res.ok) {
          setCommentError(res.message);
        } else {
          return res.json();
        }
      })
      .then((json) => {
        setLoadingComments(false);
        if (json) {
          setComments(json);
        }
        console.log(comments);
      })
      .catch((err) => {
        setCommentError(err.message);
        setLoadingComments(false);
        console.log(err);
      });
  };

  const handleDeleteComment = (id) => {
    if (window.confirm("Vuoi davvero eliminare questo bellissimo commento?")) {
      fetch("https://striveschool-api.herokuapp.com/api/comments/" + id, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MTgyZWMwNTgzNTAwMTg1MjJjOTMiLCJpYXQiOjE3MDQ4OTU1OTAsImV4cCI6MTcwNjEwNTE5MH0.aLNeLsVRshO_VXnEdVQqCiyY5UygNVJVXqiupo0xMVg",
        },
      })
        .then((res) => res.json())
        .then((json) => {
          const newComments = comments.filter((comment) => comment._id !== id);
          setComments(newComments);
          setErrorMsg("");
        })
        .catch((err) => {
          console.log(err);
          setErrorMsg(err.message);
        });
    }
  };

  const handleSubmitComment = (event, newComment) => {
    event.preventDefault();
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MTgyZWMwNTgzNTAwMTg1MjJjOTMiLCJpYXQiOjE3MDQ4OTU1OTAsImV4cCI6MTcwNjEwNTE5MH0.aLNeLsVRshO_VXnEdVQqCiyY5UygNVJVXqiupo0xMVg",
      },
      body: JSON.stringify(newComment),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((json) => {
        const comm = {
          comment: json.comment,
          elementId: json.elementId,
          rate: json.rate,
          _id: json._id,
        };
        console.log(comm);
        setComments([...comments, comm]);
        setErrorMsg("");
      })
      .catch((err) => {
        setErrorMsg(err.message);
      });
  };

  return (
    <>
      {singleMovieError && (
        <SingleMovieError singleMovieError={singleMovieError} />
      )}
      {loadingDetails && <LoadingDetailsComponent />}
      {movieData && (
        <div className="movie-detail-page text-white">
          <h2 className="text-center my-4">{movieData.Title}</h2>
          <div className="d-flex align-items-center mt-5">
            <Card className="movie-details-card mx-auto bg-dark">
              <Card.Img
                variant="top"
                src={
                  movieData.Poster !== "N/A"
                    ? movieData.Poster
                    : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/640px-No-Image-Placeholder.svg.png"
                }
                alt={movieData.Title}
              />
              <Card.Body>
                <Card.Text className="bg-dark text-white">
                  {movieData.Title}
                </Card.Text>
              </Card.Body>
            </Card>
            <CommentArea
              comments={comments}
              handleDeleteComment={handleDeleteComment}
              handleSubmitComment={handleSubmitComment}
              id={id}
            />
          </div>
        </div>
      )}
    </>
  );
}
