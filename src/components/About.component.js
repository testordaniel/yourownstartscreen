import React, { Component } from 'react';
import './css/About.component.css';
import AboutEntry from './AboutEntry.component.js';
import FirstTime from './FirstTime.component.js';

export default class About extends Component {
  render() {
    return(
      <div className="about">
        <h3 className="heading">Your own start screen</h3>
          <p className="text">Wouldnt  it be cool to see all your favourite websites on your start screen when you open your browser? Customizing your screen and navigate
          faster to your desired websites. Or maybe look up specific entries directly on your start screen with integrated search bars for example with Google, Amazon or Youtube.
          Of course you can also customize this search bars or add one of the predefined search bars.</p>
        <h3 className="subheading">So why should i use Your own start screen?</h3>
          <p>
            <ul>
                <AboutEntry name="Fast navigation" location="right" text="Once you have customized your start screen you can navigate instantly to your desired website. Additionally, the navigation within website is very fast, because no communication to a server is required."/>
                <AboutEntry name="Overview" location="left" text="By starting your browser you will have an well-structured overview of all your linked entries, by separating the search content from the entry content."/>
                <AboutEntry name="Locally saved" location="right" text="Because there is no server used to host this website, all your information will be saved on your computer and won't be sent through the Internet"/>
            </ul>
          </p>
      </div>
    );
  }

}
