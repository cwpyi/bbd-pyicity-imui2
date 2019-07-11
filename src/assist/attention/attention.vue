<template>
    <div class="_attention">
        <span class="icon">※</span><span class="value" v-html="value"></span>
    </div>
</template>

<script>
export default {
    props: {
        value: String
    }
}
</script>

<style lang="scss" scoped>
    ._attention {
        font-size: 0.35rem;
        color: #999999;
        text-align: left;
        padding: 0.4rem;
        display: flex;

        .icon {
            color: #FA533D;
        }

        .value {
            flex: 1;
            margin-left: 0.1rem;
        }
    }
</style>
