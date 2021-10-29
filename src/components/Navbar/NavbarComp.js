import React, { Component } from 'react';
import {Container,Nav} from 'react-bootstrap';
import {Link} from "react-router-dom";
import './Navbar.css'
import Navbar from 'react-bootstrap/Navbar';
import logoNav from './logo.svg';

export default class NavbarComp extends Component {
  render() {
    return (
        <div>
          <Navbar collapseOnSelect expand="md" >
            <Container>
            <Navbar.Brand href="#home">
              <a href="/"><img src={logoNav} /></a>
            </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link eventKey="1" as={Link} to="/">Home</Nav.Link>
                  <Nav.Link eventKey="2" as={Link} to="../../Portfolio">Portfolio</Nav.Link>
                  <Nav.Link eventKey="3" as={Link} to="../../Contact">Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
              </Container>
          </Navbar>
        </div>
    )
  }
}
