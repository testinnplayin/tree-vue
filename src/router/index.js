import Vue from 'vue'
import Router from 'vue-router'
import TreeviewContainer from '@/components/TreeviewContainer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TreeviewContainer',
      component: TreeviewContainer
    }
  ]
})
