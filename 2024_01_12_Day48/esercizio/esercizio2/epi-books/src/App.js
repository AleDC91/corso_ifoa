import MyNav from "./components/MyNav";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import Container from "react-bootstrap/esm/Container";
import CommentArea from "./components/CommentArea";
import { useState } from "react";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Container>
        <Welcome />
      </Container>
      <Container fluid>
        <HomePage />
      </Container>
      <MyFooter />
    </div>
  );
}

export default App;
