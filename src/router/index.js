import Vue from 'vue'
import VueRouter from 'vue-router'
import Adocao from '@/views/Adocao/Adocao.vue'
import Regras from '@/views/Regras/Regras.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Adocao
    },
    {
        path: '/nossas-regras',
        name: 'regras',
        component: Regras
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
