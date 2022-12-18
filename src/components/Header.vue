<template>
    <header>
        <div class="text-menu">
            <span class="text-menu__item text-menu__item--selected">Товары</span>
            <span class="text-menu__item">Мои заказы</span>
        </div>
        <div class="icons-menu">
            <span class="text-menu__item text-menu__item--selected">Товары</span>
            <span class="text-menu__item">Мои заказы</span>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>
header {
    height: 60px;
    width: 100%;
    border-bottom: antiquewhite solid 1px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

</style>