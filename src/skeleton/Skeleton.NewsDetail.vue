<template>
    <div class="root">
        <div class="sklt-root" v-if="!loaded">
            <div class="bd-bottom p-3">
                <skeleton-element class="sklt-title"></skeleton-element>
                <div class="flex flex-around mt-2">
                    <skeleton-element width="30%" height="0.375rem"></skeleton-element>
                    <skeleton-element width="30%" height="0.375rem"></skeleton-element>
                </div>
            </div>
            <div class="p-3 pt-0">
                <div class="mt-3" v-for="it in data">
                    <skeleton-element class="sklt-ele indent"></skeleton-element>
                    <skeleton-element class="sklt-ele"></skeleton-element>
                    <skeleton-element class="sklt-ele"></skeleton-element>
                    <skeleton-element class="sklt-ele" width="60%"></skeleton-element>
                </div>
                <skeleton-element class="sklt-banner mt-3"></skeleton-element>
                <div class="mt-3" v-for="it in data">
                    <skeleton-element class="sklt-ele indent"></skeleton-element>
                    <skeleton-element class="sklt-ele" width="30%"></skeleton-element>
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
        props:{
            loaded: Boolean
        },
        data(){
            return {
                data: new Array(3)
            }
        },
        components:{SkeletonElement}
    }
</script>

<style scoped>
    @import "base/skeleton.css";
    .sklt-title{
        margin: auto;
        width: 60%;
        height: 0.6rem;
    }
    .sklt-ele{
        height: 0.4rem;
        margin: 0.2rem 0;
    }
    .indent{
        margin-left: 0.8rem;
    }
</style>