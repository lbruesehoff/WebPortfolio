import React, { Component } from 'react';
import {Container,Nav} from 'react-bootstrap';
import './Navbar.css'
import Navbar from 'react-bootstrap/Navbar';
import logoNav from './logo.svg';




export default class NavbarComp extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="md" >
      <Container className="container">
      <Navbar.Brand href="#home">
        <img src={logoNav}
        />
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#contact">Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}
