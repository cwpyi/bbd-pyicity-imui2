<template>
    <div class="imui2_row_menu">
        <div class="box" :class="border==0?'noborder':''">
            <div class="label">{{name}}</div>
            <div class="options">
                <span v-for="(item, index) in data" @click="onSelect(index)">
                    <img :src="item.checked?IconChecked:IconUnChecked"/>
                    {{item.name}}
                </span>
            </div>
        </div>
    </div>    
</template>

<script>
import IconChecked from '../../../res/_icon_checked.png';
import IconUnChecked from '../../../res/_icon_uncheck.png';

export default {
    props: {
        name: String,
        data: Array,
        border: String,
        onchange: Function
    },
    data() {
        return {
            IconChecked, IconUnChecked
        }
    },
    methods: {
        onSelect(index) {
            this.data.forEach((value, i)=>{
                if(index == i) {
                    value.checked = true;
                    this.onchange && this.onchange(value);
                } else {
                    value.checked = false;
                }
            })
        },
        getValue() {
            let result;
            this.data.forEach((value, i)=>{
                if(value.checked) {
                    result = value;
                    return ;
                }
            });
            return result;
        }
    }
}
</script>

<style lang="scss" scoped>
    .imui2_row_menu {
        padding-left: 0.4rem;
        background-color: #ffffff;

        .box {
            display: flex;
            padding: 0.4rem 0.4rem 0.4rem 0;
            font-size: 0.4rem;
            align-items: center;
            border-bottom: 1px solid #eeeeee;
            .label {
                color: #333333;
            }
            .options {
                flex: 1;
                text-align: right;
                color: #666666;
                span {
                    display: inline-flex;
                    align-items: center;
                }
                img {
                    width: 0.45rem;
                    height: 0.45rem;
                    margin-right: 0.133rem;
                }
                :nth-child(2) {
                    margin-left: 0.8rem;
                }
            }
        }

        .noborder {
            border-bottom: 0 !important;
        }
    }
</style>
