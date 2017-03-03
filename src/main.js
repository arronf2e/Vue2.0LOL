// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import Icon from 'vue-svg-icon/Icon.vue'
import VueLazyload from 'vue-lazyload'
Vue.component('icon', Icon);  
Icon.inject('lol'); // the name of your svg pic

Vue.use(MuseUI)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('./assets/404.png'),
  loading: require('./assets/loading.gif'),
  attempt: 1
})

Vue.use(MintUI)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
