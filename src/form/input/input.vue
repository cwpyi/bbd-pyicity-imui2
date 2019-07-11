<template>
    <div class="_form_input" :class="border==0?'noborder':''">
        <input type="text" :value="value" :placeholder="placeholder" :maxlength="maxlength" @input="onInput" ref="input"></input>    
    </div>
</template>

<script>
export default {
    props: {
        value: String,
        border: String,
        placeholder: String,
        maxlength: [Number, String],
        oninput: Function,
        callback: Function, //弃用
    },
    methods: {
        getValue: function() {
            return this.$refs.input.value;
        },
        onInput: function(event) {
            let val = this.$refs.input.value;
            this.oninput && this.oninput(val);
            this.callback && this.callback(val); //弃用
        }
    }
}
</script>

<style lang="scss" scoped>
    ._form_input {
        background-color: #ffffff;
        padding: 0.4rem;
        border-bottom: 1px solid #eeeeee;

        input {
            width: 100%;
            border: 0;
            outline: none;  
            -webkit-tap-highlight-color: rgba(0,0,0,0);
            color: #333;
            font-size: 0.4rem;
            padding-left: 0;
            padding-right: 0;
        }

        input::-webkit-input-placeholder {   
            color: #999;
        }

        .noborder {
            border-bottom: 0 !important;
        }
    }
</style>
