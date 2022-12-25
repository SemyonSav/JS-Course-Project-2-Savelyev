<template>
    <div>
        <Header></Header>
        <div class="main">
            <input
                type="text"
                class="product-find-input"
            >
            <div class="products-cards">
                <ProductCard
                    class="products-cards__card"
                    v-for="card in 6"
                >
                </ProductCard>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../components/Header';
import ProductCard from "../components/ProductCard";

export default {
    name: 'ProductsPage',
    components: {ProductCard, Header },
};
</script>

<style scoped>
    .main {
        width: 80%;
        margin: 0 10%;
    }

    .products-cards__card {
        width: 30%;
        margin: 10px 10px;
    }

    .products-cards {
        display: flex;
        flex-wrap: wrap;
    }
</style>
