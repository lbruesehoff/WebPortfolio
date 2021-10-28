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
                  <Link to="/">Home</Link>
                  <Link to="../../Portfolio">Portfolio</Link>
                  <Nav.Link href="../../Contact">Contact Me</Nav.Link>
                </Nav>
              </Navbar.Collapse>
              </Container>
          </Navbar>
        </div>
    )
  }
}
