import React, { Component } from 'react';
import { CookiesProvider, withCookies, Cookies } from 'react-cookie';
import { Link } from 'react-router-dom'

export default class RemoveEntry extends Component {

  constructor() {
   super();
   this.removeEntry = this.removeEntry.bind(this);
   this.state = {
    value: 'delete',
   };
  }

  change = (event) => {
    this.setState({ value: event.target.value});
  };

  removeEntry() {
    var remove = this.state.value;
    if (remove != 'delete') {
      const cookies = new Cookies();
      var entries = cookies.get('entries');
      var element;
      entries.map
        (elem => elem != null && (elem.name == remove && (element = elem)))
      var value = entries.indexOf(element);
      delete entries[value];
      entries = entries.filter(function(x) { return x !== null });
      var cookieDate = new Date;
      cookieDate.setFullYear(cookieDate.getFullYear( ) +5);
      cookies.set('entries', JSON.stringify(entries), { path: '/', expires: cookieDate });
    } else {
      alert('No entry removed');
    }
  }


  render() {
      const cookies = new Cookies();
      var entries = cookies.get('entries');
      if (entries == 'undefined' || entries == null) {
        entries = [];
      }
      return(
        <div>
          <p>In this view you can remove entries which will be also deleted from your cookies.</p>
            <section className="webdesign-workshop">
              <select id="dropdown" onChange={this.change} value={this.state.value}>
                <option value="delete">Delete entry</option>
                {
                  entries.map(elem => elem != null && <option value={elem.name}>{elem.name}</option>)
                }
              </select>
              <Link to='/'><button className="" onClick={this.removeEntry}>Remove Entry</button></Link>
            </section>
        </div>
      );
  }
}
