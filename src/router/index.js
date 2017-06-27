import Vue from 'vue'
import Router from 'vue-router'
import Sign from '@/components/Sign'
import Test from '@/components/Test'
import Main from '@/components/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Sign',
      component: Sign
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    }
  ]
})
