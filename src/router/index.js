import Vue from 'vue'
import Router from 'vue-router'
import Sign from '@/components/Sign'
import Test from '@/components/Test'
import Main from '@/components/Main'
import AddProject from '@/components/AddProject'
import Project from '@/components/Project'

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
      component: Main,
      children: [
        {path: 'test', component: Test, name: 'Test', meta: {requireAuth: true}},
        {path: 'add_project', component: AddProject, name: 'add_project', meta: {requireAuth: true}},
        {path: 'project', component: Project, name: 'project', meta: {requireAuth: true}}
      ]
    }
  ]
})
