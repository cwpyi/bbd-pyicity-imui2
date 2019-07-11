<template>
    <div class="sklt" :style="{width: width, height:height, borderRadius: borderRadius}">{{text}}</div>
</template>

<script>
    export default {
        props: {
            width: String,
            height: String,
            borderRadius: String,
            text: String
        }
    }
</script>

<style scoped>
    .sklt {
        background-color: #f4f4f4;
        text-align: center;
        color: #999;
    }
</style>