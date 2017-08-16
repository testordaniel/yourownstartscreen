import React, { Component } from 'react';

export default class GoogleSearch extends Component {
  render() {
    return (
      <form action="https://www.google.com/search" class="searchform" method="get" name="searchform" target="_blank">
        <input ref={(input) => { this.nameInput = input; }} autocomplete="on" style={styleSearch} class="form-controls search" name="q" placeholder="Search Google..." size="50" type="text" autofocus/>
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
}
