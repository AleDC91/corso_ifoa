import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBarComponent from './components/NavBarComponent';
import { Container } from 'react-bootstrap';
import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';
import NotFoundPage from './pages/NotFoundPage';
import FooterComponent from './components/FooterComponent';
import NewUserPage from './pages/NewUserPage';
import DetailUser from './pages/DetailUser';

function App() {
  return (
    <BrowserRouter>
      <NavBarComponent />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/new" element={<NewUserPage />} />
          <Route path="/users/:email/info" element={<DetailUser />} />
          <Route path="*" element={<NotFoundPage />} /> 
        </Routes>
      </Container>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
