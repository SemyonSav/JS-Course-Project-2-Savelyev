<template>
    <header>
        <template>
            <v-bottom-navigation
                v-model="pageIndex"
                dark
                shift
            >
                <v-btn>
                    <span>Video</span>

                    <v-icon>mdi-television-play</v-icon>
                </v-btn>

                <v-btn>
                    <span>Music</span>

                    <v-icon>mdi-music-note</v-icon>
                </v-btn>

                <v-btn>
                    <span>Book</span>

                    <v-icon>mdi-book</v-icon>
                </v-btn>

                <v-btn>
                    <span>Image</span>

                    <v-icon>mdi-image</v-icon>
                </v-btn>
            </v-bottom-navigation>
        </template>
    </header>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapState } = createNamespacedHelpers('paginationModules');

export default {
    name: 'Header',
    computed: {
        ...mapState(['pageIndex']),
    },
};
</script>

<style scoped>

</style>
