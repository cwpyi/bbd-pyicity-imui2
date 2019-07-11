import './scss/detail.scss'
import Vue from 'vue'
import BasePlugin from '../plugin/base-plugin'
import FormPlugin from '../plugin/form-plugin'
import SearchPlugin from '../plugin/search-plugin'
import ToastPlugin from '../plugin/toast-plugin'
import AlertPlugin from '../plugin/alert-plugin'
import DialogPlugin from '../plugin/dialog-plugin'
import MenuPlugin from '../plugin/menu-plugin'
import ListviewPlugin from '../plugin/list-view-plugin'
import BottomMenuPlugin from '../plugin/bottom-menu-plugin'
import PhotoPickerPlugin from '../plugin/photo-picker-plugin'
import PreviewPickerPlugin from '../plugin/preview-picker-plugin'
import LayoutPlugin from '../plugin/layout-plugin'
import NavPlugin from '../plugin/nav-plugin'
import TimePlugin from '../plugin/time-plugin'
import RulePlugin from '../plugin/rule-plugin'
import AuthPlugin from '../plugin/auth-plugin'
import ScrollFixedPlugin from '../plugin/scroll-fixed-plugin'
import AttentionPlugin from '../plugin/attention-plugin'
import CuttlePlugin from '../plugin/cuttle-plugin'
import ProgressPlugin from '../plugin/progress-plugin'
import ShadowPlugin from '../plugin/shadow-plugin'
import RowRadioPlugin from '../plugin/row-radio-plugin'
import SkeletonPlugin from '../plugin/skeleton-plugin'
import UpgradePlugin from '../plugin/upgrade-plugin'
import LoadingPlugin from '../plugin/loading-plugin'
import AddressPickerPlugin from "../plugin/address-picker-plugin";
import IdCardPlugin from '../plugin/id-card-plugin';
import NumberPlatePlugin from '../plugin/number-plate-plugin';

Vue.use(BasePlugin);
Vue.use(FormPlugin);
Vue.use(SearchPlugin);
Vue.use(ToastPlugin);
Vue.use(AlertPlugin);
Vue.use(DialogPlugin);
Vue.use(MenuPlugin);
Vue.use(ListviewPlugin);
Vue.use(BottomMenuPlugin);
Vue.use(PhotoPickerPlugin);
Vue.use(PreviewPickerPlugin);
Vue.use(LayoutPlugin);
Vue.use(NavPlugin);
Vue.use(TimePlugin);
Vue.use(RulePlugin);
Vue.use(AuthPlugin);
Vue.use(ScrollFixedPlugin);
Vue.use(AttentionPlugin);
Vue.use(CuttlePlugin);
Vue.use(ProgressPlugin);
Vue.use(ShadowPlugin);
Vue.use(RowRadioPlugin);
Vue.use(SkeletonPlugin);
Vue.use(UpgradePlugin);
Vue.use(LoadingPlugin);
Vue.use(AddressPickerPlugin);
Vue.use(IdCardPlugin);
Vue.use(NumberPlatePlugin);

$(function() {
    let obj = new IndexObj();
    obj.initVue();
});

function IndexObj() {
    this.type = this.queryUrlString("type");
}

IndexObj.prototype.queryUrlString = function(name) {
    const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    const r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}

IndexObj.prototype.initVue = function() {
    let ctx = this;
    new Vue({
        el: '#app',
        data: {
            type: this.type,
            menuData: [
                [
                    {
                        tmpname: '全部'
                    },
                    {
                        tmpname: '新闻'
                    },
                    {
                        tmpname: '科技'
                    },
                    {
                        tmpname: '图片'
                    }
                ],
                [
                    {
                        tmpname: '板块'
                    },
                    {
                        tmpname: '娱乐'
                    },
                    {
                        tmpname: '视频'
                    },
                ]
            ],
            multiMenuData: [
                [
                    {
                        tmpname: '全部',
                        list: [
                            {
                                tmpname: '娱乐',
                                list: [
                                    {
                                        tmpname: '图片'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        tmpname: '新闻',
                        list: [
                            {
                                tmpname: '科技1',
                                list: [
                                    {
                                        tmpname: '短视频1'
                                    },
                                    {
                                        tmpname: '短视频2'
                                    },
                                    {
                                        tmpname: '短视频3'
                                    },
                                    {
                                        tmpname: '短视频4'
                                    }
                                ]
                            },
                            {
                                tmpname: '科技2',
                                list: [
                                    {
                                        tmpname: '短视频1'
                                    },
                                    {
                                        tmpname: '短视频2'
                                    },
                                    {
                                        tmpname: '短视频3'
                                    },
                                    {
                                        tmpname: '短视频4'
                                    }
                                ]
                            },
                            {
                                tmpname: '科技3'
                            },
                            {
                                tmpname: '科技4'
                            },
                            {
                                tmpname: '科技5'
                            }
                        ]
                    }
                ],
                [
                    {
                        tmpname: '板块'
                    },
                    {
                        tmpname: '娱乐'
                    },
                    {
                        tmpname: '视频'
                    },
                ]
            ],
            bottomMenuData: [
                {
                    name: '新闻'
                },
                {
                    name: '科技'
                },
                {
                    name: '娱乐'
                },
                {
                    name: '娱乐'
                }
            ],
            photos: [
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523265077223&di=6160b7994810c7cd9322b4bd468a3b01&imgtype=0&src=http%3A%2F%2Farticle.fd.zol-img.com.cn%2Ft_s640x2000%2Fg5%2FM00%2F00%2F0E%2FChMkJ1Zq21-ICcSMAANU_PJNZDcAAGC4AHLqIYAA1UU695.jpg',
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523865898&di=c73ee70ef3a5ca848f66381de2d6c81a&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170117%2F0af1f5ea77214949b5d03d5899b02531_th.jpg'
            ],
            navData: [
                {
                    name: '科技'
                },
                {
                    name: '新闻'
                },
                {
                    name: '娱乐'
                }
            ],
            rowMenuData: [
                {
                    checked: true,
                    name: "建议"
                },
                {
                    checked: false,
                    name: "投诉"
                }
            ],
            ruleData: `
                1、每位用户每天可签到1次，每次签到获得2积分。
                ↵
                ↵2、签到实行单月累计签到，累计次数月底清零。
                ↵
                ↵3、每月累计签到逢满7天、14天、21天、满月即可激活相应宝箱领取签到奖金，100%获奖。
                ↵
                ↵4、已激活宝箱请尽快打开领取奖金，未打开的宝箱奖金将在当月底作废，
                ↵
                ↵5、您获得的积分可用于参与爱城市网APP举办的多种活动，兑换奖品。
                ↵
                ↵6、签到活动最终解释权归爱城市网所有。            
            `,
            scrollFixedItem: -1,
            progress: 0,
            inputValue: '1234556',
            loaded: false,
            showAddressPicker: false,
            address:'',
            labeltext: ''
        },
        watch: {
            inputValue(val) {
                console.log("inputValue=", val);
            }
        },
        methods: {
            goJump: function(type) {
                location.href = "detail.html?type="+type;
            },
            onload: function(done, end) {
                setTimeout(() => {
                    // done();
                    end()
                }, 2000);
            },
            onMultiMenu: function(index, array) {
                console.log('onMultiMenu', array);
            },
            searchCallback: function(keyword) {
                console.log('searchCallback', keyword);
            },
            commonCallback: function(value) {
                console.log('commonCallback', value);
            },
            onScrollFixed: function(index) {
                this.scrollFixedItem = index;
            },
            selectAddress(){
                this.showAddressPicker = true;
                this.$imui2.addressPicker.show({
                    title: '选择地址'
                }, (d)=>{
                    this.address = d.province + ' ' + d.city + ' ' + d.town;
                })
            },
            onAddressSelected(d){
                this.address = d.province + ' ' + d.city + ' ' + d.town;
                this.showAddressPicker=false;
            }
        },
        mounted() {
            if(this.type == 100) {
                this.$imui2.alert.show({
                    icon: '',
                    title: '爱城市网',
                    content: '2018年最佳MVP应用'
                });
            }
            else if(this.type == 101) {
                this.$imui2.dialog.show({
                    icon: '',
                    title: '爱城市网',
                    content: '2018年最佳MVP应用'
                });
            }
            else if(this.type == 102) {
                this.$imui2.toast.show('2018年最佳MVP应用');
            }
            else if(this.type == 103) {
                this.$imui2.btoast.show('提交成功');
            }
            else if(this.type == 202) {
                this.$imui2.bottomMenu.show({
                    title: '选择器',
                    content: this.bottomMenuData
                }, (item)=>{
                    console.log(item);
                })
            }
            else if(this.type == 400) {
                this.$imui2.photoPicker.show((type)=>{
                    console.log('photoPicker', type);
                });
            }
            else if(this.type == 401) {
                this.photos = ['http://zwfw.hunan.gov.cn/picPathMapping?picPath=approve%2F2017-12-19%2F1513652311401%24%24%E5%AF%86%E7%A0%81%E4%BF%AE%E6%94%B9.png'];
                this.$imui2.previewPicker.show(this.photos);
            }
            else if(this.type == 1000) {
                setInterval(() => {
                    this.progress += 10;
                    if(this.progress > 100) {
                        this.progress = 0;
                    }
                    console.log("<<<<<<<<<", this.progress);
                }, 3000);
            }
            else if(this.type == 1001) {
                this.$imui2.loading.show("正在获取定位...");
            }
            // console.log(">>>", this.$refs.rowradio.getValue());
            const $this = this;
            //骨架屏模拟
            setTimeout(()=>{
                $this.loaded = true;
                this.labeltext = '11111';
            },2000);
        }
    });
};