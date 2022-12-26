<template>
    <div>
        <div
            class="back"
            v-if="isProductOpened"
            @click="closeProduct"
        ></div>
        <Header></Header>
        <v-card class="main">
            <ProductExpanseCard
                class="expanse-card"
                v-if="isProductOpened"
                :product="products.filter(product => product.id === this.openedProductID)[0]"
            ></ProductExpanseCard>
            <v-card-title>
                <h1 class="display-1">Заказы</h1>
            </v-card-title>
            <OrderElement
                v-for="order in orders"
                :key="order.id"
                :order="order"
            ></OrderElement>
            <v-divider></v-divider>
            <v-card-actions class="buttons">
                <v-btn
                    color="#673AB7"
                    @click="cleanOrders"
                >
                    Очистить
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import Header from '../components/Header';
import OrderElement from '../components/OrderElement';
import ProductExpanseCard from '../components/ProductExpanseCard';
import { createNamespacedHelpers } from 'vuex';

const { mapState, mapActions } = createNamespacedHelpers('productsModules');

export default {
    name: 'OrdersPage',
    components: { OrderElement, Header, ProductExpanseCard },
    computed: {
        orders() {
            return this.$store.state.ordersModules.orders;
        },
        ...mapState(['products', 'openedProductID']),
        isProductOpened() {
            return this.openedProductID !== -1;
        },
    },
    methods: {
        ...mapActions(['setOpenedProductIDAction']),
        closeProduct() {
            this.setOpenedProductIDAction(-1);
        },
        cleanOrders() {
            this.$store.dispatch('ordersModules/setOrdersAction', []);
        },
    },
};
</script>

<style scoped>
.main {
    padding: 35px;
    width: 80%;
    margin: 20px auto;
}

.buttons {
    display: flex;
    justify-content: center;
    margin-top: 30px;
}

.expanse-card {
    position: fixed;
    width: 60%;
    height: 600px;
    margin-left: 10%;
    top: 50px;
    z-index: 99;
}

.back {
    position: fixed;
    z-index: 90;
    background-color: #212529;
    opacity: 93%;
    width: 100%;
    height: 100vh;
}

</style>
