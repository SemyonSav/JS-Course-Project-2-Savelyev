<template>
    <div>
        <Header></Header>
        <v-card class="main">
            <v-card-title>
                <h1 class="display-1">Корзина</h1>
            </v-card-title>
            <BucketElement
                class="bucket-element"
                v-for="product in bucket"
                :key="product.id"
                :bucketProduct="product"
            ></BucketElement>
            <v-divider></v-divider>
            <v-card-actions class="buttons">
                <v-btn
                    color="#673AB7"
                    @click="orderProducts"
                >
                    Заказать
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import { v4 as uuid } from 'uuid';
import Header from '../components/Header';
import BucketElement from '../components/BucketElement';

export default {
    name: 'BucketPage',
    components: { BucketElement, Header },
    computed: {
        bucket() {
            return this.$store.state.bucketModules.bucket;
        },
    },
    methods: {
        orderProducts() {
            if (this.$store.state.profileModules.isProfileFilled) {
                this.addToOrders();
                this.clearBucket();
            } else {
                this.$router.push({ name: 'Account' });
            }
        },
        addToOrders() {
            const orders = [];
            this.$store.state.bucketModules.bucket.filter((bucketProduct) => {
                orders.push({
                    id: uuid(),
                    productID: bucketProduct.id,
                    count: bucketProduct.count,
                });
            });
            this.$store.dispatch('ordersModules/addOrdersAction', orders);
        },
        clearBucket() {
            this.$store.dispatch('bucketModules/setBucketAction', []);
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

.bucket-element {
    margin-top: 15px;
}
</style>
