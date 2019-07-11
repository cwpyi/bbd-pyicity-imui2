<template>
    <div id="_listview" class="_listview" ref="listview" @touchstart="touchStart($event)" 
        @touchmove="touchMove($event)" @touchend="touchEnd($event)">
        <div class="pulling" v-if="isPulling">
            <div class="spinner">
                <div class="double-bounce1"></div>
                <div class="double-bounce2"></div>
            </div>
        </div>
        <slot name="content"></slot> <!--兼容老版本-->
        <slot></slot>
        <div class="pulling" v-if="isLoading">
            <div class="spinner">
                <div class="double-bounce1 imuiBgColor"></div>
                <div class="double-bounce2 imuiBgColor"></div>
            </div>
        </div>
        <div class="prompt" v-else-if="isEnd&&showEndText">
            {{promptText}}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        type: String,
        onrefresh: Function,
        onload: Function,
        showEndText: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            isPulling: false,
            isLoading: false,
            isEnd: this.type=='0',
            promptText: '没有更多内容了',
            touchStartY: 0,
            scrollTop: 0
        }
    },
    methods: {
        end: function() {
            this.isEnd = true;
        },
        reset: function() {
            this.isEnd = false;
        },
        touchStart: function(event) {
            this.touchStartY = event.changedTouches[0].screenY;
        },
        touchMove: function(event) {
            if(this.isLoading || this.isEnd) {
                return ;
            }

            let touchMoveY = event.changedTouches[0].screenY;
            let isUpTo = this.touchStartY - touchMoveY > 80;
            let isDownTo = touchMoveY - this.touchStartY > 80;

            let listviewRef = this.$refs.listview;
            let scrollHeight  = listviewRef.scrollHeight;
            let scrollTop = listviewRef.scrollTop;
            let clientHeight = listviewRef.clientHeight;
            let bottom = scrollHeight - scrollTop - clientHeight;
            if(scrollTop > 0 && bottom <= 5 && isUpTo && this.onload) {
                //上拉加载
                this.isLoading = true;
                this.$nextTick(()=>{
                    this.$refs.listview.scrollTop += 100;
                });
            } else if(scrollTop == 0 && isDownTo && this.onrefresh) {
                //下拉刷新
                this.isPulling = true;
            }
        },
        touchEnd: function(event) {
            if(this.isLoading) {
                this.onload && this.onload(()=>{
                    this.isLoading = false;
                }, ()=>{
                    this.isLoading = false;
                    this.isEnd = true;
                });
            } else if(this.isPulling) {
                this.onrefresh && this.onrefresh(()=>{
                    this.isPulling = false;
                });
            }
        },
        onscroll: function(event) {
            this.scrollTop = event.target.scrollTop;
        },
        anchor: function() {
            this.$refs.listview.scrollTop = this.scrollTop;
        }
    },
    mounted() {
        this.$refs.listview.addEventListener('scroll', this.onscroll);
    },
    destroyed() {
        if(this.$refs.listview) {
            this.$refs.listview.removeEventListener('scroll', this.onscroll);
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../ani/loading.scss';

    ._listview {
        width: 100%;
        overflow: auto;

        .pulling {
            height: 1.2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #999;
            font-size: 0.32rem;
        }

        .prompt {
            text-align: center;
        }
    }
</style>
