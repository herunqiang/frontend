import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/index'
import blog_index from '../components/blog_index'
import blog_hot from '../components/blog_hot'
import blog_technology from '../components/blog_technology'
import blog_life from '../components/blog_life'
import blog_msgboard from '../components/blog_msgboard'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
        {
          path: '/',
          redirect:blog_index
        },
        {
          path: '/blog_index',
          name: 'blog_index',
          component: blog_index
        },
        {
          path: '/blog_hot',
          name: 'blog_hot',
          component: blog_hot
        },
        {
          path: '/blog_technology',
          name: 'blog_technology',
          component: blog_technology
        },
        {
          path: '/blog_life',
          name: 'blog_life',
          component: blog_life
        },
        {
          path: '/blog_msgboard',
          name: 'blog_msgboard',
          component: blog_msgboard
        }
      ]
    },
  ],
  mode:'history'//去掉“#”
})
