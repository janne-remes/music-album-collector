import React, { Component } from 'react';
import Header from './components/Header.js';
import MainWindow from './components/MainWindow';
import DataManager from './components/DataManager';

//import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

function App() {
  DataManager.InitDataManager()
    
    return (
      <div className="container">
        <div className="App">
          <Header/>
          <MainWindow datamanager = {DataManager}/>
        </div>
      </div>
    );
  }

export default App;
