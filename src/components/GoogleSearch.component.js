import React, { Component } from 'react';

export default class GoogleSearch extends Component {
  render() {
    return (
      <form action="http://www.google.com/search" class="searchform" method="get" name="searchform" target="_blank">
        <input ref={(input) => { this.nameInput = input; }} autocomplete="on" class="form-controls search" name="q" placeholder="Search Google..." size="40" type="text" autofocus/>
        <button class="button" type="submit">Search</button>
      </form>
    );
  }

  componentDidMount(){
   this.nameInput.focus();
}
}
