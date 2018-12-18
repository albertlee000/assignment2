<template>
  <div id="app">
    <b-navbar toggleable="md" variant="dark" type="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand to="/home">Book Community</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/home"><i class="fa fa-home" style="padding: 5px" > Home</i></b-nav-item>
          <b-nav-item to="/books"><i class="fa fa-list" style="padding: 5px"> Manage Books</i></b-nav-item>
          <b-nav-item data-test="addbtn" to="/addbook"><i class="fa fa-book" style="padding: 5px"> Add Book</i></b-nav-item>
          <b-nav-item to="/map"><i class="fa fa-globe" style="padding: 5px"> Map</i></b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">

          <b-nav-item to="/login" ><i class="fa fa-sign-in" style="padding: 5px"> Login </i></b-nav-item>
          <b-nav-item to="/home" ><i class="fa fa-sign-out" style="padding: 5px" @click="logout"> Logout </i></b-nav-item>

          <i class="fa fa-pied-piper-alt fa-1x" style="padding: 5px; color: white;"></i>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>

  export default {
    name: 'App',

    methods:{
      logout:function () {
        this.$store.commit('$_removeStorage')

      },
      isLogin:function () {
        console.log(this.getStorage)
        return this.getStorage
      }
    },
    mounted(){
      window.onbeforeunload = function () {
        var storage = window.localStorage;
        storage.clear()
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding-top: 20px;
    background: url("./assets/sunsetbg.jpg") no-repeat center top;
  }
  .VueTables__sortable {
    cursor: pointer;
  }
</style>
