
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSweetalert2 from 'vue-sweetalert2'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './../store/index'
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(ElementUI)
Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.use(VueSweetalert2)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyA8ZGtkyIZyYIsa_vHm5tJJDTnfWQHAQug',
    libraries: 'places'
  }
})
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(m => m.meta.auth)) {
    if (window.localStorage.isLogin==='1') {
      next()
    } else if (to.path !== '/login') {
      next({path: '/login'})
      Vue.prototype.$message.warning('You can enter it after login！')
    }
  } else {
    next()
  }
})


