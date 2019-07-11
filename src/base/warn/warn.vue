<template>
    <div class="_warn" :class="!isfullscreen||nofullscreen?'_noFullScreen':''">
        <div class="container">
            <img :src="icon"/>
            <div v-if="title" class="title" v-html="title"></div>
            <div v-if="content" class="content" v-html="content"></div>
            <div v-if="btntext0"><div class="btn0 imuiBgColor" @click="onEvent(0)">
                {{btntext0}}
            </div></div>
            <div v-if="btntext1"><div class="btn1 imuiColor imuiBorder" @click="onEvent(1)">
                {{btntext1}}
            </div></div>
        </div>
    </div>
</template>

<script>
import iconSuccess from '../../../res/_icon_success.png'
import iconEmpty from '../../../res/_icon_empty.png'
import iconFailure from '../../../res/_icon_failure.png'

export default {
    props: {
        type: String,
        title: String,
        content: String,
        btntext0: String,
        btntext1: String,
        isfullscreen: {
            type: Boolean,
            default: true
        },
        callback: Function,
        nofullscreen: Boolean //弃用
    },
    computed: {
        icon: function() {
            if(this.type == '1') {
                return iconEmpty;
            } else if(this.type == '2') {
                return iconFailure;
            } else {
                return iconSuccess;
            }
        }
    },
    methods: {
        onEvent: function(position) {
            this.callback && this.callback(position);
        }
    }
}
</script>

<style lang="scss" scoped>
    ._warn {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #ffffff;
        position: absolute;
        bottom: 0;
        top: 0;
        left: 0;
        right: 0;

        .container {
            display: inline-block;
            text-align: center;
            margin-top: -2rem;

            img {
                width: 5.47rem;
                height: 4.53rem;
            }

            .title {
                margin-top: 0.5rem;
                color: #333333;
                font-size: 0.43rem;
                font-weight: bold;
            }
            .content {
                margin-top: 0.27rem;
                color: #999999;
                font-size: 0.32rem;
            }
            .btn0 {
                margin-top: 0.8rem;
                width: 6.73rem;
                padding: 0.31rem;
                font-size: 0.4rem;
                border-radius: 4px;
                text-align: center;
                display: inline-block;
                background-color: #fe952c;
                color: #ffffff; 
            }
            .btn1 {
                margin-top: 0.3rem;
                width: 6.73rem;
                padding: 0.31rem;
                font-size: 0.4rem;
                border-radius: 4px;
                text-align: center;
                display: inline-block;
                border: 1px solid #fe952c;
                color: #fe952c; 
            }
        }
    }
    ._noFullScreen {
        bottom: auto;
        top: auto;
        .container {
            margin-top: 1rem;
        }
    }
</style>
