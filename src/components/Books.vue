<template>
  <div class="hero" style="color:white">
    <h3 class="vue-title"><i class="fa fa-list" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div id="app1">
      <v-client-table :columns="columns" :data="books" :options="options">
        <a slot="thumbup" slot-scope="props" class="fa fa-thumbs-up fa-2x" @click="thumbUp(props.row.name)"></a>
        <a slot="thumbdown" slot-scope="props" class="fa fa-thumbs-down fa-2x" @click="thumbDown(props.row.name)"></a>
        <a slot="remove" slot-scope="props" class="fa fa-trash-o fa-2x" @click="deleteBook(props.row._id)"></a>
        <a slot="edit" slot-scope="props" class="fa fa-edit fa-2x" @click="jumpToEdit(props.row._id)"></a>
      </v-client-table>
    </div>
  </div>
</template>

<script>
  import BookService from '@/services/bookservice'
  import Vue from 'vue'
  import VueTables from 'vue-tables-2'
  import loginUser from '@/components/Login'
  import Vuex from 'vuex'
  Vue.use(Vuex)
  Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})
  export default {
    name: 'Books',
    data () {
      return {
        books: [],
        errors: [],
        uid:[],

        props: ['_id','name'],
        messagetitle: ' Book List ',
        columns: ['_id', 'name', 'author', 'summary', 'like','thumbup','thumbdown','remove', 'edit','review'],
        options: {
          perPage: 10,
          filterable: ['name', 'author', '_id'],
          headings: {
            _id: 'ID',
            name: 'Book Name',
            author: 'Author',
            summary: 'Summary',
            like: 'Likes',
            thumbup:'Thumb Up',
            thumbdown:'Thumb Down',
            review: 'Review'
          }
        }
      }
    },
    // Fetches Donations when the component is created.
    created () {
      this.loadBooks()
    },
    methods: {
      loadBooks: function () {
        BookService.fetchBooks()
          .then(response => {
            // JSON responses are automatically parsed.
            this.books = response.data

          })
          .catch(error => {
            this.errors.push(error)
            console.log(error)
          })
      },
      jumpToEdit:function(id){
        this.$router.push({path: './editBook',query:{id:id}})

      },
      thumbUp: function (name) {
        var username = loginUser.getUserName()
        var bookname = {bookname:name}
        BookService.getUserID(username)
          .then(response=>{
            this.uid = response.data
            BookService.like(this.uid,bookname)
              .then(response => {
                this.loadBooks()
                console.log(response)
              })
              .catch(error => {
                this.errors.push(error)
                console.log(error)
              })
          })
      },
      thumbDown: function (name) {
        var username = loginUser.getUserName()
        var bookname = {bookname:name}
        BookService.getUserID(username)
          .then(response=>{
            this.uid = response.data
            BookService.unlike(this.uid,bookname)
              .then(response => {
                this.loadBooks()
                console.log(response)
              })
              .catch(error => {
                this.errors.push(error)
                console.log(error)
              })
          })
      },
      rankBook: function () {
        BookService.rankBook
          .then(response => {
            this.loadBooks()
            console.log(response)
          })
          .catch(error => {
            this.errors.push(error)
            console.log(error)
          })
      },
      deleteBook: function (id) {
        this.$swal({
          title: 'You really want to delete it?',
          text: 'You can\'t regret it!',
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes',
          cancelButtonText: 'No',
          showCloseButton: true
          // showLoaderOnConfirm: true
        }).then((result) => {
          console.log('SWAL Result : ' + result.value)
          if (result.value === true) {
            BookService.deleteBook(id)
              .then(response => {
                // JSON responses are automatically parsed.
                this.message = response.data
                console.log(this.message)
                this.loadBooks()
                // Vue.nextTick(() => this.$refs.vuetable.refresh())
                this.$swal('Deleted', 'You successfully deleted this book ' + JSON.stringify(response.data, null, 5), 'success')
              })
              .catch(error => {
                this.$swal('ERROR', 'Delete Failed...' + error, 'error')
                this.errors.push(error)
                console.log(error)
              })
          } else {
            console.log('SWAL Else Result : ' + result.value)
            this.$swal('Cancelled', 'Book still exists!', 'info')
          }
        })
      },

      // editDonation: function (id) {
      //   this.$router.params = id
      //   this.$router.push('edit')
      // }
    }
  }
</script>

<style scoped>
  #app1 {
    width: 80%;
    margin: 0 auto;
  }
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
</style>
