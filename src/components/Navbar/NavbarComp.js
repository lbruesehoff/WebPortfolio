import React, { Component } from 'react';
import {Container,Nav} from 'react-bootstrap';
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
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="../../Portfolio">Portfolio</Nav.Link>
                  <Nav.Link href="../../Contact">Contact Me</Nav.Link>
                </Nav>
              </Navbar.Collapse>
              </Container>
          </Navbar>
        </div>
    )
  }
}
