<template>
    <div class="_form_label_input">
        <div class="container" :class="border==0?'noborder':''">
            <span class="name">{{name}}</span>
            <input type="text" :class="isright==1?'right':''" :placeholder="placeholder" :value="value" 
                :readOnly="readonly" :maxlength="maxlength" @input="onInput" ref="input"></input>
            <img v-if="onhelp" :src="iconHelp" @click="onHelp"/>    
        </div>
    </div>
</template>

<script>
import iconHelp from '../../../res/help.png';

export default {
    props: {
        name: String,
        value: String,
        border: [Number, String],
        placeholder: String,
        maxlength: [Number, String],
        readonly: Boolean,
        isright: [Number, String],
        oninput: Function,
        onhelp: Function,
        callback: Function //弃用
    },
    data() {
        return {
            iconHelp: iconHelp
        }
    },
    methods: {
        getValue: function() {
            return this.$refs.input.value;
        },
        onInput: function(event) {
            this.oninput && this.oninput(this.$refs.input.value);
            this.callback && this.callback(this.$refs.input.value); //弃用
        },
        onHelp: function() {
            this.onhelp && this.onhelp();
        }
    }
}
</script>

<style lang="scss" scoped>
    ._form_label_input {
        padding-left: 0.4rem;
        background-color: #ffffff;

        .container {
            display: flex;
            padding: 0.4rem 0.4rem 0.4rem 0;
            border-bottom: 1px solid #eeeeee;
            align-items: center;

            .name {
                display: inline-block;
                font-size: 0.4rem;
                color: #333333;
                width: 2.6rem;
                text-align: left;
            }

            input {
                flex: 1;
                border: 0;
                outline: none;  
                -webkit-tap-highlight-color: rgba(0,0,0,0);
                color: #666666;
                font-size: 0.4rem;
            }

            input::-webkit-input-placeholder {   
                color: #999;
            }

            .right {
                text-align: right;
            }

            img {
                width: 0.5rem;
                height: 0.5rem;
            }
        }

        .noborder {
            border-bottom: 0 !important;
        }
    }
</style>
