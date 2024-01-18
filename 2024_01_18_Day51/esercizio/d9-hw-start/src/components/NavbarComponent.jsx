import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function NavbarComponent() {
  return (
    <Navbar>
    <Container>
      <Navbar.Brand><Link to="/" className="nav-link">Find a Job</Link></Navbar.Brand>
      <Nav className="me-auto">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/favourites" className="nav-link">Favourites</Link>
        </Nav>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
         Logout
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
