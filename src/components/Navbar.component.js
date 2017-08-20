import React, { Component} from 'react';
import { Link } from 'react-router-dom'
import './css/Navbar.component.css';
import Heading from './Heading.component.js';

export default class Navbar extends Component{

  render() {
    return(
      <div className="topnav" id="myTopnav">
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/contact'>Contact</Link>
            <Link to={{ pathname: '/about'}}>About</Link>
            <Link to='/login' className="login" style={{float: 'right'}}>Login</Link>
        </nav>
      </div>
    );
  }
}
