<template>
    <div class="_form_label" @click="onGo">
        <div class="container" :class="border==0?'noborder':''">
            <span class="name">{{name}}</span>
            <span class="content" :class="value?'c1':'c2'">{{value||content||placeholder}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        border: String,
        name: String,
        value: String,
        placeholder: String,
        msg: Object,
        callback: Function,
        content: String, //弃用
    },
    methods: {
        onGo: function() {
            this.callback && this.callback(this.msg);
        }
    }
}
</script>

<style lang="scss" scoped>
    ._form_label {
        padding-left: 0.4rem;
        background-color: #ffffff;

        .container {
            display: flex;
            padding: 0.4rem 0.4rem 0.4rem 0;
            border-bottom: 1px solid #eeeeee;

            .name {
                display: inline-block;
                font-size: 0.4rem;
                text-align: left;
                padding-right: 0.4rem;
            }

            .content {
                flex: 1;
                display: inline-block;
                font-size: 0.4rem;
                color: #666666;
                text-align: right;
            }

            .c1 {
                color: #333333;
            }

            .c2 {
                color: #999999;
            }
        }

        .noborder {
            border-bottom: 0 !important;
        }
    }
</style>
