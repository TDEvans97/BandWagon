import React from 'react'
import './style.css'
import brandName from '../../assets/bandwagon-word.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="lg" className='nav'>
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
          <img src={brandName} alt='text' className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/search"}>Search</Nav.Link>
            <Nav.Link as={Link} to={"/mydashboard"}>My Bandwagons</Nav.Link>
            <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default Header;