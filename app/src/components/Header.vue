<template>
    <header>
        <template>
            <v-bottom-navigation
                v-model="pageIndex"
                :background-color="color"
                dark
                shift
            >
                <v-btn @click="$router.push({ name: 'Products' })">
                    <span>Products</span>

                    <v-icon>mdi-card-search-outline</v-icon>
                </v-btn>

                <v-btn @click="$router.push({ name: 'Bucket' })">
                    <span>Bucket</span>

                    <v-icon>mdi-cart-outline</v-icon>
                </v-btn>

                <v-btn @click="$router.push({ name: 'Orders' })">
                    <span>Orders</span>

                    <v-icon>mdi-clipboard-text-clock</v-icon>
                </v-btn>

                <v-btn @click="$router.push({ name: 'Account' })">
                    <span>Profile</span>

                    <v-icon>mdi-face-man-profile</v-icon>
                </v-btn>
            </v-bottom-navigation>
        </template>
    </header>
</template>

<script>
export default {
    name: 'Header',
    computed: {
        pageIndex: {
            get() {
                return this.$store.getters['paginationModules/getIndex'];
            },
            set(value) {
                this.$store.dispatch('paginationModules/changeIndexAction', value);
            },
        },
        color() {
            switch (this.$store.getters['paginationModules/getIndex']) {
            case 0:
                return '#607D8B';
            case 1:
                return '#009688';
            case 2:
                return '#795548';
            case 3:
                return '#3F51B5';
            default:
                return '#607D8B';
            }
        },
    },
};
</script>

<style scoped>

</style>
