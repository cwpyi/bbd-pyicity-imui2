<template>
    <div class="root">
        <div class="sklt-root" v-if="!loaded">
            <div class="bd-bottom p-3">
                <skeleton-element class="sklt-title"></skeleton-element>
            </div>
            <div class="flex p-3 pl-0 ml-3 bd-bottom" v-for="i in data">
                <skeleton-element v-if="withImg" class="sklt-list-img mr-3" border-radius="0.26rem"></skeleton-element>
                <div class="sklt-list-text">
                    <skeleton-element width="100%" height="0.4rem"></skeleton-element>
                    <skeleton-element class="mt-2" v-for="l in lines" :width="l" height="0.375rem">{{l}}</skeleton-element>
                    <skeleton-element class="mt-2" width="50%" height="0.375rem"></skeleton-element>
                </div>
            </div>
        </div>
        <slot v-else></slot>
    </div>
</template>

<script>
    import SkeletonElement from "./base/SkeletonElement";

    export default {
        name: "sklt-list",
        props: {
            count: {
                type: Number,
                default: 4
            },
            withImg: Boolean,
            multiLine: {
                type: Number,
                default: 2
            },
            loaded: Boolean
        },
        data() {
            const lines = new Array(this.multiLine - 2);
            for(let i=0;i < lines.length; i++){
                lines[i] = Math.floor(Math.random() * 60) + 30 + '%';
            }
            return {
                data: new Array(this.count),
                lines: lines,
                isInit: false
            }
        },
        components: {SkeletonElement}
    }
</script>

<style scoped>
    @import "base/skeleton.css";
</style>