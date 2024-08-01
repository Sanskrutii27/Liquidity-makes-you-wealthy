import React from 'react';
import './MainNav.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { MdOutlineLogin } from "react-icons/md";
import { FaRegRegistered } from "react-icons/fa6";
import img23 from "../Images/liquidity.png";
import { Link } from 'react-router-dom'; // Import Link from React Router

const MainNav = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top" style={{ height: '95px', marginLeft: '0px'}}>
      <Container>
        <Navbar.Brand href="#home"><img src={img23} width="175.15" height="70" className="d-inline-block align-top" alt="Liquidity logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="MainNav1">
          <Nav className="me-auto" style={{marginLeft:'800px'}}>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/" className="nav-link">About</Link>
            <Link to="/" className="nav-link">Services</Link>
            <Link to="/" className="nav-link">Why Us</Link>
            <Link to="/" className="nav-link">Team</Link>
            <NavDropdown title="Login" id="MainNav2">
              <Link to="/login" className="dropdown-item">
                <MdOutlineLogin color='grey'/>Login
              </Link>
              <NavDropdown.Divider />
              <Link to="/signup" className="dropdown-item">
                <FaRegRegistered color='grey'/>Register
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNav;