import React, { Component } from 'react'
import MusicAlbum from './MusicAlbum.js';

export class DataManager extends Component {
    
    render() {
        
        var musicAlbumCollection = [];

        function InitDataManager(album, performer, genre, year, cover){
            musicAlbumCollection.push(new MusicAlbum(album, performer, genre, year, cover))
        }

        InitDataManager("Toxicity", "System of a Down", "Alternative metal", 2001, "https://upload.wikimedia.org/wikipedia/en/6/64/SystemofaDownToxicityalbumcover.jpg")
        InitDataManager("Master of Puppets", "Metallica", "Thrash metal", 1986, "https://upload.wikimedia.org/wikipedia/en/b/b2/Metallica_-_Master_of_Puppets_cover.jpg")
        InitDataManager("Kun Suomi putos puusta", "Ismo Alanko", "Rock", 1990, "https://upload.wikimedia.org/wikipedia/fi/e/ed/Suomiputos.jpg")

        console.log(musicAlbumCollection);
        
        return (
            <div>
                <h3 className="details">Albumin nimi:</h3>
                <h3 className="details">Esittäjä:</h3>
                <h3 className="details">Genre:</h3>
                <h3 className="details">Julkaisuvuosi:</h3>
            </div>
        )
    }
}

export default DataManager;


