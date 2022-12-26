<template>
    <v-card
        class="mx-auto my-12 card"
        max-width="374"
        @click="openProduct($event)"
    >
        <v-img
            height="250"
            :src="product.img"
        ></v-img>

        <v-card-title class="card__title">
            {{ product.name }}
        </v-card-title>

        <v-card-text>
            <v-row
                align="center"
                class="mx-0"
                style="margin: -15px 0 5px 0"
            >
                <v-rating
                    :value="product.rating"
                    color="#FFC107"
                    dense
                    half-increments
                    readonly
                    size="14"
                ></v-rating>

                <div class="grey--text ms-4">
                    {{ product.rating }} ({{ product.votes }})
                </div>
            </v-row>

            <div class="my-4 text-subtitle-1">
                • {{ product.author }}
            </div>

            <div>
                {{ product.shortDescription }}
            </div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-title>Выбрать размер</v-card-title>

        <v-card-text>
            <v-chip-group
                class="chips"
                v-model="selection"
                active-class="deep-purple accent-4 white--text"
                column
            >
                <v-chip class="chip">S</v-chip>

                <v-chip class="chip">M</v-chip>

                <v-chip class="chip">L</v-chip>

                <v-chip class="chip">XL</v-chip>
            </v-chip-group>
        </v-card-text>

        <v-card-actions>
            <v-btn
                class="order-btn"
                color="#9575CD"
                text
                @click="addToBucket"
            >
                Заказать
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapActions } = createNamespacedHelpers('productsModules');


export default {
    name: 'ProductCard',
    data: () => ({
        selection: 1,
    }),
    methods: {
        ...mapActions(['setOpenedProductIDAction']),
        openProduct(event) {
            if (event.target.className !== 'v-btn__content' && event.target.classList[0]
                !== 'chip' && event.target.className !== 'v-chip__content') {
                this.setOpenedProductIDAction(this.product.id);
            }
        },
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
    },
    props: {
        product: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style scoped>
    .order-btn {
        margin-top: -10px;
    }

    .chips {
        margin-top: -10px;
    }

    .card__title {
        margin-top: -7px;
    }
</style>
