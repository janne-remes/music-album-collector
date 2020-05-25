import React, { Component } from 'react'

export class MusicAlbumContainerImage extends Component {
    render() {
        var album = this.props.album
        
        return (
            <div>
                <img src = {album.coverURL}/>
            </div>
        )
    }
}

export default MusicAlbumContainerImage
