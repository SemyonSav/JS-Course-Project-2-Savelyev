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
                    <v-text-field label="Фамилия" />
                    <v-text-field label="Имя" />
                    <v-text-field label="Адрес" />
                    <v-text-field label="Электронная почта" />
                    <v-text-field label="Телефон" />
                    <v-text-field label="Год рождения" />
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="#673AB7">Сохранить</v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import Header from '../components/Header';

export default {
    name: 'InfoPage',
    components: { Header },
};
</script>

<style scoped>
    .profile-card {
        width: 600px;
        margin: 30px auto;
    }
</style>
