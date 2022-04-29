import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './Navigation.css'
import logo from "../../images/Ergo-logo.png";

const Navigation = () => {
    return (
      <Navbar
      collapseOnSelect
      expand="lg"
      sticky="top"
      bg=""
      
    >
      <Container>
        <Navbar.Brand href="/home">
          <img
            src={logo}
            className="d-inline-block align-top w-50 mt-2"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="main-nav">
          <Nav.Link className="nav-item1" as={HashLink} to="/home">
            Home
          </Nav.Link>
          <Nav.Link className="nav-item" as={HashLink} to="/items">
            Items
          </Nav.Link>
          <Nav.Link className="nav-item" as={HashLink} to="/about">
            AboutMe
          </Nav.Link>
          <Nav.Link className="nav-item" as={HashLink} to="/contacts">
            Contact
          </Nav.Link>
          <Nav.Link className="nav-item" as={HashLink} to="/blogs">
            Blogs
          </Nav.Link>
          <Nav.Link className="nav-item ms-auto" as={HashLink} to="/logIn">
            LogIn
          </Nav.Link>
         {/* { 
            user?.email ? 
            <>
            <p className="user_display_name">{user.displayName|| user.email}</p>
            
            <button className="border-0 bg-light nav-item" onClick={handleSignOut}>SignOut</button>
            </>
            :
         <Nav.Link className="nav-item" as={HashLink} to="/logIn">
            LogIn
          </Nav.Link>
          
          } */}
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Navigation;