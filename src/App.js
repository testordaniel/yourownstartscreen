import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Entry from './components/Entry.component.js';
import Searchbar from './components/Searchbar.component.js';
import Navbar from './components/Navbar.component.js';
import Heading from './components/Heading.component.js';
import Main from './components/Main.component.js';
import About from './components/About.component.js';
import Login from './components/Login.component.js';
import AddSearchbar from './components/AddSearchbar.component.js';

class App extends Component {

  componentDidMount() {
    document.title = "Your own start screen";
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Navbar></Navbar>
        </div>
        <div>
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route exact path='/contact' component={Main}/>
          <Route path='/about' component={About}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/addSearchbar' component={AddSearchbar}/>
        </Switch>
        </div>
      </div>
    );
  }
}

export default App;
