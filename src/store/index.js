import Vue from 'vue';
import Vuex from 'vuex';
import productsModules from './modules/products';
import VuexPersistence from "vuex-persist";

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
    reducer: (state) => ({ productsModules: state.productsModules })
});

export default new Vuex.Store({
    plugins: [vuexLocal.plugin],
    modules: {
        productsModules
    }
});