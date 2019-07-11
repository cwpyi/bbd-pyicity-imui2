<template>
<transition name="fade">
    <div class="imui2-loading" v-if="isShow">
        <div class="content">
            <div>
                <div class="icon"><img :src="icon"/></div>
                <span v-html="value"></span>
            </div>
        </div>
    </div>
</transition>
</template>

<script>
import iconLoading from '../../res/_icon_loading.png'

export default {
    props: {
        value: String
    },
    data() {
        return {
            isShow: false,
            icon: iconLoading
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '../ani/animation.scss';

    .imui2-loading {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 999;

        .content {
            background-color: rgba(0, 0, 0, 0.8);
            border-radius: 0.266rem;
            color: #ffffff;
            font-size: 0.37rem;
            display: flex;
            justify-content: center;
            min-width: 2.8rem;
            padding-top: 0.64rem;
            padding-bottom: 0.667rem;
            padding-left: 0.4rem;
            padding-right: 0.4rem;
            box-sizing: border-box;

            .icon {
                text-align: center;
                img {
                    width: 0.693rem;
                    animation: spin 1s linear infinite;
                    -webkit-animation: spin 1s linear infinite;
                }
            }

            span {
                display: block;
                margin-top: 0.4rem;
            }
        }
    }
</style>
