import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Entry from './components/Entry.component.js';
import GoogleSearch from './components/GoogleSearch.component.js';
import AmazonSearch from './components/AmazonSearch.component.js';
import Navbar from './components/Navbar.component.js';

class App extends Component {

  componentDidMount() {
    document.title = "Your own start screen";
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Navbar></Navbar>
          <h2>Welcome to your own start screen</h2>
          <GoogleSearch></GoogleSearch>
          <AmazonSearch></AmazonSearch>

        </div>
        <div style={styleBody}>
          <Entry link="https://github.com/" name="Github" icon="https://www.github.com/favicon.ico"></Entry>
          <Entry link="https://www.facebook.com/" name="Facebook" icon="https://www.facebook.com/favicon.ico"></Entry>
          <Entry link="https://www.youtube.com/" name="Youtube" icon="https://www.youtube.com/favicon.ico"></Entry>
          <Entry link="https://www.stackoverflow.com/" name="Stackoverflow" icon="https://www.stackoverflow.com/favicon.ico"></Entry>
          <Entry link="https://www.amazon.de/" name="Amazon" icon="https://www.amazon.de/favicon.ico"></Entry>
        </div>
      </div>
    );
  }
}

var styleBody = {
  marginTop: 30
}


export default App;
