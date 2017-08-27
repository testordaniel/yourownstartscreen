import React, { Component } from 'react';

export default class AboutEntry extends Component {

  render() {
    if(this.props.location == "right") {
      return(
        <li className="liEntry" style={{float: "right"}}>
          <h3>{this.props.name}</h3>
          <p>{this.props.text}</p>
        </li>
      );
    } else {
      return(
        <li className="liEntry" style={{float: "left"}}>
          <h3>{this.props.name}</h3>
          <p>{this.props.text}</p>
        </li>
      );
    }
  }
}
