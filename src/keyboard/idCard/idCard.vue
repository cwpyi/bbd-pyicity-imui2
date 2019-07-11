<template>
    <div id="keyboard" class="id_keyboard" @click="onHide">
        <div class="id_container" @click.stop>
            <div class="left">
                <div v-for="(item,index) in number" @click="onType(item.name,index)" 
                    :class="{extra:item.name=='0', left_number:true, myani:item.hasAni}">
                    {{item.name}}
                </div>
            </div>
            <div class="right">
                <div class="right_top" @click="onDelete"><img :src="IconDelete"/></div>
                <div class="right_bottom" @click="onHide">完成</div>
            </div>
        </div>
    </div>
</template>

<script>
import IconDelete from '../../../res/_icon_delete.png';

export default {
    data(){
        return{
            IconDelete,
            number: [
                {name:'1',hasAni:false},
                {name:'2',hasAni:false},
                {name:'3',hasAni:false},
                {name:'4',hasAni:false},
                {name:'5',hasAni:false},
                {name:'6',hasAni:false},
                {name:'7',hasAni:false},
                {name:'8',hasAni:false},
                {name:'9',hasAni:false},
                {name:'0',hasAni:false},
                {name:'X',hasAni:false},
            ],
        }
    },
    methods:{
        onType: function(value,index){
            this.$emit('callback',value);
            this.$set(this.number,index,{name:value,hasAni:true});
            setTimeout(() => {
                this.$set(this.number,index,{name:value,hasAni:false});
            }, 500);
        },
        onDelete: function(){
            this.$emit('callback','delete');
        },
        onHide: function(){
            this.$emit('callback','hide');
        }
    }
};
</script>

<style lang="scss" scoped>
.id_keyboard{
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;

    .id_container{
        width: 100%;
        position: fixed;
        bottom: 0;
        display: flex;
        text-align: center;

        .right{
            width: 25%;
            align-items: center;
            line-height: 3rem;

            .right_top{
                background: #d1d4dd;
                height: 50%;

                img{
                    width: 0.613rem;
                    height: 0.453rem;
                }
            }

            .right_bottom{
                height: 50%;
                color: #ffffff;
                background: #fe952c;
                font-size: 0.48rem;
            }
        }

        .left{
            width: 75%;
            color: #333333;
            font-size: 0.64rem;
            background: #ffffff;
            display: flex;
            flex-wrap: wrap;

            .left_number{
                width: 33.333%;
                padding: 0.266rem 0;
                border-top: #eeeeee 0.8px solid;
                border-right: #eeeeee 0.8px solid;
                font-weight: bold;
                box-sizing: border-box;
            }

            .extra{
                width: 66.666%;
            }
        }
        
        .myani{
            animation: changecolor .5s 1;
        }

        @-webkit-keyframes changecolor {
            50% {background: #f4f4f4;}
        }
        
        @keyframes changecolor {
            50% {background: #f4f4f4;}
        }
    }
}
</style>