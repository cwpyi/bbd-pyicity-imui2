<template>
    <div class="fixed-source" :class="type==0?'nobg':''">
        <span v-html="value"></span>
    </div>
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
    .fixed-source {
        color: #999;
        font-size: 0.32rem;
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 1.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 1px solid #eeeeee;
        background-color: #ffffff;
    }

    .nobg {
        border-top: 0 !important;
        background-color: transparent !important;
    }
</style>
