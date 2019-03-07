<template>
  <div class="row">
    <div class="col">
      <h1></h1>
      <ol>
        <li v-for="song in results" @click='setActiveSong(song)'>{{song.trackName}}</li>
      </ol>
    </div>
    <details-view :song='activeSong' v-if="activeSong.previewUrl"></details-view>
  </div>
</template>

<script>
  import detailsView from '@/components/Details.vue'
  export default {
    name: '',
    data() {
      return {
        activeSong: {}
      }
    },
    //always going and getting current value from state
    computed: {
      results() {
        return this.$store.state.results
      }
    },
    //functions
    methods: {
      setActiveSong(song) {
        this.activeSong = song
      }
    },
    //ability to use other component in these one (as child)
    components: {
      detailsView
    }
  }
</script>