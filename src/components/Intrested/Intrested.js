import React, { Component } from 'react'
import './Intrested.css';
import {Link} from "react-router-dom";

export default class Intrested extends Component {
  render() {
    return (
      <div className="intrestContent">

        <h1>Intrested in collaborating on a project?</h1>

        <Link to="../../Contact">
          <button>Contact Me</button>
        </Link>
        
      </div>
    )
  }
}
