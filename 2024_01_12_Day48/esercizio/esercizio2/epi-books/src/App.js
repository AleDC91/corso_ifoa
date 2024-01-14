import MyNav from "./components/MyNav";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import Container from "react-bootstrap/esm/Container";
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
