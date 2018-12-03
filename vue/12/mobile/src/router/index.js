import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/screens/Home'
import Club from '@/screens/Club'
import Mine from '@/screens/Mine'
import Sns from '@/screens/Sns'
import Root from '@/screens/index'
import NewsDetail from '@/screens/Home/NewsDetail'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Root,
            redirect: '/home',
            children: [
                {
                    path: 'home',
                    component: Home
                },
                {
                    path: 'club',
                    component: Club
                },
                {
                    path: 'sns',
                    component: Sns
                },
                {
                    path: 'mine',
                    component: Mine
                }
            ]
        },
        {
            path: '/home/news/:id',
            component: NewsDetail
        }
    ]
})
