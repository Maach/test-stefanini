import Vue from 'vue'
import VueRouter from 'vue-router'
import Adocao from '@/views/Adocao/Adocao.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Adocao
    },
    {
        path: '/regras',
        name: 'regras',
        component: import(/* webpackChunkName: "regras" */ '@/views/Regras/Regras.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
