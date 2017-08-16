import React, { Component } from 'react';

export default class AmazonSearch extends Component {
  render() {
    return (
      <form action="https://www.amazon.de/s" class="searchform" method="get" name="searchform" target="_blank">
        <input ref={(input) => { this.nameInput = input; }} autocomplete="on" style={styleSearch} class="form-controls search" name="field-keywords" placeholder="Search Amazon..." size="50" type="text" autofocus/>
        <button class="button" type="submit">Search</button>
      </form>
    );
  }

  componentDidMount(){
   this.nameInput.focus();
}
}

var styleSearch = {
  maxWidth: 250,
  marginTop: 10,
}
