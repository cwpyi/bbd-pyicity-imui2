<template>
    <div class="_password" :class="border==0?'_noborder':''">
        <span class="name" v-if="name">{{name}}</span>
        <input :type="inputType==0?'password':'text'" :placeholder="placeholder" 
            :value="newValue" @input="onInput" ref="password"></input>
        <img :src="icon" @click="toggleClick"/>
    </div>
</template>

<script>
import iconShow from '../../../res/display.png';
import iconHide from '../../../res/hide.png';

export default {
    props: {
        border: String,
        name: String,
        value: String,
        placeholder: String,
        oninput: Function,
        callback: Function //弃用
    },
    data() {
        return {
            inputType: this.type,
            newValue: this.value
        }
    },
    computed: {
        icon: function() {
            return this.inputType == 0 ? iconHide : iconShow;
        }
    },
    methods: {
        getValue() {
            return this.$refs.password.value;
        },
        toggleClick: function() {
            this.newValue = this.$refs.password.value;
            this.inputType = this.inputType == 0 ? 1 : 0;
        },
        onInput: function(event) {
            this.oninput && this.oninput(this.$refs.password.value);
            this.callback && this.callback(this.$refs.password.value); //弃用
        }
    }
}
</script>

<style lang="scss" scoped>
    ._password {
        display: flex;
        background-color: #ffffff;
        padding: 0.4rem;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #eeeeee;

        .name {
            display: inline-block;
            font-size: 0.4rem;
            color: #333333;
            width: 2.6rem;
            text-align: left;
        }

        input {
            flex: 1;
            width: 100%;
            border: 0;
            outline: none;  
            -webkit-tap-highlight-color: rgba(0,0,0,0);
            color: #333;
            font-size: 0.4rem;
        }

        input::-webkit-input-placeholder {   
            color: #999;
        }

        img {
            margin: 0 0.2rem;
            width: 0.6rem;
        }
    }

    ._noborder {
        border-bottom: 0 !important;
    }
</style>
