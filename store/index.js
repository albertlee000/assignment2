import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const key = 'currentUser'
const isLogin = 'isLogin'
const store = new Vuex.Store({
  state () {
    return {
      currentUser: null,
      isLogin: '0'
    }
  },
  getters: {
    getStorage: function (state) {
      if (!state.currentUser) {
        state.currentUser = JSON.parse(localStorage.getItem(key))
        state.isLogin = localStorage.getItem(isLogin)
      }
      return state.isLogin
    },
    getUser:function () {
      return state.currentUser
    }
  },
  mutations: {
    $_setLogin (state, value) {
      state.isLogin = value
      localStorage.setItem(isLogin, value)
    },
    $_setStorage (state, value) {
      state.currentUser = value
      localStorage.setItem(key, JSON.stringify(value))
    },
    $_removeStorage (state) {
      state.currentUser = null
      localStorage.removeItem(key)
      localStorage.clear()
    }
  }
})

export default store
