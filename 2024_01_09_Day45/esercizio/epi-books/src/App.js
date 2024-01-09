import MyNav from "./components/MyNav";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import Container from "react-bootstrap/esm/Container";

function App() {
  return (
    <div className="App">
      <Container>
        <MyNav />
        <Welcome />
        <AllTheBooks />
        <MyFooter />
      </Container>
    </div>
  );
}

export default App;
