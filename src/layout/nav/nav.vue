<template>
    <div class="_nav" :class="border==0?'noborder':''">
        <div class="tab" v-for="(item, index) in newData" @click="selectItem(index, item)">
            <span :class="item.selected?'selected imuiColor imuiBorderBottom':'unselected'">
                {{item.name}}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        border: [Number, String],
        data: Array,
        callback: Function
    },
    data() {
        return {
            newData: this.normalData()
        }
    },
    watch: {
        data: function(oldVal, newVal) {
            this.newData = this.normalData();
        }
    },
    methods: {
        normalData: function() {
            let result = new Array;
            this.data.forEach((item, i)=>{
                result[i] = { selected: i == 0, name: item.name }
            });
            return result;
        },
        selectItem: function(index, item) {
            this.newData.forEach((item, i)=>{
                item['selected'] = i == index;
            });
            this.callback && this.callback(item);
        }
    }
}
</script>

<style lang="scss" scoped>
    ._nav {
        width: 100%;
        display: flex;
        border-bottom: 1px solid #eeeeee;
        background-color: #ffffff;
        box-sizing: border-box;

        .tab {
            flex: 1;
            text-align: center;
            
            span {
                display: inline-block;
                font-size: 0.37rem;
                padding: 0.4rem 0;
            }
        }

        .selected {
            color: #fe952c;
            border-bottom: 2px solid #fe952c;
        }

        .unselected {
            color: #333333;
        }
    }

    .noborder {
        border-bottom: 0 !important;
    }
</style>
