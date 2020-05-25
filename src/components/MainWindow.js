import React, { Component } from 'react';
import MusicAlbum from './MusicAlbum';
import DataManager from './DataManager';
import MusicAlbumContainer from './MusicAlbumContainer'

import './MainWindow.css'

class MainWindow extends Component {
    
    
    render() {
        return (
            <div>
                <MusicAlbumContainer album={DataManager.musicAlbumCollection[0]}/>
                <MusicAlbumContainer album={DataManager.musicAlbumCollection[1]}/>
                <MusicAlbumContainer album={DataManager.musicAlbumCollection[2]}/>
            </div>
        )
    }
}

export default MainWindow
