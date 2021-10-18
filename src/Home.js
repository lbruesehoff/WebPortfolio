import React, { Component } from 'react';
import Banner from './components/Banner/Banner';
import About from './components/AboutMe/AboutMe';
import Intrested from './components/Intrested/Intrested'
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Home extends Component {
  render() {
    return (
      <div>
        <Banner />
        <About/>
        <Intrested/>
      </div>
    )
  }
}
