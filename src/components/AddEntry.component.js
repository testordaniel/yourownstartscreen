import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CookiesProvider, withCookies, Cookies } from 'react-cookie';

export default class AddEntry extends Component{

  constructor() {
    super();
    this.addEntry = this.addEntry.bind(this);
  }

  imageExists(image_url){

    var http = new XMLHttpRequest();

    http.open('HEAD', image_url, false);
    http.send();

    return http.status != 404;

}

  addEntry() {
      if (this.refs.link.value != '') {
        var entries = [];
        var entry = new Object();
        entry.name = this.refs.name.value;
        entry.link = this.refs.link.value;
        if(!entry.link.includes("https:") || !entry.link.includes("http")) {
          entry.link = "https://" + entry.link;
        }
        if (entry.name == '') {
          var firstPosition = entry.link.indexOf(".") + 1;
          var lastPosition = entry.link.lastIndexOf(".");
          if (firstPosition > lastPosition) {
            firstPosition = 8;
          }
          entry.name = entry.link.substring(firstPosition, lastPosition);
          entry.name = entry.name.charAt(0).toUpperCase() + entry.name.slice(1);
        }

        var iconLink = entry.link.replace("https://", "");
        iconLink = iconLink.replace("http://", "");
        iconLink = iconLink.replace("www.","");
        var icon = "https://www.google.com/s2/favicons?domain=" + iconLink;
        entry.icon = icon;



        const cookies = new Cookies();
        entries = cookies.get('entries');
        if (entries == 'undefined' || entries == null) {
          entries = [];
        }
        entries.push(entry);
        var cookieDate = new Date;
        cookieDate.setFullYear(cookieDate.getFullYear( ) +5);
        cookies.set('entries', JSON.stringify(entries), { path: '/', expires: cookieDate });
    } else  {
        alert('The link field has to be filled!');
    }
  }

  componentDidMount(){
    this.refs.name.focus();
  }


  render() {
    return(
      <div>
      <p>In this view you can add new entries which information will be saved locally in your cookies.</p>
        <div>
          <section className="webdesign-workshop">
                <input type="text" ref="name" placeholder="Name of entry (optional)" size="30"/>
                <input type="text" ref="link" placeholder="Link of entry" size="30"/>
                <Link to='/'><button className="createSearchbarFormButton" onClick={this.addEntry}>Add Entry</button></Link>
            </section>
        </div>
      </div>
    );
  }

}
