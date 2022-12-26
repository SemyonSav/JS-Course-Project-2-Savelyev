export default {
    state: {
        orders: [],
    },
    mutations: {
        setOrders(state, orders) {
            state.orders = orders;
        },
        addOrders(state, orders) {
            orders.filter(order => state.orders.push(order));
        },
    },
    actions: {
        setOrdersAction(context, orders) {
            context.commit('setOrders', orders);
        },
        addOrdersAction(context, orders) {
            context.commit('addOrders', orders);
        },
    },
    getters: {
    },
    namespaced: true,
};
