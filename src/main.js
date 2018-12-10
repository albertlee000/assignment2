// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
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

Vue.use(ElementUI)
Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.use(VueSweetalert2)
/* eslint-disable no-new */
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


