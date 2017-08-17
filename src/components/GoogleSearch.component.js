import React, { Component } from 'react';
import './GoogleSearchbar.component.css';

export default class GoogleSearch extends Component {
  render() {
    return (
      <section className="webdesigntuts-workshop">
        <form action="https://www.google.com/search" method="get" name="searchform" target="_blank">
          <input ref={(input) => { this.nameInput = input; }} autocomplete="on" style={styleSearch} name="q" placeholder="Search Google..." size="50" type="text" autofocus/>
          <button class="button" type="submit">Search</button>
        </form>
      </section>
    );
  }

  componentDidMount(){
   this.nameInput.focus();
}
}

var styleSearch = {
  maxWidth: 250,
  boxSizing: "border-box",

}
