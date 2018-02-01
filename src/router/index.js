import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'

Vue.use(Router)

export default new Router({
  mode: 'history',  //移除url #字號
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})
