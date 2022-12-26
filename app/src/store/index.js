import VuexPersistence from 'vuex-persist';
import Vue from 'vue';
import Vuex from 'vuex';
import productsModules from './modules/products';
import bucketModules from './modules/bucket'
import paginationModules from './modules/pagination';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
    reducer: state => ({ bucketModules: state.bucketModules }),
});

export default new Vuex.Store({
    plugins: [vuexLocal.plugin],
    modules: {
        productsModules, paginationModules, bucketModules
    },
});
