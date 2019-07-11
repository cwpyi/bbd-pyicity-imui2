<template>
    <div class="_scrollfixed2" ref="root">
        <slot></slot>
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
                    this.fixed(i);
                    this.callback && this.callback(this.fixedIndex);
                } else if(scrollTop == 0) {
                    this.fixed(-1);
                    this.fixedIndex = -1;
                }
            }
        },
        fixed: function(index) {
            let scrollFixeds = document.getElementsByClassName("_scrollfixed");
            let size = scrollFixeds.length;
            for(let i=0; i<size; i++) {
                let itemObj = scrollFixeds[i];
                itemObj.style.position = index == i ? 'fixed' : 'static';
                itemObj.style.top = index == i ? '0' : '';
                itemObj.style.left = index == i ? '0' : '';
                itemObj.style.right = index == i ? '0' : '';
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
    ._scrollfixed2 {
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
