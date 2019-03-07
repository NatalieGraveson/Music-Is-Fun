<template>
  <div class="details col-7 yellow">
    <h1>{{song.trackName}}</h1>
    <img :src="song.artworkUrl60" alt="">
    <audio controls>
      <source :src="song.previewUrl">
    </audio>
  </div>
</template>

<script>
  export default {
    name: 'Details',
    props: ['song'],
    data() {
      return {
      }
    },
    computed: {},
    methods: {}
  }
</script>

<style>
</style>