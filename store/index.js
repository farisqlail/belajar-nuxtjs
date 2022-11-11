import axios from '~/plugins/axios'

export const state = () => ({
    posts: []
})

export const mutations = {
    setData(state, items) {
        state.posts = items
    }
}

export const actions = {
    async nuxtServerInit({ commit }) {
        const res = await axios.get('posts')
        commit('setData', res.data)
    }
}
