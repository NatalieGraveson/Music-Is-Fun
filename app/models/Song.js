export default class Song {
    constructor(song) {
        this.title = song.trackName
        //Change 250x250 if you want a larger image
        this.albumArt = song.artworkUrl60.replace(/60x60/g, "250x250")
        this.artist = song.artistName
        this.collection = song.collectionName
        this.price = song.collectionPrice
        this.preview = song.previewUrl
    }

    getTemplate() {
        return `
        <div class="col-12 col-md-6 col-lg-3">
         <div class="card text-white bg-outline-light">
            <img src="${this.albumArt}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${this.title}</h5>
                     <h6>${this.artist}</h6>
                    <h6>${this.collection}</h6>
                    <h6>${this.price}</h6>
                    <audio controls>
                    <source src="${this.preview}" type="audio/mpeg">
                    </audio>
                </div>
</div>
</div>
`
    }
}