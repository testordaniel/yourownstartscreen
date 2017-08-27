import React, { Component } from 'react';
import Entry from './Entry.component.js';

export default class EntryContent extends Component {

  render() {
    const entries = this.props.content;
    if (entries != null) {
      return(
        <div>
        <label>Favorite entries</label>
          {
            entries.map
            (elem => <Entry name={elem.name} link={elem.link} icon={elem.icon}/>)
          }
        </div>
      );
    } else {
      return(false);
    }
  }

}
