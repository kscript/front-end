import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {service} from './axios'
import elementUI from 'element-ui'
import {eventBus} from './util/eventBus'
import 'element-ui/lib/theme-chalk/index.css';
if(process.env.NODE_ENV){
  require('../static/css/main.css')
}
Vue.use(elementUI)

Vue.use(eventBus)
Vue.use(service)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
