import React, { Component } from 'react';
import './App.css';
import NavbarComp from "./components/Navbar/NavbarComp";
import Footer from './components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from './Home';
import Portfolio from './Portfolio';
import Contact from './Contact';


function App() {
  return (
    <BrowserRouter>
      <div>
        <NavbarComp />
        <div className="Content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>

            <Route path="/Portfolio">
              <Portfolio/>
            </Route>

            <Route path="/Contact">
              <Contact/>
            </Route>
          </Switch>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;

