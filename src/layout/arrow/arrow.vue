<template>
    <div class="_arrow" @click="onGo">
        <div class="icon imuiBgColor" v-if="hasicon" :class="isplace?'':'hidden'"></div>
        <div class="container" :class="[border==0?'noborder':'', haspadding?'':'nopadding']">
            <div class="left">
                <slot name="content"></slot>
            </div>
            <img v-if="hasarrow" class="right" :src="iconArrow"/>
        </div>
    </div>
</template>

<script>
import iconArrow from '../../../res/_icon_arrow_right.png'

export default {
    props: {
        border: String,
        hasicon: {
            type: Boolean,
            default: false
        },
        isplace: {
            type: Boolean,
            default: true
        },
        hasarrow: {
            type: Boolean,
            default: true
        },
        haspadding: {
            type: Boolean,
            default: true
        },
        msg: Object,
        callback: Function,
        params: Object //弃用
    },
    data() {
        return {
            iconArrow: iconArrow
        }
    },
    methods: {
        onGo: function() {
            this.callback && this.callback(this.msg||this.params);
        }
    }
}
</script>

<style lang="scss" scoped>
    ._arrow {
        background-color: #ffffff;
        display: flex;
        align-items: center;

        .icon {
            width: 0.1rem;
            height: 0.4rem;
            background-color: #fe952c;
        }

        .container {
            flex: 1;
            display: flex;
            margin-left: 0.4rem;
            padding: 0.4rem 0.4rem 0.4rem 0;
            align-items: center;
            justify-content: space-between;
            font-size: 0.36rem;
            border-bottom: 1px solid #eeeeee;
        }

        .left {
            text-align: left;
            font-size: 0.4rem;
            color: #333333;
            flex: 1;
        }

        .right {
            float: right;
            width: 0.4rem;
        }

        .noborder {
            border-bottom: 0 !important;
        }

        .hidden {
            visibility: hidden;
        }

        .nopadding {
            padding: 0;
        }
    }
</style>
