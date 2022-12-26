<template>
    <div>
        <Header></Header>
        <v-card
            class="mx-auto mt-5 profile-card"
        >
            <v-card-title>
                <h1 class="display-1">Профиль</h1>
            </v-card-title>
            <v-card-text>
                <v-form>
                    <v-text-field
                        v-model="profileData.surname"
                        label="Фамилия"
                    />
                    <v-text-field
                        v-model="profileData.name"
                        label="Имя"
                    />
                    <v-text-field
                        v-model="profileData.address"
                        label="Адрес"
                    />
                    <v-text-field
                        v-model="profileData.email"
                        label="Электронная почта"
                    />
                    <v-text-field
                        v-model="profileData.phoneNumber"
                        label="Телефон"
                    />
                    <v-text-field
                        v-model="profileData.birthYear"
                        label="Год рождения"
                    />
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="#673AB7"
                    @click="acceptProfile"
                >
                    Сохранить
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import Header from '../components/Header';

export default {
    name: 'InfoPage',
    components: { Header },
    data() {
        return {
            profileData: this.$store.state.profileModules.profileData,
        };
    },
    methods: {
        acceptProfile() {
            const profileDataKeys = Object.keys(this.profileData);
            if (profileDataKeys.filter(key => this.profileData[key] === '').length === 0) {
                this.$store.dispatch('profileModules/changeProfileFilledAction', true);
            } else {
                this.$store.dispatch('profileModules/changeProfileFilledAction', false);
            }

            this.$store.dispatch('profileModules/setProfileDataAction', this.profileData);
            alert('Данные сохранены');
        },
    },
};
</script>

<style scoped>
.profile-card {
    width: 600px;
    margin: 30px auto;
}
</style>
