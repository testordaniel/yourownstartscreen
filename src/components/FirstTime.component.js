import React, { Component } from 'react';
import sample from './Sample.png';
import './css/FirstTime.component.css';

export default class FirstTime extends Component {

  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth});
  };

  render() {
    const { width } = this.state;
    if(this.props.firstTime) {
    if(width >= 500) {
      return(
        <div>
        <h4>You have not created any entries yet. The following picture shows a sample how your start screen could look like.</h4>
        <img className="bord" src={sample}/>
        </div>
      );
    } else {
      return(
        <div>
        <h4>You have not created any entries yet. The following picture shows a sample how your start screen could look like.</h4>
        <img className="bordMobile" src={sample}/>
        </div>
    );
  }
  } else {
    return(false);
  }

  }
}
