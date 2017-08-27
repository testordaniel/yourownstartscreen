import React, { Component } from 'react';
import './css/Entry.component.css';

export default class Entry extends Component {
  render() {
    return (
      <div style={styleEntry}>
        <a href={this.props.link} target="_blank" alt={this.props.link} className="no-underline">
        <img src={this.props.icon} className="divStyle"/>
        <p>{this.props.name}</p>
        </a>
      </div>
    );
  }
}

var styleEntry = {
  display: 'inline-block',
  marginLeft: 15,
  marginRight: 15,
  marginTop: 25,
}
