<template>
    <v-card
        class="card"
        @click="openProduct()"
    >
        <img
            :src="product.img"
            class="card__img"
        >
        <div class="product-info">
            <h2 class="product-info--title">
                {{ product.name }}
            </h2>
            <p class="product-info--text">
                {{ product.shortDescription }}
            </p>
        </div>
        <v-spacer></v-spacer>

        <div class="order-info">
            <h2 class="order-info--date">Дата заказа: 26.12.2022</h2>
            <h3 class="order-info--count">Количество: {{ order.count }}</h3>
        </div>
    </v-card>
</template>

<script>
export default {
    name: 'OrderElement',
    props: {
        order: {
            type: Object,
            required: true,
        },
    },
    computed: {
        product() {
            return this.$store.state.productsModules.products.filter(prod => {
                return prod.id === this.order.productID
            })[0];
        },
    },
    methods: {
        openProduct() {
            this.$store.dispatch('productsModules/setOpenedProductIDAction', this.product.id);
        },
    },
};
</script>

<style scoped>
.card {
    display: flex;
    margin-top: 15px;
    padding: 10px 15px;
    height: 150px;
    width: 100%;
}

.card__img {
    height: 130px;
}

.product-info {
    margin-left: 10px;
    width: 200px;
}

.product-info--text {
    margin-top: 10px;
}

.order-info--count {
    margin-top: 10px;
}

</style>
