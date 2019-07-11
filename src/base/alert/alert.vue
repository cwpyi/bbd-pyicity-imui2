<template>
<transition name="fade">
    <div class="alert" v-if="isShow">
        <div class="container">
            <div class="icon" v-if="icon"><img :src="icon"/></div>
            <div class="_content" :class="[icon?'addIcon':'']">
                <div class="_title">{{title}}</div>
                <div class="_text" :class="type==1?'_left':''" v-html="content" ref="text"></div>
                <div class="_close imuiColor" @click="close">{{btnTextCpd}}</div>
            </div>
        </div>
    </div>
</transition>
</template>

<script>
export default {
    props: {
        type: String,
        icon: String,
        title: String,
        content: String,
        btnText: String,
        callback: Function
    },
    data() {
        return {
            isShow: false
        }
    },
    computed: {
        btnTextCpd: function() {
            return this.btnText || '关闭';
        }
    },
    watch: {
        isShow: function(newVal, oldVal) {
            if(newVal) {
                this.$nextTick(()=>{
                    this.$refs.text.style.maxHeight = window.screen.height * 0.6 + 'px';
                });
            }
        }
    },
    methods: {
        close: function() {
            this.callback && this.callback();
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../../ani/animation.scss';

    .alert {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 999;

        .container {
            text-align: center;
            width: 100%;
        }

        .icon {
            position: relative;
            top: 0;
            z-index: 999;
            img {
                height: 2.72rem;
            }
        }

        .addIcon {
           position: relative;
           top: -1.5rem;
           padding-top: 1.5rem;
        }

        ._content {
            width: 80%;
            background-color: #ffffff;
            border-radius: 0.13rem;
            display: inline-block;

            ._title {
                font-weight: bold;
                font-size: 0.4rem;
                padding-top: 0.53rem;
                padding-bottom: 0.27rem;
                color: #333333;
            }
            ._text {
                font-size: 0.37rem;
                padding: 0 0.53rem 0.53rem 0.53rem;
                line-height: 180%;
                color: #666666;
                overflow-y: auto;
                overflow-x: hidden;
            }
            ._close {
                font-size: 0.4rem;
                padding: 0.4rem;
                border-top: 1px solid #f4f4f4;
                color: #fe952c;
            }
            ._left {
                text-align: left;
            }
        }
    }
</style>
