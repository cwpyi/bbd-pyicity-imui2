<template>
    <div class="_scrollfixed" ref="root">
        <div class="_fixed" v-show="fixedIndex!=-1">
            <slot name="title"></slot>
        </div>
        <slot name="content"></slot>
    </div>
</template>

<script>
export default {
    props: {
        callback: Function
    },
    data() {
        return {
            rootObj: undefined,
            fixedIndex: -1
        }
    },
    methods: {
        onScroll: function(event) {
            let scrollTop = this.rootObj.scrollTop;
            let scrollItems = document.getElementsByClassName("_scrollitem");
            let size = scrollItems.length;
            for(let i=0; i<size; i++) {
                let itemObj = scrollItems[i];
                let top = itemObj.offsetTop;
                let bottom = itemObj.offsetTop + itemObj.offsetHeight;
                if(scrollTop > top && scrollTop < bottom && this.fixedIndex != i) {
                    this.fixedIndex = i;
                    this.callback && this.callback(this.fixedIndex);
                } else if(scrollTop == 0) {
                    this.fixedIndex = -1;
                }
            }
        },
        install: function() {
            this.rootObj = document.getElementsByClassName("_listview")[0];
            this.rootObj.addEventListener('scroll', this.onScroll);
        },
        uninstall: function() {
            if(this.rootObj) {
                this.rootObj.removeEventListener('scroll', this.onScroll);
            }
        }
    },
    mounted() {
        this.install();
    },
    activated() {
        this.install();
    },
    deactivated() {
        this.uninstall();
    }
}
</script>

<style lang="scss" scoped>
    ._scrollfixed {
        width: 100%;

        ._fixed {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            z-index: 99;
        }
    }
</style>
