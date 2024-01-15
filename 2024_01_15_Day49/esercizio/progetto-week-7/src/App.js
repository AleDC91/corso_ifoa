import NavbarComponent from "./components/NavbarComponent";
import "./App.css";
import FooterComponent from "./components/FooterComponent";
import SettingsPageComponent from "./pages/SettingsPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import TVShowsPage from "./pages/TVShowsPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavbarComponent />
        </header>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/tv-shows" element={<TVShowsPage />} />
          <Route path="*" element={<PageNotFound />}></Route>
          <Route path="/movie-details/:movieId" element={<MovieDetailsPage />} />
          /movie-details/:movieId
        </Routes>

        <footer>
          <FooterComponent />
        </footer>
      </div>
    </Router>
  );
}

export default App;
