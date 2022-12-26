import VuexPersistence from 'vuex-persist';
import Vue from 'vue';
import Vuex from 'vuex';
import productsModules from './modules/products';
import bucketModules from './modules/bucket';
import paginationModules from './modules/pagination';
import profileModules from './modules/profile';
import ordersModules from './modules/orders';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
    reducer: state => (
        {
            bucketModules: state.bucketModules,
            ordersModules: state.ordersModules,
            profileModules: state.profileModules,
        }),
});

export default new Vuex.Store({
    plugins: [vuexLocal.plugin],
    modules: {
        productsModules, paginationModules, bucketModules, ordersModules, profileModules,
    },
});
