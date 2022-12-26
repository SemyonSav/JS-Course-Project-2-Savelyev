<template>
    <v-card class="card">
        <v-card-title>
            <h1 class="display-1">
                {{ product.name }}
            </h1>
        </v-card-title>
        <v-card-text class="card-info">
            <img
                alt="Картин_о4ка"
                :src="product.img"
                class="card-info__img"
            >
            <p class="card-info__text">
                {{ product.longDescription }}
            </p>
        </v-card-text>
        <v-card-text class="card-characteristics">
            <h4>Характеристики:</h4>
            <ul>
                <li
                    v-for="characteristic in product.characteristics"
                    :key="characteristic.name"
                >
                    {{ characteristic.name }}: {{ characteristic.value }}
                </li>
            </ul>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
            <v-btn
                color="#673AB7"
                @click="addToBucket"
            >
                В корзину
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
                color="#607D8B"
                @click="removeFromBucket"
            >
                Удалить из корзины
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: 'ProductExpanseCard',
    props: {
        product: {
            type: Object,
            required: true,
        },
    },
    methods: {
        addToBucket() {
            try {
                if (JSON.parse(window.localStorage.vuex).bucketModules.bucket.filter(product => product.id === this.product.id).length === 0) {
                    this.$store.dispatch('bucketModules/addToBucketAction', this.product.id);
                    alert('Товар добавлен в корзину');
                } else {
                    alert('Товар уже в корзине');
                }
            } catch (err) {
                this.$store.dispatch('bucketModules/addToBucketAction', this.product.id);
                alert('Товар добавлен в корзину');
            }
        },
        removeFromBucket() {
            this.$store.dispatch('bucketModules/removeFromBucketAction', this.product.id);
            alert('Товар удалён');
        },
    },
};
</script>

<style scoped>
    .card {
        padding: 15px;
    }

    .display-1 {
        margin: auto;
    }

    .card-info {
        display: flex;
        justify-content: space-around;
    }

    .card-info__img {
        margin: 15px 0;
        height: 250px;
        border-radius: 8px;
    }

    .card-info__text {
        margin-top: 15px;
        width: 50%;
    }
</style>
