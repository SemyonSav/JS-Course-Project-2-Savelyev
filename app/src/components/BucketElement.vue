<template>
    <v-card class="card">
        <img
            src="https://storage.vsemayki.ru/images/0/1/1913/1913759/previews/people_7_manshort_front_white_500.jpg"
            class="card__img"
        >
        <div class="card__info">
            <h2 class="card__info--title">
                {{ product.name }}
            </h2>
            <p class="card__info--text">
                Здесь бля должно быть ёпте короткое описание товара
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
            >
                <v-icon dark>
                    mdi-minus
                </v-icon>
            </v-btn>

            <h3 class="count">3</h3>

            <v-btn
                class="mx-2"
                fab
                dark
                small
                color="#673AB7"
            >
                <v-icon dark>
                    mdi-plus
                </v-icon>
            </v-btn>

            <v-btn
                class="delete-btn"
                color="#673AB7"
                elevation="2"
            >
                Удалить
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: "BucketElement",
    data() {
        return {
            product: this.$store.state.productsModules.products.filter(product => product.id === this.bucketProduct.id)[0]
        }
    },
    props: {
        bucketProduct: {
            type: Object,
            required: true
        }
    }
}
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
