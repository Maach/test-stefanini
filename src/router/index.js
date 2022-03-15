import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home/Home.vue')
    },
    {
        path: '/adote-agora',
        name: 'adocao',
        component: () => import(/* webpackChunkName: "adocao" */ '@/views/Adocao/Adocao.vue')
    },
    {
        path: '/nossas-regras',
        name: 'regras',
        component: () => import(/* webpackChunkName: "regras" */ '@/views/Regras/Regras.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    },
    routes
})

export default router
