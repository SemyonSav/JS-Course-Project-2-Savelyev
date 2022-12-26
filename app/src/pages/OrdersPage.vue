<template>
    <div>
        <Header></Header>
        <v-card class="main">
            <v-card-title>
                <h1 class="display-1">Заказы</h1>
            </v-card-title>
            <OrderElement></OrderElement>
            <v-divider></v-divider>
            <v-card-actions class="buttons">
                <v-btn color="#673AB7">Очистить</v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import Header from '../components/Header';
import OrderElement from "../components/OrderElement";

export default {
    name: 'OrdersPage',
    components: {OrderElement, Header },
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
