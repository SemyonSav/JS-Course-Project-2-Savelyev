import Vue from 'vue';
import Router from 'vue-router';
// eslint-disable-next-line import/extensions
import BucketPage from '../pages/BucketPage.vue';
// eslint-disable-next-line import/extensions
import InfoPage from '../pages/InfoPage.vue';
// eslint-disable-next-line import/extensions
import OrdersPage from '../pages/OrdersPage.vue';
// eslint-disable-next-line import/extensions
import ProductsPage from '../pages/ProductsPage.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Products',
            component: ProductsPage,
        },
        {
            path: '/bucket',
            name: 'Bucket',
            component: BucketPage,
        },
        {
            path: '/account',
            name: 'Account',
            component: InfoPage,
        },
        {
            path: '/orders',
            name: 'Orders',
            component: OrdersPage,
        },
    ],
});
