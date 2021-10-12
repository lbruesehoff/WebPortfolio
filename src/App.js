import React, { Component } from 'react';
import './App.css';
import './components/Navbar/Navbar.css'
import NavbarComp from "./components/Navbar/NavbarComp";
import Banner from './components/Banner/Banner';
import About from './components/AboutMe/AboutMe';
import Intrested from './components/Intrested/Intrested'
import Footer from './components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <NavbarComp />
      <Banner />
      <About/>
      <Intrested/>
      <Footer/>
    </div>
  );
}

export default App;

