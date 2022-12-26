import products from '../../consts/products';

export default {
    state: {
        openedProductID: -1,
        products,
    },
    mutations: {
        setOpenedProductID(state, id) {
            state.openedProductID = id;
        },
    },
    actions: {
        setOpenedProductIDAction({ commit }, id) {
            commit('setOpenedProductID', id);
        },
    },
    getters: {},
    namespaced: true,
};
