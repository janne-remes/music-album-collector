import React, { Component } from 'react'
import MusicAlbumContainerData from './MusicAlbumContainerData'
import MusicAlbumContainerImage from './MusicAlbumContainerImage'

export class MusicAlbumContainer extends Component {
    
    constructor() {
        super()
    
        this.state = {
             showFull: false
        }
    }

    headerClicked = () => {
        var { showFull } = this.state;
        this.setState({ showFull : !showFull })
    }
    
    
    render() {
        var album = this.props.album
        
        return (
            
            <div>
                <div className = "MusicAlbumContainerHeader" onClick={() => this.headerClicked()}>
                    {album.albumName}
                </div>
                
                {
                    this.state.showFull?
                    <div>
                        <MusicAlbumContainerData album = {this.props.album} />
                        <MusicAlbumContainerImage album = {this.props.album} />
                    </div>
                    :null
                }
            </div>
        )
    }
}

export default MusicAlbumContainer
