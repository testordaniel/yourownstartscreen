import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/Edit.component.css';

export default class Edit extends Component {

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
    if(this.props.type == 'search') {
      if(width >= 550) {
        return(
          <div>
            <Link to='/addSearchbar'><span className="editSearchbar add pc search">+</span></Link>
            <Link to='/removeSearchbar'><span className="editSearchbar remove pc search">-</span></Link>
          </div>
        );
      } else {
        return(
          <div>
            <Link style={{textDecoration: 'none'}} to='/addSearchbar'><span className="editSearchbar addMobile mobile search">+</span></Link>
            <Link style={{textDecoration: 'none'}} to='/removeSearchbar'><span className="editSearchbar removeMobile mobile search">-</span></Link>
          </div>
        );
      }
    } else {
      if(width >= 550) {
        return(
          <div>
            <Link to='/addEntry'><span className="editSearchbar add pc entry">+</span></Link>
            <Link to='/removeEntry'><span className="editSearchbar remove pc entry">-</span></Link>
          </div>
        );
      } else {
        return(
          <div>
            <Link style={{textDecoration: 'none'}} to='/addEntry'><span className="editSearchbar addMobile mobile entry">+</span></Link>
            <Link style={{textDecoration: 'none'}} to='/removeEntry'><span className="editSearchbar removeMobile mobile entry">-</span></Link>
          </div>
        );
      }
    }
  }
}
