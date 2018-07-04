import React, { Component } from 'react';
import Header from './components/header';
import Card from './components/card';
import Skills from './components/skills';
import Education from './components/education';
import Repositories from './components/repositories';
import './css/app.css';

class App extends Component {
  render() {
    return (
      <div className="mainContainer">
          <Header/>
          <Card/>
          <h1 className="title"> SKILLS </h1>
          <Skills/>
          <h1 className="title2" id="ed"> EDUCATION </h1>
          <Education/>
          <h1 className="title3" id="ed"> REPOSITORIES </h1>
          <Repositories/>
      </div>
    );
  }
}

export default App;
