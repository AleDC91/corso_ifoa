import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import NavbarComponent from "./Components/NavbarComponent";
import DetailPage from "./pages/DetailPage";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <BrowserRouter>
        <Container>
          <NavbarComponent />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
