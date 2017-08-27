import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { CookiesProvider, withCookies, Cookies } from 'react-cookie';
import './App.css';
import Entry from './components/Entry.component.js';
import Searchbar from './components/Searchbar.component.js';
import Navbar from './components/Navbar.component.js';
import Heading from './components/Heading.component.js';
import Main from './components/Main.component.js';
import About from './components/About.component.js';
import Login from './components/Login.component.js';
import AddSearchbar from './components/AddSearchbar.component.js';
import RemoveSearchbar from './components/RemoveSearchbar.component.js';
import AddEntry from './components/AddEntry.component.js';
import RemoveEntry from './components/RemoveEntry.component.js';

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
        <CookiesProvider>
        <Switch>
          <Route exact path='/about' component={About}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/addSearchbar' component={AddSearchbar}/>
          <Route exact path='/removeSearchbar' component={RemoveSearchbar}/>
          <Route exact path='/addEntry' component={AddEntry}/>
          <Route exact path='/removeEntry' component={RemoveEntry}/>
          <Route path='/' component={Main}/>
        </Switch>
        </CookiesProvider>
        </div>
      </div>
    );
  }
}

export default App;
