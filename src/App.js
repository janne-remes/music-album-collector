import React, { Component } from 'react';
import Header from './components/Header.js';
import MainWindow from './components/MainWindow';

//import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="App">
          <Header/>
          <MainWindow/>
        </div>
      </div>
    );
  }
}

export default App;
