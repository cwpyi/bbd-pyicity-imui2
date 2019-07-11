<template>
    <div class="imui2-shadow" @click="onGo">
        <slot name="content"></slot>
    </div>
</template>

<script>
export default {
    props: {
        callback: Function
    },
    methods: {
        onGo() {
            this.callback && this.callback();
        }
    }
}
</script>

<style lang="scss" scoped>
    .imui2-shadow {
        box-shadow: 2px 1px 12px #eee;
        border-radius: 4px;
        background-color: #ffffff;
        display: inline-block;
    }
</style>
