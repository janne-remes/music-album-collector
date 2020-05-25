import MusicAlbum from './MusicAlbum.js';

var musicAlbumCollection = [];

        function InitDataManager(){
            
            var albumOne = new MusicAlbum(
                "Toxicity",
                "System of a Down",
                "Alternative metal",
                2001,
                "https://upload.wikimedia.org/wikipedia/en/6/64/SystemofaDownToxicityalbumcover.jpg")

            var albumTwo = new MusicAlbum(
                "Master of Puppets",
                "Metallica",
                "Thrash metal",
                1986,
                "https://upload.wikimedia.org/wikipedia/en/b/b2/Metallica_-_Master_of_Puppets_cover.jpg")

            var albumThree = new MusicAlbum(
                "Kun Suomi putos puusta",
                "Ismo Alanko",
                "Rock",
                1990,
                "https://upload.wikimedia.org/wikipedia/fi/e/ed/Suomiputos.jpg")
            
            musicAlbumCollection.push(albumOne, albumTwo, albumThree)
        }

export default {musicAlbumCollection, InitDataManager};


