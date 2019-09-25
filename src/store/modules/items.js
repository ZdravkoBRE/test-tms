import axios from 'axios';

const state = {
    items: [
        {
            id: 1,
            indicator: true,
            direct: 'Direct',
            location: 'Poor',
            quality: 'Fair',
            image: 'Good',
            place: 'Very Good',
            threat: 'High',
        },
        {
            id: 2,
            indicator: false,
            direct: 'Indirect',
            location: 'Poor',
            quality: 'Fair',
            image: 'Good',
            place: 'Very Good',
            threat: 'High',
        }
    ]
};

const getters = {
    allItems: (state) => state.items
};

const actions = {};

const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations
}