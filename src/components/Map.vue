<template>

  <div id="app1" class="hero">
    <div>
      <h3 class="vue-title"><i class="fa fa-globe" style="padding: 3px"></i>Find friends and books</h3>
      <div class="container mt-3 mt-sm-5">
        <div class="row justify-content-center">

            <gmap-map
              :center="center"
              :zoom="10"
              style="width:100%;  height: 700px;">
            </gmap-map>
          </div>

      </div>
    </div>


  </div>
</template>

<script>
  export default {
    name: 'Map',
    data () {
      return {
        // default to Montreal to keep it simple
        // change this to whatever makes sense
        center: { lat: 65.25, lng: 1.557 },
        places: [],
        currentPlace: null
      }
    },

    mounted () {
      this.geolocate()
    },

    methods: {
      // receives a place object via the autocomplete component

      geolocate: function () {
        navigator.geolocation.getCurrentPosition(position => {
          this.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
        })
      }
    }
  }
</script>
<style scoped>
  #app1 {
    width: 95%;
  }
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }

</style>
