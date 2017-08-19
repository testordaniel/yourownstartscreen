import React, { Component } from 'react';

export default class Entry extends Component {
  render() {
    return (
      <div style={styleEntry}>
        <a href={this.props.link} target="_blank" alt={this.props.link} style={styleName}>
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
  marginTop: 15
}

var styleName = {
  color: '#000000',
  textDecoration: 'none',
  fontWeight: 'bold'
}
