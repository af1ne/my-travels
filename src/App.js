import React, { Component } from 'react';
import logo from './logo.svg';
//import image1 from './images/wellington.jpg';
//import image2 from './images/chateau_porte.jpg';
import './App.css';

import Travels from "./Travels";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to My Travels</h1>
        </header>
        <Travels
          /*destination="Wellington"
          country="Nouvelle-Zélande"
          photo={image1}
          distance="A 18 974 km de Paris"*/
        />

      </div>
    );
  }
}

export default App;
