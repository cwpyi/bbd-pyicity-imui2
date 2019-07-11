<template>
    <div class="root woodpecker">
        <skeleton-element class="_circle" width="7rem" height="7rem" borderRadius="6rem"></skeleton-element>
        <skeleton-element class="rect" width="8.5rem" height="1.5rem"></skeleton-element>
        <skeleton-element class="rect" width="8.5rem" height="1.5rem"></skeleton-element>
    </div>
</template>

<script>
import SkeletonElement from "./base/SkeletonElement";

export default {
    components: {SkeletonElement}
}
</script>

<style lang="scss" scoped>
    @import "base/skeleton.css";

    .woodpecker {
        text-align: center;
        background-color: white;
        height: 100%;
        padding: 2rem 0;
        ._circle {
            display: inline-block;
        }
        .rect {
            display: inline-block;
            margin-top: 0.5rem;
        }
    }
</style>