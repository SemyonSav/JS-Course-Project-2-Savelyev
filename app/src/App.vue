<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'App',
    created() {
        this.$store.dispatch('bucketModules/setBucketAction', this.getBucket());

        const profile = this.getProfile();
        this.$store.dispatch('profileModules/setProfileDataAction', profile.profileData);
        this.$store.dispatch('profileModules/changeProfileFilledAction', profile.isProfileFilled);

        this.$store.dispatch('ordersModules/setOrdersAction', this.getOrders());
    },
    methods: {
        getBucket() {
            try {
                return JSON.parse(window.localStorage.vuex).bucketModules.bucket;
            } catch (err) {
                return [];
            }
        },
        getOrders() {
            try {
                return JSON.parse(window.localStorage.vuex).ordersModules.orders;
            } catch (err) {
                return [];
            }
        },
        getProfile() {
            try {
                return JSON.parse(window.localStorage.vuex).profileModules;
            } catch (err) {
                return {
                    isProfileFilled: false,
                    profileData: {
                        surname: '',
                        name: '',
                        address: '',
                        email: '',
                        phoneNumber: '',
                        birthYear: '',
                    },
                };
            }
        },
    },
};
</script>

<style>
body {
    margin: 0;
}

body::-webkit-scrollbar {
    width: 0;
}
</style>
