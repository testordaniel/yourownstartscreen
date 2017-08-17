import React, { Component } from 'react';
import './GoogleSearchbar.component.css';

export default class AmazonSearch extends Component {
  render() {
    return (
      <section className="webdesigntuts-workshop">
        <form action="https://www.amazon.de/s" class="searchform" method="get" name="searchform" target="_blank">
          <input ref={(input) => { this.nameInput = input; }} autocomplete="on" style={styleSearch} class="form-controls search" name="field-keywords" placeholder="Search Amazon..." size="50" type="text" autofocus/>
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
  marginTop: 10,
  boxSizing: "border-box"
}
