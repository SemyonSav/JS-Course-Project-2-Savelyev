export default {
    state: {
        bucket: [],
    },
    mutations: {
        setBucket(state, bucket) {
            state.bucket = bucket;
        },

        addToBucket(state, id) {
            state.bucket.push({
                id,
                count: 1,
            });
        },

        removeFromBucket(state, id) {
            state.bucket = state.bucket.filter(product => product.id !== id);
        },

        changeCountInBucket(state, { id, count }) {
            state.bucket.map((product) => {
                if (product.id === id) {
                    product.count += count;
                }
            });
        },
    },
    actions: {
        setBucketAction(context, bucket) {
            context.commit('setBucket', bucket);
        },

        addToBucketAction(context, id) {
            context.commit('addToBucket', id);
        },

        removeFromBucketAction(context, id) {
            context.commit('removeFromBucket', id);
        },

        changeCountInBucketAction(context, id, count) {
            context.commit('changeCountInBucket', id, count);
        },
    },
    getters: {

    },
    namespaced: true,
};
