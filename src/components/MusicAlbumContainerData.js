import React, { Component } from 'react'

export class MusicAlbumContainerData extends Component {
    render() {
        var album = this.props.album
        return (
            <div>
                <h3 className="details">Albumi: <span className="details-bolded">{album.albumName}</span></h3>
                <h3 className="details">Esittäjä: <span className="details-bolded">{album.performerName}</span></h3>
                <h3 className="details">Genre: <span className="details-bolded">{album.genre}</span></h3>
                <h3 className="details">Vuosi: <span className="details-bolded">{album.yearPublished}</span></h3>
            </div>
        )
    }
}

export default MusicAlbumContainerData
