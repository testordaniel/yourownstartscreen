import React, { Component} from 'react';
import './Navbar.component.css';

export default class Navbar extends Component{

  render() {
    return(
      <ul className="nav">
        <li>About</li>
        <li>Login</li>
      </ul>
    );
  }
}
