<template>
    <div class="root">
        <div class="sklt-root pt-3" v-if="!loaded">
            <skeleton-element class="sklt-banner mx-3"></skeleton-element>
            <div class="flex flex-around p-3">
                <skeleton-element v-for="it in [1,2,3,4]" class="sklt-app" border-radius="0.1rem"></skeleton-element>
            </div>
            <sklt-list :count="6"></sklt-list>
        </div>
        <slot v-else></slot>
    </div>
</template>
<script>
    import SkeletonElement from './base/SkeletonElement';
    import SkltList from "./Skeleton.List";
    export default {
        props:{
            loaded: Boolean
        },
        components:{
            SkltList,
            SkeletonElement,
        }
    }
</script>
<style scoped>
    @import "base/skeleton.css";
    .main-skeleton{
        background-color: #fff;
    }
    .skeleton-bottom{
        margin-top: 0.4rem;
    }
</style>