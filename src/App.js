import React, { Component } from 'react';
import './App.css';
import './components/Navbar/Navbar.css'
import NavbarComp from "./components/Navbar/NavbarComp";
import Banner from './components/Banner/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <NavbarComp />
      <Banner />
    </div>
  );
}

export default App;

