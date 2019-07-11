<template>
    <div class="_nav2">
        <div class="tab" v-for="(item, index) in newData" :class="item.selected?'selected imuiBgColor':'unselected'" 
            @click="selectItem(index, item)">
            {{item.name}}
        </div>
    </div>
</template>

<script>
export default {
    props: {
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
    ._nav2 {
        width: 100%;
        display: flex;
        border-bottom: 1px solid #eeeeee;
        background-color: #ffffff;
        box-sizing: border-box;

        .tab {
            flex: 1;
            font-size: 0.37rem;
            padding: 0.27rem 0;
        }

        .selected {
            color: #ffffff;
            background-color: #fe952c;
        }

        .unselected {
            color: #333333;
        }
    }
</style>
