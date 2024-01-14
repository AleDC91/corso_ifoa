import React, { useEffect, useState } from "react";
import AllTheBooks from "./AllTheBooks";
import CommentArea from "./CommentArea";

export default function HomePage() {
  const [books, setBooks] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);
  const [comments, setComments] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [isCommentLoading, setIsCommenLoading] = useState(false);
  const [titleSelected, setTitleSelected] = useState(
    "Seleziona un libro per vedere i commenti"
  );

  useEffect(() => {
    getData();
  }, [selectedBook]);

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
          setErrorMsg("errore");
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

  const getData = () => {
    setIsCommenLoading(true);
    fetch(
      "https://striveschool-api.herokuapp.com/api/books/" +
        selectedBook +
        "/comments",
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MTgyZWMwNTgzNTAwMTg1MjJjOTMiLCJpYXQiOjE3MDQ4OTU1OTAsImV4cCI6MTcwNjEwNTE5MH0.aLNeLsVRshO_VXnEdVQqCiyY5UygNVJVXqiupo0xMVg",
        },
      }
    )
      .then((res) => {
        if (!res.ok) {
          setErrorMsg(res.status);
        } else {
          return res.json();
        }
      })
      .then((json) => {
        setIsCommenLoading(false);
        if (json) {
          setComments(json);
        }
        // else {
        //   setComments([{ comment: "no comments" }]);
        // }

        console.log(comments);
      })
      .catch((err) => {
        setErrorMsg(err.message);
        setIsCommenLoading(false);
        console.log(err);
      });
  };

  return (
    <div className="home-page">
      <AllTheBooks
        errorMsg={errorMsg}
        books={books}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setBooks={setBooks}
        getData={getData}
        handleSubmitComment={handleSubmitComment}
        handleDeleteComment={handleDeleteComment}
        comments={comments}
        selectedBook={selectedBook}
        setSelectedBook={setSelectedBook}
        titleSelected={titleSelected}
        setTitleSelected={setTitleSelected}
      />
      <CommentArea
        errorMsg={errorMsg}
        isCommentLoading={isCommentLoading}
        books={books}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setBooks={setBooks}
        getData={getData}
        handleSubmitComment={handleSubmitComment}
        handleDeleteComment={handleDeleteComment}
        comments={comments}
        selectedBook={selectedBook}
        setSelectedBook={setSelectedBook}
        titleSelected={titleSelected}
        setTitleSelected={setTitleSelected}
      />
    </div>
  );
}
