<template>
    <div id="keyboard" class="car_keyboard" @click="onHide">
        <!-- 中文键盘 -->
        <div v-if="!isEng" class="car_container" @click.stop>
            <div class="line">
                <div v-for="(item,index) in characterOne" @click="onTypeWord(item,index,1)">
                    <div v-if="aniCone[index]"
                        :class="{keycap:true,myani01:province==item,myani:province!=item,extra:province==item}">
                        {{item}}
                    </div>
                    <div v-else :class="{keycap:true,extra:province==item}">{{item}}</div>
                </div>
            </div>
            <div class="line">
                <div class="chinese" @click="switchKeyboard">ABC</div>
                <div v-for="(item,index) in characterTwo" @click="onTypeWord(item,index,2)">
                    <div v-if="aniCtwo[index]" 
                        :class="{keycap:true,myani01:province==item,myani:province!=item,extra:province==item}">
                        {{item}}
                    </div>
                    <div v-else :class="{keycap:true,extra:province==item}">{{item}}</div>
                </div>
                <div v-for="(item,index) in characterThree" @click="onTypeWord(item,index,3)"
                    :class="{keycap:true,gray:true,myani01:aniCthree[index]}">{{item}}</div>
                <img class="delete" :src="IconDelete" @click="onDelete"/>
            </div>
        </div>
        <!-- 英文键盘 -->
        <div v-if="isEng" class="car_container" @click.stop>
            <div class="line">
                <div v-for="(item,index) in letterOne"  @click="onType(item,index,1)"
                    :class="{keycap:true,myani:aniOne[index]}">{{item}}</div>
            </div>
            <div class="line">
                <div class="chinese" @click="switchKeyboard">中文</div>
                <div v-for="(item,index) in letterTwo" @click="onType(item,index,2)"
                    :class="{keycap:true,myani:aniTwo[index]}">{{item}}</div>
                <img class="delete" :src="IconDelete" @click="onDelete"/>
            </div>
        </div>
    </div>
</template>

<script>
import IconDelete from '../../../res/_icon_delete_whole.png';

export default {
    props:{
        code: String
    },
    data(){
        return{
            IconDelete, 
            isEng: false,
            province: '',

            characterOne: ['京','津','渝','沪','冀','晋','辽','吉','黑','苏','浙','皖','闽','赣','鲁','豫','鄂','湘','粤','琼','川','贵','云','陕','甘','青','蒙','桂','宁','新'],
            characterTwo: ['藏','港','澳'],
            characterThree: ['使','领','警','学'],
            aniCone: [],
            aniCtwo: [false,false,false],
            aniCthree: [false,false,false,false],

            letterOne: ['1','2','3','4','5','6','7','8','9','0','Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L'],
            letterTwo: ['Z','X','C','V','B','N','M'],
            aniOne: [],
            aniTwo: [false,false,false,false,false,false,false],
        }
    },
    methods:{
        switchKeyboard: function(){
            this.isEng = !this.isEng;
        },
        chineseKeyboard: function(){
            this.isEng = false;
        },
        onDelete: function(){
            this.$emit('callback','delete');
        },
        onHide: function(){
            this.$emit('callback','hide');
        },
        onType: function(value,index,i){
            this.$emit('callback',value);
            if(i == 1){
                this.aniOne.splice(index,1,true);
                setTimeout(() => {
                    this.aniOne.splice(index,1,false);
                }, 500);
            }else if(i == 2){
                this.aniTwo.splice(index,1,true);
                setTimeout(() => {
                    this.aniTwo.splice(index,1,false);
                }, 500);
            }
        },
        onTypeWord: function(value,index,i){
            setTimeout(() => {
                this.isEng = true;
            }, 500);
            this.$emit('callback',value);
            if(i == 1){
                this.aniCone.splice(index,1,true);
                setTimeout(() => {
                    this.aniCone.splice(index,1,false);
                }, 500);
            }else if(i == 2){
                this.aniCtwo.splice(index,1,true);
                setTimeout(() => {
                    this.aniCtwo.splice(index,1,false);
                }, 500);
            }else if(i == 3){
                this.aniCthree.splice(index,1,true);
                setTimeout(() => {
                    this.aniCthree.splice(index,1,false);
                }, 500);
            }
        },
        getProvince: function(citycode){
            if(citycode.startsWith('11')){
                this.province = '京'
            }else if(citycode.startsWith('12')){
                this.province = '津'
            }else if(citycode.startsWith('13')){
                this.province = '冀'
            }else if(citycode.startsWith('14')){
                this.province = '晋'
            }else if(citycode.startsWith('15')){
                this.province = '蒙'
            }else if(citycode.startsWith('21')){
                this.province = '辽'
            }else if(citycode.startsWith('22')){
                this.province = '吉'
            }else if(citycode.startsWith('23')){
                this.province = '黑'
            }else if(citycode.startsWith('31')){
                this.province = '沪'
            }else if(citycode.startsWith('32')){
                this.province = '苏'
            }else if(citycode.startsWith('33')){
                this.province = '浙'
            }else if(citycode.startsWith('34')){
                this.province = '皖'
            }else if(citycode.startsWith('35')){
                this.province = '闽'
            }else if(citycode.startsWith('36')){
                this.province = '赣'
            }else if(citycode.startsWith('37')){
                this.province = '鲁'
            }else if(citycode.startsWith('41')){
                this.province = '豫'
            }else if(citycode.startsWith('42')){
                this.province = '鄂'
            }else if(citycode.startsWith('43')){
                this.province = '湘'
            }else if(citycode.startsWith('44')){
                this.province = '粤'
            }else if(citycode.startsWith('45')){
                this.province = '桂'
            }else if(citycode.startsWith('46')){
                this.province = '琼'
            }else if(citycode.startsWith('50')){
                this.province = '渝'
            }else if(citycode.startsWith('51')){
                this.province = '川'
            }else if(citycode.startsWith('52')){
                this.province = '贵'
            }else if(citycode.startsWith('53')){
                this.province = '云'
            }else if(citycode.startsWith('54')){
                this.province = '藏'
            }else if(citycode.startsWith('61')){
                this.province = '陕'
            }else if(citycode.startsWith('62')){
                this.province = '甘'
            }else if(citycode.startsWith('63')){
                this.province = '青'
            }else if(citycode.startsWith('64')){
                this.province = '宁'
            }else if(citycode.startsWith('65')){
                this.province = '新'
            }
        }
    },
    mounted(){
        if(this.code){
            this.getProvince(this.code);
        }
        for(let i=0;i<30;i++){
            this.aniOne.push(false);
            this.aniCone.push(false);
        }
    }
};
</script>

<style lang="scss" scoped>
    @import './numberPlate.scss';
</style>