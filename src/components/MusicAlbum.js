import React, { Component } from 'react';

class MusicAlbum extends Component {
    constructor() {
        super()
    
        this.state = {
             albumName: "Toxicity",
             performerName: "System of a Down",
             genre: "Alternative metal",
             yearPublished: 2001
        }
    }
    
    //constructor(albumName, performerName, genre, yearPublished){
    //    this.albumName = albumName;
    //    this.performerName = performerName;
    //    this.genre = genre;
    //    this.yearPublished = yearPublished;
    //};

    //const albumOme = new MusicAlbum("Toxicity", "System of a Down", "Alternative metal", 2001);
    
    render() {

        return (
            <div>
                <h3 className="details">Album name: <span className="details details-bolded">{this.state.albumName}</span></h3>
                <h3 className="details">Performer: <span className="details details-bolded">{this.state.performerName}</span></h3>
                <h3 className="details">Genre: <span className="details details-bolded">{this.state.genre}</span></h3>
                <h3 className="details">Year Published: <span className="details details-bolded">{this.state.yearPublished}</span></h3>
            </div>
        );
    }
}

export default MusicAlbum;
