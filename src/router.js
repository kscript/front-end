import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const router = new Router({
  base: '/',
  mode: 'history',
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
          path: '/markdown',
          name: 'markdown',
          component: r => require.ensure( [], () => r (require('./components/pages/markdown.vue'))),
        }
      ]
    }
  ]
})
export default router
