import Vue from 'vue';
import App from './App.vue';
import store from './store';
import VueRouter from "vue-router";
import router from "./router";
import vuetify from './plugins/vuetify';

Vue.use(VueRouter);

new Vue({
    store,
    vuetify,
    el: '#app',
    render: h => h(App),
    router,
});