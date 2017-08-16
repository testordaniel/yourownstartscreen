import React, { Component} from 'react';
import './Navbar.component.css';

export default class Navbar extends Component{

  render() {
    return(
      <div className="topnav" id="myTopnav">
        <a href="#home">Home</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <a className="login" href="#login" style={{float: 'right'}}>Login</a>
      </div>
    );
  }
}
