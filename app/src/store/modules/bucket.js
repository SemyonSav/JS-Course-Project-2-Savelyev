export default {
    state: {
        bucket: [],
    },
    mutations: {
        addToBucket(state, id) {
            state.bucket.push({
                id: id,
                count: 1
            })
        },
        removeFromBucket(state, id) {
            state.bucket = state.bucket.filter(product => product.id !== id);
        },
        changeCountInBucket(state, id, count) {
            state.bucket.map(product => {
                if (product.id === id) {
                    product.count = product.count + count;
                }
            })
        }
    },
    actions: {
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
