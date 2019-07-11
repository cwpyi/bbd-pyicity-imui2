<template>
    <div class="_upgrade2" v-html="title">
    </div>
</template>

<script>
export default {
    props: {
        title: String
    }
}
</script>

<style lang="scss" scoped>
    ._upgrade2 {
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ffffff;
        z-index: 999;
        font-size: 0.45rem;
        top: 0;
        bottom: 0;
        font-size: 0.42rem;
        color: #ffffff;
        padding: 0.4rem;
    }
</style>
