export default {
    state: {
        pageIndex: 0,
    },
    mutations: {
        changeIndex(state, index) {
            state.pageIndex = index;
        },
    },
    actions: {
        changeIndexAction(context, payload) {
            context.commit('changeIndex', payload);
        },
    },
    getters: {
        getIndex: state => state.pageIndex,
    },
    namespaced: true,
};
