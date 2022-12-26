<template>
    <div>
        <div
            class="back"
            v-if="isProductOpened"
            @click="closeProduct"
        ></div>
        <Header></Header>
        <div class="main">
            <ProductExpanseCard
                class="expanse-card"
                v-if="isProductOpened"
                :product="products.filter(product => product.id === this.openedProductID)[0]"
            ></ProductExpanseCard>
            <div class="products-search">
                <input
                    class="search-input"
                    type="text"
                    v-model="searchText"
                    placeholder="Найти товар"
                />
            </div>
            <div class="products-cards">
                <ProductCard
                    class="products-cards__card"
                    v-for="product in products"
                    :key="product.id"
                    :product="product"
                >
                </ProductCard>
            </div>
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import ProductExpanseCard from '../components/ProductExpanseCard';

const { mapState, mapActions } = createNamespacedHelpers('productsModules');

export default {
    name: 'ProductsPage',
    components: { ProductExpanseCard, ProductCard, Header },
    data() {
        return {
            searchText: '',
        };
    },
    computed: {
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
    },
};
</script>

<style scoped>
    .main {
        width: 80%;
        margin: auto;
    }

    .products-cards__card {
        width: 30%;
        margin: 10px 10px;
    }

    .products-cards__card:hover {
        width: 30%;
        cursor: pointer;
        margin: 8px 10px;
        box-shadow:0 0 15px 4px rgba(0,0,0,0.1);
    }

    .products-cards {
        display: flex;
        flex-wrap: wrap;
    }

    .search-input {
        width: 400px;
        height: 40px;
        margin: 20px calc(50% - 200px);
        color: #212529;
        padding: 10px;
        box-sizing: border-box;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #bdbdbd;
        box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
        border-radius:10px;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }

    .expanse-card {
        position: fixed;
        width: 60%;
        height: 600px;
        margin-left: 10%;
        margin-top: 10px;
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
