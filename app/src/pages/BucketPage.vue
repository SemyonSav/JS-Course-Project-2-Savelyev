<template>
    <div>
        <Header></Header>
        <v-card class="main">
            <v-card-title>
                <h1 class="display-1">Корзина</h1>
            </v-card-title>
            <BucketElement
                v-for="product in bucket"
                :key="product.id"
                :bucketProduct="product"
            ></BucketElement>
            <v-divider></v-divider>
            <v-card-actions class="buttons">
                <v-btn color="#673AB7">Заказать</v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import Header from '../components/Header';
import BucketElement from "../components/BucketElement";

export default {
    name: 'BucketPage',
    components: {BucketElement, Header },
    computed: {
        // ...mapState(['bucket']),
        bucket() {
            return window.localStorage.getItem('vuex');
        }
    }
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
</style>
