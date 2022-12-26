export default {
    state: {
        profileData: {

        },
        isProfileFilled: false,
    },
    mutations: {
        setProfileData(state, data) {
            state.profileData = data;
        },
        changeProfileFilled(state, isFilled) {
            state.isProfileFilled = isFilled;
        },
    },
    actions: {
        setProfileDataAction(context, data) {
            context.commit('setProfileData', data);
        },
        changeProfileFilledAction(context, isFilled) {
            context.commit('changeProfileFilled', isFilled);
        },
    },
    getters: {
    },
    namespaced: true,
};
