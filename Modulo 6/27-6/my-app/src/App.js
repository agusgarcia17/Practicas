import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {

    //let saludo = 'Hello Mundo'; 
    let frutas = ['Anana', ' Manzana', ' Banana', 'Melon', 'Sandia']


    return (
      
/*
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro"> {saludo}
        </p>
      </div>

      */
        <select>
          {frutas.map(function(value, index){
            return <option value = {index}>{value}</option>
          })}
          </select>
    );
  }
}

export default App;

