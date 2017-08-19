import React, { Component } from 'react';
import './Searchbar.component.css';

export default class Searchbar extends Component {
  render() {
    return (
      <section className="webdesigntuts-workshop">
        <form action={this.props.site} method="get" name="searchform" target="_blank">
          <input ref={(input) => { this.nameInput = input; }} autocomplete="on" style={styleSearch} name={this.props.parameter} placeholder={this.props.name} size="50" type="text" autofocus/>
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
