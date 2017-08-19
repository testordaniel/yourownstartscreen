import React, { Component} from 'react';

export default class Heading extends Component {

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
    if(width >= 500) {
      return(
        <h3 style={{padding:5}}>Welcome to your own start screen</h3>
      );
    } else if (width >= 348){
      return(
      <h4 style={{padding:5}}>Welcome to your own start screen</h4>
    );
  } else {
      return(
        false
      );
  }
}
}