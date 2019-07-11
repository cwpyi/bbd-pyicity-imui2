<template>
    <div class="_cuttle" @click="clickEvent">
        <div class="_title" :class="type=='1'?'noborder':''" @click="toggle">
            <span :class="islighter?'lighter':''">{{title}}</span><img :src="isUp?iconUp:iconDown"/>
        </div>
        <div class="_content" v-show="isUp">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
import iconUp from '../../../res/up.png';
import iconDown from '../../../res/down.png';

export default {
    props: {
        type: String,
        title: String,
        isspread: Boolean,
        islighter: Boolean,
        onclick: Function
    },
    data() {
        return {
            iconUp: iconUp,
            iconDown: iconDown,
            isUp: this.isspread
        }
    },
    methods: {
        toggle: function() {
            this.isUp = !this.isUp;
        },
        clickEvent: function() {
            this.onclick && this.onclick();
        }
    }
}
</script>

<style lang="scss" scoped>
    ._cuttle {
        background-color: #ffffff;
        padding-left: 0.4rem;

        ._title {
            display: flex;
            font-size: 0.4rem;
            color: #333333;
            padding: 0.4rem 0.4rem 0.4rem 0;
            align-items: center;
            border-bottom: 1px solid #f4f4f4;

            span {
                flex: 1;
                text-align: left;
                font-weight: bold;
                padding-right: 0.27rem;
            }

            img {
                width: 0.4rem;
                height: 0.2rem;
            }

            .noborder {
                border-bottom: 0 !important;
            }

            .lighter {
                font-weight: normal;
            }
        }
    }
</style>
