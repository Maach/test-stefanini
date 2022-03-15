import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        liked: [],
        activeModal: null,
        activeMenu: false,
    },
    getters: {
        loved: state => petName => {
            return state.liked.includes(petName)
        }
    },
    mutations: {
        like({ liked }, petName) {
            liked.push(petName)
        },
        dislike({ liked }, petName) {
            const index = liked.findIndex(pet => pet === petName)
            liked.splice(index, 1)
        },
        adopt(state) {
            state.activeModal = 'adoptModal'
        },
        closeModal(state) {
            state.activeModal = null
        },
        toggleMenu(state, payload) {
            state.activeMenu = payload !== undefined ? payload : !state.activeMenu
        },
    },
    actions: {
        toggleLike({ commit, getters, state }, petName) {
            if(getters.loved(petName)) {
                commit('dislike', petName)
            } else {
                commit('like', petName)
                state.activeModal = 'favModal'
            }
        },
    },
    modules: {
    }
})
