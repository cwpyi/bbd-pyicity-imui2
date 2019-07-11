<template>
    <div class="_week">
        <div class="tab" v-for="(item, index) in data" :class="item.selected?'selected imuiBgColor':''" 
            @click="selectItem(index, item)">
            <div>{{item.name}}</div>
            <div class="day">{{item.day}}</div>
        </div>
    </div>
</template>

<script>
const WEEKS = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']

export default {
    props: {
        type: String,
        selectedDate: [Number, String],
        separator: {
            type: String,
            default: '-'
        },
        callback: Function
    },
    data() {
        return {
            data: this.getCurrentMongthDate()
        }
    },
    methods: {
        getTotalDays: function() {
            let date = new Date();
            date.setMonth(date.getMonth() + 1);
            date.setDate(0);
            return date.getDate();
        },
        getCurrentMongthDate: function() {
            let result = [];
            let date = new Date();
            //是否从第二天开始显示
            if(this.type == '1') {
                date.setDate(date.getDate()+1);
            }
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();
            let days = this.getTotalDays();
            let len = days - day + 1;
            len = len > 7 ? 7 : len;
            let nextLen = 7 - len || 0;
            let index = 0;
            for(let i=0;i<len;i++) {
                let newDay = day + i;
                newDay = newDay > 9 ? newDay : '0'+newDay;
                let formatMonth = month > 9 ? month : '0'+month;
                let date = year + this.separator + formatMonth + this.separator + newDay;
                result[index] = {
                    name: WEEKS[new Date(date).getDay()],
                    day: newDay,
                    date: date
                };
                index++;
            }

            //检查隔年
            if(month < 11) {
                month++;
            } else {
                year++;
                month = 1;
            }
            
            month = month > 9 ? month : '0'+month;
            for(let i=0;i<nextLen;i++) {
                let day = 1 + i;
                day = day > 9 ? day : '0'+day;
                let date = year + this.separator + month + this.separator + day;
                result[index] = {
                    name: WEEKS[new Date(date).getDay()],
                    day: day,
                    date: date
                };
                index++;
            }
            this.setSelectedStatus(result);
            return result;
        },
        setSelectedStatus(result) {
            let hasSelected = false;
            result.forEach((item, index)=>{
                if(this.selectedDate == item.date) {
                    item['selected'] = true;
                    hasSelected = true;
                } else {
                    item['selected'] = false;
                }
            })
            if(!hasSelected) {
                result[0].selected = true;
            }
        },
        selectItem: function(index, item) {
            this.data.forEach((item, i)=>{
                item['selected'] = i == index;
            });
            this.callback && this.callback(item);
        }
    }
}
</script>

<style lang="scss" scoped>
    ._week {
        display: flex;
        border-bottom: 1px solid #eeeeee;
        background-color: #ffffff;

        .tab {
            flex: 1;
            font-size: 0.28rem;
            color: #333333;
            padding: 0.2rem 0;

            .day {
                margin-top: 0.15rem;
                color: #666666;
            }
        }

        .selected {
            color: #ffffff !important;
            background-color: #fe952c;

            .day {
                color: #ffffff !important;
            }
        }
    }
</style>
