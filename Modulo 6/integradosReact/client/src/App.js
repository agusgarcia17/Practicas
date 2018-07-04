import React, { Component } from 'react';
import Header from './components/header';
import Card from './components/card';
import Skills from './components/skills';
import './css/app.css';

class App extends Component {
  render() {
    return (
      <div className="mainContainer">
          <Header/>
          <Card/>
          <h1 className="title"> SKILLS </h1>
          <Skills/>

      </div>
    );
  }
}

export default App;
