import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Apphome from '@/components/Apphome'
import Applogin from '@/components/Applogin'
import Appcontact from '@/components/Appcontact'
import Appform from '@/components/Appform'
import AppAbout from '@/components/AppAbout'
import AppFacilities from '@/components/AppFacilities'
import AppEvent from '@/components/AppEvent'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/login',
    name: 'Applogin',
    component: Applogin
  },
  {
    path: '/contact',
    name: 'Appcontact',
    component: Appcontact
  },
  {
    path: '/form',
    name: 'Appform',
    component: Appform
  },
  {
    path: '/home',
    name: 'Apphome',
    component: Apphome
  },
  {
    path: '/About',
    name: 'AppAbout',
    component: AppAbout
  },
  {
    path: '/Facilities',
    name: 'AppFacilities',
    component: AppFacilities
  },
  {
    path: '/Event',
    name: 'AppEvent',
    component: AppEvent
  }
  ]
})
