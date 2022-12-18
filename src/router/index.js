import VueRouter from "vue-router";
import ProductsPage from "../pages/ProductsPage.vue";
import BucketPage from "../pages/BucketPage.vue";
import OrdersPage from "../pages/OrdersPage.vue";
import InfoPage from "../pages/InfoPage.vue";

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: ProductsPage
        },
        {
            path: '/bucket',
            component: BucketPage
        },
        {
            path: '/orders',
            component: OrdersPage
        },
        {
            path: '/account',
            component: InfoPage
        },
    ]
});