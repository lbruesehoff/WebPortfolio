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
            <Route exact component={Home} path={"/"}/>

            <Route path="/Portfolio" component={Portfolio}/>
         
            <Route path="/Contact" component={Contact}/> 
          </Switch>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;

