import React, { Component } from 'react';
import './css/AddSearchbar.component.css';
import './css/Main.component.css';

export default class AddSearchbar extends Component {

  render() {
    return(
      <div>
        <p>In this view you can add new searchbars which will be saved in your cookies.</p>
        <div className="createSearchbarForm">
          <section className="webdesign-workshop">
                <input type="text" placeholder="Insert the name of searchbar here." size="30"/>
                <input type="text" placeholder="Insert the link of searchbar here." size="30"/>
                <input type="text" placeholder="Insert the parameter of searchbar here." size="30"/>
                <button className="createSearchbarFormButton">Add Searchbar</button>
            </section>
        </div>

      </div>
    );
  }
}
