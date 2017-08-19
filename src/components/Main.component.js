import React, { Component } from 'react';
import Entry from './Entry.component.js';
import Searchbar from './Searchbar.component.js';
import Heading from './Heading.component.js';
import './Main.component.css';

export default class Main extends Component {

render() {
  var entries = [
    {"name":"Github", "link":"https://github.com/", "icon":"https://www.github.com/favicon.ico"},
    {"name":"Facebook", "link":"https://www.facebook.com/", "icon":"https://www.facebook.com/favicon.ico"},
    {"name":"Youtube", "link":"https://www.youtube.com/", "icon":"https://www.youtube.com/favicon.ico"},
    {"name":"Stackoverflow", "link":"https://www.stackoverflow.com/", "icon":"https://www.stackoverflow.com/favicon.ico"},
    {"name":"Amazon", "link":"https://www.amazon.de/", "icon":"https://www.amazon.de/favicon.ico"},
  ];

  var searchbars = [
    {"name":"Google", "site":"https://www.google.com/search", "parameter":"q"},
    {"name":"Amazon", "site":"https://www.amazon.de/s", "parameter":"field-keywords"},
    {"name":"Youtube", "site":"https://www.youtube.com/results", "parameter":"search_query"},
    {"name":"Google", "site":"https://www.google.com/search", "parameter":"q"},
    {"name":"Amazon", "site":"https://www.amazon.de/s", "parameter":"field-keywords"},
    {"name":"Google", "site":"https://www.google.com/search", "parameter":"q"},
    {"name":"Amazon", "site":"https://www.amazon.de/s", "parameter":"field-keywords"},
    {"name":"Youtube", "site":"https://www.youtube.com/results", "parameter":"search_query"},

  ]

  return (
      <div>
        <div className="blurred-bg">
          <Heading/>
          {
            searchbars.map
              (elem => <Searchbar name={elem.name} site={elem.site} parameter={elem.parameter}/>)
          }
        </div>
        <hr/>
        <div>
          {
            entries.map
            (elem => <Entry name={elem.name} link={elem.link} icon={elem.icon}/>)
          }
        </div>
      </div>
   );
}
}
