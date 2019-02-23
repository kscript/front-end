import Vue from 'vue'
import Router from 'vue-router'
import config from '../config/runtime'

Vue.use(Router)
const router = new Router({
  base: config.publicPath,
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '',
      component: r => require.ensure( [], () => r (require('./views/home/index.vue'))),
      children: [
        {
          path: '/sprite',
          name: 'sprite',
          component: r => require.ensure( [], () => r (require('./components/pages/sprite.vue'))),
        },
        {
          path: '/viewer',
          name: 'viewer',
          component: r => require.ensure( [], () => r (require('./components/pages/viewer.vue'))),
        }
      ]
    }
  ]
})
export default router
