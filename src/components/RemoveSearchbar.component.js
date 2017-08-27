import React, { Component } from 'react';
import './css/AddSearchbar.component.css';
import './css/Main.component.css';
import { CookiesProvider, withCookies, Cookies } from 'react-cookie';
import { Link } from 'react-router-dom'



export default class RemoveSearchbar extends Component {
  constructor() {
   super();
   this.removeBar = this.removeBar.bind(this);
   this.state = {
    value: 'delete',
   };
  }

  change = (event) => {
    this.setState({ value: event.target.value});
  };

  removeBar() {
    var foo = this.state.value;
    if (foo != 'delete') {
      const cookies = new Cookies();
      var searchbars = cookies.get('searchbars');
      var element;
      searchbars.map
        (elem => elem != null && (elem.name == foo && (element = elem)))
      var value = searchbars.indexOf(element);
      delete searchbars[value];
      searchbars = searchbars.filter(function(x) { return x !== null });
      var cookieDate = new Date;
      cookieDate.setFullYear(cookieDate.getFullYear( ) +5);
      cookies.set('searchbars', JSON.stringify(searchbars), { path: '/', expires: cookieDate });
    } else {
      alert('No searchbar removed');
    }
  }

  render() {

    const cookies = new Cookies();
    var searchbars = cookies.get('searchbars');
    if (searchbars == 'undefined' || searchbars == null) {
      searchbars = [];
    }
    return(
      <div>
        <p>In this view you can remove searchbars which will be also deleted from your cookies.</p>
          <section className="webdesign-workshop">
            <select id="dropdown" onChange={this.change} value={this.state.value}>
              <option value="delete">Delete search bar</option>
              {
                searchbars.map(elem => elem != null && <option value={elem.name}>{elem.name}</option>)
              }
            </select>
            <Link to='/'><button className="" onClick={this.removeBar}>Remove search bar</button></Link>
          </section>
      </div>
    );
  }
}
