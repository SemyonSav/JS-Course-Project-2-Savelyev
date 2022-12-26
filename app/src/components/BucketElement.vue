<template>
    <v-card class="card">
        <img
            :src="product.img"
            class="card__img"
        >
        <div class="card__info">
            <h2 class="card__info--title">
                {{ product.name }}
            </h2>
            <p class="card__info--text">
                {{ product.shortDescription }}
            </p>
        </div>
        <v-spacer></v-spacer>

        <v-card-actions>
            <v-btn
                class="mx-2"
                fab
                dark
                small
                color="#673AB7"
                @click="minusCountInBucket"
            >
                <v-icon dark>
                    mdi-minus
                </v-icon>
            </v-btn>

            <h3 class="count">
                {{ productCount }}
            </h3>

            <v-btn
                class="mx-2"
                fab
                dark
                small
                color="#673AB7"
                @click="plusCountInBucket"
            >
                <v-icon dark>
                    mdi-plus
                </v-icon>
            </v-btn>

            <v-btn
                class="delete-btn"
                color="#673AB7"
                elevation="2"
                @click="deleteFromBucket"
            >
                Удалить
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: 'BucketElement',
    props: {
        bucketProduct: {
            type: Object,
            required: true,
        },
    },
    computed: {
        product() {
            return this.$store.state.productsModules.products.filter(prod => prod.id === this.bucketProduct.id)[0];
        },
        productCount() {
            return this.$store.state.bucketModules.bucket.filter(prod => prod.id === this.bucketProduct.id)[0].count;
        },
    },
    methods: {
        deleteFromBucket() {
            this.$store.dispatch('bucketModules/removeFromBucketAction', this.bucketProduct.id);
        },
        plusCountInBucket() {
            this.$store.dispatch('bucketModules/changeCountInBucketAction', {
                id: this.bucketProduct.id,
                count: 1,
            });
        },
        minusCountInBucket() {
            if (this.$store.state.bucketModules.bucket.filter(prod => prod.id === this.bucketProduct.id)[0].count !== 1) {
                this.$store.dispatch('bucketModules/changeCountInBucketAction', {
                    id: this.bucketProduct.id,
                    count: -1,
                });
            } else {
                this.$store.dispatch('bucketModules/removeFromBucketAction', this.bucketProduct.id);
            }
        },
    },
};
</script>

<style scoped>
.card {
    display: flex;
    padding: 10px 15px;
    height: 150px;
    width: 100%;
}

.card__img {
    height: 130px;
}

.card__info {
    margin-left: 10px;
    width: 200px;
}

.card__info--text {
    margin-top: 10px;
}

.delete-btn {
    margin-left: 30px;
}

.count {
    margin: 0 20px;
}
</style>
