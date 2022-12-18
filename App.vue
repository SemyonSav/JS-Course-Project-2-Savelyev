<template>
    <div class="test">
        {{ text }}
    </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            text: 'Хуй ца сосни вебпак'
        }
    }
}
</script>

<style>
.test {
    color: red;
}
</style>