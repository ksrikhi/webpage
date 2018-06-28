import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Apphome from '@/components/Apphome'
import Applogin from '@/components/Applogin'
import Appcontact from '@/components/Appcontact'
import Appform from '@/components/Appform'

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
            path: '/home',
            name: 'Apphome',
            component: Apphome
        },
        {
            path: '/form',
            name: 'Appform',
            component: Appform
        }
    ]
})