<template>
    <div class="_upgrade" :class="isfullscreen?'':'nofullcreen'">
        <div class="icon"><img :src="IconUpgrade"/></div>
        <div class="title" v-html="this.title || '系统维护中···'"></div>
    </div>
</template>

<script>
import IconUpgrade from '../../../res/_icon_upgrade.png';

export default {
    props: {
        title: String,
        isfullscreen: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            IconUpgrade
        }
    }
}
</script>

<style lang="scss" scoped>
    ._upgrade {
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ffffff;
        z-index: 99;
        font-size: 0.45rem;
        top: 0;
        bottom: 0;
        flex-direction: column;
        .icon {
            img {
                width: 4rem;
            }
        }
        .title {
            margin-top: 1rem;
            font-size: 0.42rem;
            color: #333333;
        }
    }
    .nofullcreen {
        position: static;
        height: auto;
    }
</style>
