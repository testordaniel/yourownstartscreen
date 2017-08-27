import React, { Component } from 'react';
import './css/AddSearchbar.component.css';
import './css/Main.component.css';
import { CookiesProvider, withCookies, Cookies } from 'react-cookie';
import { Link } from 'react-router-dom'


export default class AddSearchbar extends Component {
  constructor() {
   super();
   this.addBar = this.addBar.bind(this);
   this.addPredefinedBar = this.addPredefinedBar.bind(this);
   this.state = {
    value: 'delete',
   };

 }

  change = (event) => {
   this.setState({ value: event.target.value});
  };

  addPredefinedBar() {
    var predefined = [
      {"name":"Google", "link":"https://www.google.com/search", "parameter":"q"},
      {"name":"Amazon", "link":"https://www.amazon.de/s", "parameter":"field-keywords"},
      {"name":"Youtube", "link":"https://www.youtube.com/results", "parameter":"search_query"},
    ];
    var foo = this.state.value;
    const cookies = new Cookies();
    var searchbars = cookies.get('searchbars');
    if (searchbars == 'undefined' || searchbars == null) {
      searchbars = [];
    }
    var element;
    predefined.map
      (elem => elem != null && (elem.name == foo && (element = elem)))
    var value = predefined.indexOf(element);
    var entry = predefined[value];
    searchbars.push(entry);
    var cookieDate = new Date;
    cookieDate.setFullYear(cookieDate.getFullYear( ) +5);
    cookies.set('searchbars', JSON.stringify(searchbars), { path: '/', expires: cookieDate });
  }

  addBar() {
    if (this.refs.name.value != '' && this.refs.link.value != '' && this.refs.parameter.value != '') {
      var searchbars = [];
      var searchbar = new Object();
      searchbar.name = this.refs.name.value;
      searchbar.link = this.refs.link.value;
      if(!searchbar.link.includes("https:") || !searchbar.link.includes("http")) {
        searchbar.link = "https://" + searchbar.link;
      }
      searchbar.parameter = this.refs.parameter.value;
      const cookies = new Cookies();
      searchbars = cookies.get('searchbars');
      if (searchbars == 'undefined' || searchbars == null) {
        searchbars = [];
      }
      searchbars.push(searchbar);
      var cookieDate = new Date;
      cookieDate.setFullYear(cookieDate.getFullYear( ) +5);
      cookies.set('searchbars', JSON.stringify(searchbars), { path: '/', expires: cookieDate });
  } else  {
      alert('All input fields have to be filled!');
  }
  }


  render() {
    var predefined = [
      {"name":"Google"},
      {"name":"Amazon"},
      {"name":"Youtube"},
    ];
    return(
      <div>
        <p>In this view you can add new searchbars which information will be saved locally in your cookies.</p>
        <div>
          <section className="webdesign-workshop">
            <select onChange={this.change} value={this.state.value}>
              <option value="addPredefined">Predefined search bar</option>
              {
                predefined.map(elem => elem != null && <option value={elem.name}>{elem.name}</option>)
              }
            </select>
            <Link to='/'><button onClick={this.addPredefinedBar} style={{marginBottom: 20}}>Add predefined search bar</button></Link>
          </section>
        </div>

        <div>
          <section className="webdesign-workshop">
            <input type="text" ref="name" placeholder="Name of search bar" size="30"/>
            <input type="text" ref="link" placeholder="Link of search bar" size="30"/>
            <input type="text" ref="parameter" placeholder="Parameter for search bar" size="30"/>
            <Link to='/'><button className="createSearchbarFormButton" onClick={this.addBar}>Add search bar</button></Link>
          </section>
        </div>
      </div>
    );
  }
}
