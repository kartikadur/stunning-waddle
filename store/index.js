import axios from '~/plugins/axios'

export const state = () => ({
  ids: [],
  items: []
})

export const mutations = {
  setIds (state, ids) {
    state.ids = ids
  },
  setItems (state, items) {
    state.items = items
  }
}
export const actions = {
  async nuxtServerInit ({ commit }) {
    const response = await axios.get('topstories.json')
    const ids = response.data

    const tenIds = ids.slice(0, 10);
    const itemsPromise = tenIds.map(id => axios.get(`items/${id}`))
    const itemsResponse = await Promise.all(itemsPromise)
    const items = itemsResponse.map(res => res.data)

    commit('setItems', items)
  }
}
