import axios from 'axios';

const state = {
    items: []
};

const getters = {
    allItems: (state) => state.items
};

const actions = {
    async fetchItems({ commit }) {
        const response = await axios.get('https://my-json-server.typicode.com/ZdravkoBRE/test-tms/items');

        commit('setItems', response.data);
    },

    async addItems({ commit }, id, location, quality, image, place, threat) {
        const response = await axios.post('https://my-json-server.typicode.com/ZdravkoBRE/test-tms/items', {
            id, location, quality, image, place, threat, direct:"Indirect", indicator: false
        });

        commit('newItem', response.data);
    }
};

const mutations = {
    setItems: (state, items) => (state.items = items),
    newItem: (state, item) => (state.items.unshift(item))
}

export default {
    state,
    getters,
    actions,
    mutations
}