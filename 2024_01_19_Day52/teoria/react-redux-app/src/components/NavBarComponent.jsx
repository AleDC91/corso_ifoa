import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default function NavBarComponent() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand><Link to="/" className="nav-link">React Readux App</Link></Navbar.Brand>
        <Nav className="me-auto">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/users" className="nav-link">Users</Link>
          </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
