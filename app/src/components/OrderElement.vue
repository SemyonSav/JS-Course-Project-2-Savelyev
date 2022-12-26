<template>
    <v-card class="card">
        <img
            src="https://storage.vsemayki.ru/images/0/1/1913/1913759/previews/people_7_manshort_front_white_500.jpg"
            class="card__img"
        >
        <div class="product-info">
            <h2 class="product-info--title">Название товара</h2>
            <p class="product-info--text">
                Здесь бля должно быть ёпте короткое описание товара
            </p>
        </div>
        <v-spacer></v-spacer>

        <div class="order-info">
            <h2 class="order-info--date">Дата заказа: 26.12.2022</h2>
            <h3 class="order-info--count">Количество: 3</h3>
        </div>
    </v-card>
</template>

<script>
export default {
    name: "OrderElement"
}
</script>

<style scoped>
.card {
    display: flex;
    padding: 10px 15px;
    height: 150px;
    width: 100%;
}

.card__img {
    height: 130px;
}

.product-info {
    margin-left: 10px;
    width: 200px;
}

.product-info--text {
    margin-top: 10px;
}

.order-info--count {
    margin-top: 10px;
}

</style>
