import React, { Component } from 'react';
import MusicAlbum from './MusicAlbum';
import DataManager from './DataManager';

import './MainWindow.css'

class MainWindow extends Component {
    render() {
        return (
            <div>
                <DataManager/>
            </div>
        )
    }
}

export default MainWindow
