import ItunesService from "./itunes-service.js";
//Private
const itunesService = new ItunesService()

function drawSongs(result) {
  //changes button back to GET MUSIC once songs are loaded
  document.querySelector('#get-music-button').textContent = 'GET MUSIC'
  let template = '';
  let music = itunesService.Songs
  music.forEach(song => {
    template += song.getTemplate()
  });
  document.querySelector('#songs').innerHTML = template;
}


//PUBLIC
class ItunesController {
  constructor() {
    itunesService.addSubscriber('songs', drawSongs)
  }


  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    document.querySelector('#get-music-button').textContent = 'LOADING....'
    itunesService.getMusicByArtist(artist)
  }

}


export default ItunesController