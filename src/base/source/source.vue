<template>
    <div class="source" v-html="value" :class="type==0?'nobg':''"></div>
</template>

<script>
export default {
    props: {
        type: String,
        value: String
    }
}
</script>

<style lang="scss" scoped>
    .source {
        color: #999;
        font-size: 0.32rem;
        background-color: #ffffff;
        width: 100%;
        height: 1.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .nobg {
        background-color: transparent !important;
    }
</style>
