import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/index'
import test from '../components/routeTest'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
        {
          path: '/test',
          name: 'test',
          component: test
        }
      ]
    },

  ]
})
