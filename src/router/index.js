import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Books from '@/components/Books'
import addBook from '@/components/addBook'
import Login from '@/components/Login'
import Map from '@/components/Map'
import editBook from '@/components/editBook'
Vue.use(Router)

export default new Router({
  routes: [
    {
    path: '/',
    name: 'Home',
    component: Home,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/books',
      name: 'Books',
      component: Books,
      meta:{auth:true}
    },
    {
      path: '/addbook',
      name: 'addBook',
      component: addBook,
      meta:{auth:true}
    },
    {
      path: '/editBook',
      name: 'editBook',
      component: editBook,
      meta:{auth:true}
    },
    {
      path: '/map',
      name: 'map',
      component: Map,
      meta:{auth:true}
    },
  ]
})
