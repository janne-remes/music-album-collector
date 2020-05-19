import React, { Component } from 'react';
import MusicAlbum from './components/MusicAlbum';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="App">
          <MusicAlbum/>
        </div>
      </div>
    );
  }
}

export default App;
