<template>
    <Header></Header>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import Header from "./components/Header.vue";

const { mapState } = createNamespacedHelpers('productsModules')

export default {
    name: 'app',
    components: {Header},
    data() {
        return {
            //text: 'Хуй ца сосни вебпак'
        }
    },
    computed: {
        ...mapState(['text'])
    }
}
</script>

<style>
body {
    margin: 0;
}
</style>