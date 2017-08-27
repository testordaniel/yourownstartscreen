import React, { Component } from 'react';
import Entry from './Entry.component.js';
import Searchbar from './Searchbar.component.js';
import Heading from './Heading.component.js';
import './css/Main.component.css';
import { Link } from 'react-router-dom';
import { CookiesProvider, withCookies, Cookies } from 'react-cookie';
import Edit from './Edit.component.js';
import SearchbarContent from './SearchbarContent.component.js';
import EntryContent from './EntryContent.component.js';
import FirstTime from './FirstTime.component.js';

export default class Main extends Component {

  render() {


    var searchbars = [
      {"name":"Google", "site":"https://www.google.com/search", "parameter":"q"},
      {"name":"Amazon", "site":"https://www.amazon.de/s", "parameter":"field-keywords"},
      {"name":"Youtube", "site":"https://www.youtube.com/results", "parameter":"search_query"},
    ]

    const cookies = new Cookies();
    var search = cookies.get('searchbars');
    if(search == 'undefined' || search == null) {
      search = [];
    }
    var entries = cookies.get('entries');
    var firstTime = false;
    if(entries == 'undefined' || entries == null) {
      entries = [];
      firstTime = true;
    }

      return (
          <div>
            <div className="blur">
            <Heading/>
            <SearchbarContent content={search}/>
            <Edit type="search"/>
            </div>
            <div>
              <EntryContent content= {entries}/>
              <FirstTime firstTime={firstTime}/>
              <Edit type="entry"/>
            </div>
          </div>
       );
  }
}
