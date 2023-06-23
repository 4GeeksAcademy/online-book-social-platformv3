import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa'; // Import the person icon
import "../../styles/navbar.css";

export const NavbarMenu = () => {
  return (
    <Navbar expand="lg" className="mb-3">
      <Link to="/" className="navbar-brand">
      <img src="https://i.ibb.co/ysDNJkh/Book-Bag-Logo.png" alt="Logo" className="navbar-logo" style={{ width: "100px", height: "115px", marginLeft: "5px" }} />
      </Link>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ml-auto">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/bookcatalog" className="nav-link">Book Catalog</Link>
          <Link to="/discussions" className="nav-link">Book Discussions</Link>
          <Link to="/myprofile" className="nav-link">My Profile</Link>
          <NavDropdown title={<span><FaUser className="nav-icon" /> My Account</span>} id="basic-nav-dropdown">
            <Link to="/signin" className="dropdown-item">Sign In</Link>
            <Link to="/createaccount" className="dropdown-item">Create Account</Link>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};






