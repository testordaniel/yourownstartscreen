import React, { Component } from 'react';
import Searchbar from './Searchbar.component.js';

export default class SearchbarContent extends Component {

  render() {

    const searchbars = this.props.content;
    if (searchbars != null) {
    return(
      <div>
        <label>Search bars</label>
        {
          searchbars.map
            (elem => elem != null && <Searchbar name={elem.name} site={elem.link} parameter={elem.parameter}/>)
        }
      </div>
    );
  } else {
    return(false);
  }
  }
}
