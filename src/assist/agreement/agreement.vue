<template>
    <div class="_agreement">
        <img :src="isChecked?iconSelected:iconUnselect" @click="onToggle"/>
        <span class="agree">同意</span>
        <span class="name" @click="onRule">《{{name}}》</span>
    </div>
</template>

<script>
import iconUnselect from '../../../res/_icon_unselect.png'
import iconSelected from '../../../res/_icon_selected.png'

export default {
    props: {
        name: String,
        ontoggle: Function,
        onread: Function,
        oncheck: Function, //弃用
        callback: Function //弃用
    },
    data() {
        return {
            isChecked: false,
            iconUnselect: iconUnselect,
            iconSelected: iconSelected
        }
    },
    methods: {
        onToggle: function() {
            this.isChecked = !this.isChecked;
            this.ontoggle && this.ontoggle(this.isChecked);
            this.oncheck && this.oncheck(this.isChecked); //弃用
        },
        onRule: function() {
            this.onread && this.onread();
            this.callback && this.callback(); //弃用
        }
    }
}
</script>

<style lang="scss" scoped>
    ._agreement {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.32rem;
        color: #999999;
        padding: 0.3rem;

        img {
            width: 0.4rem;
        }

        .agree {
            margin-left: 0.27rem;
        }

        .name {
            text-decoration: underline;
        }
    }
</style>
